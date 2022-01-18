import React from "react"
import Header from "./Header"
import Description from "./Description"
import CommentSection from "./CommentSection"
import { productDataJSON } from "./Data"
import './ProductDetail.css';
import config from "./Config.json";
import ProductStore from "../model/ProductStore";
import { observer } from 'mobx-react-lite';

interface ProductDetailProps {
  productStore: ProductStore,
  productId: number
}

/**
 * ProductDetail component.
 */
export const ProductDetail = ({ productStore, productId }: ProductDetailProps) => {
  /**
 * Callback function - passed to comment section.
 * @param commentParentId ID of parent comment, could be null if it's top one.
 * @param commentAuthor Author of comment.
 * @param commentContent Content of comment.
 */
  const callbackAddComment = async(commentParentId: null | number, commentAuthor: string, commentContent: string) => {
    await productStore.apiService.addCommentToDatabase(productId, commentParentId, new Date().toISOString(), commentAuthor, commentContent);
    await productStore.loadData(productId);
  }

  React.useEffect(() => {
    productStore.loadData(productId);
  }, []);


  if (productStore.loadingData) {
    return <h1>Loading</h1>
  }
  
  if (!productStore.productData) {
    return <h1>Product not found</h1>
  }

  return (
    <div>
      <Header productTitle={productStore.productData.title}
        productImgUrl={productStore.productData.imageUrl}
        productDescription={productStore.productData.description}
      />
      <Description blocks={productStore.productData.blocks || []} />
      <CommentSection comments={productStore.productData.comments || []}
        callbackAddComment={callbackAddComment} />
    </div>
  )
}

export default observer(ProductDetail);