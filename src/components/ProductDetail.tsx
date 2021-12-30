import React from "react"
import Header from "./Header"
import Description from "./Description"
import CommentSection from "./CommentSection"
import { productDataJSON } from "./Data"
import './ProductDetail.css';

interface ProductDetailProps {
  productId: number
}

interface ProductDetailState {
  productData: ProductData
}

interface ProductData {
  id: number,
  title: string,
  description: string,
  imageUrl: string,
  blocks?: Array<Block>,
  comments?: Array<Comment>
}

interface Block {
  id: number,
  type: string,
  text?: string,
  imgUrl?: string,
  items?: Array<string>,
  parameters?: Array<Parameter>,
  images?: Array<Image>

}

interface Parameter {
  name: string,
  value: string
}

interface Image {
  text: string,
  imgUrl: string
}

interface Comment {
  id: number,
  productId: number,
  parentId?: null | number,
  authorName: string,
  dateGmt: string,
  content: string
}

/**
 * ProductDetail component.
 */
class ProductDetail extends React.Component<ProductDetailProps, ProductDetailState> {
  state = {
    productData: {
      "id": 0,
      "title": "",
      "description": "",
      "imageUrl": "",
      "blocks": [
        {
          "id": 0,
          "type": ""
        }
      ],
      "comments": [
        {
          "id": 0,
          "productId": 0,
          "parentId": 0,
          "authorName": "",
          "dateGmt": "",
          "content": ""
        }
      ]
    }
  }

  render() {
    if (this.state.productData.id != 0) {
      return (
        <div>
          <Header productTitle={this.state.productData.title}
            productImgUrl={this.state.productData.imageUrl}
            productDescription={this.state.productData.description}
          />
          <Description blocks={this.state.productData.blocks} />
          <CommentSection comments={this.state.productData.comments}
            callbackAddComment={this.callbackAddComment} />
        </div>
      )
    } else {
      return (
        <h1>Product not found</h1>
      )
    }
  }

  async componentDidMount() {
    await this.loadData();
  }

  /**
   * Callback function - passed to comment section.
   * @param commentParentId ID of parent comment, could be null if it's top one.
   * @param commentAuthor Author of comment.
   * @param commentContent Content of comment.
   */
  callbackAddComment = (commentParentId: null | number, commentAuthor: string, commentContent: string) => {
    this.addCommentToDatabase(this.props.productId, commentParentId, new Date().toISOString(), commentAuthor, commentContent);
    this.loadData();
    //window.location.reload();
  }

  async loadData() {
    try {
      const res = await fetch('http://localhost:3333/products');
      const data = await res.json() as Array<ProductData>;
      // Server doesn't have method for getting single product, so we have to find it.
      this.setState({ productData: data.find(product => product.id === this.props.productId)! });
    } catch (error) {
      console.log(error);
    }
  }

  async addCommentToDatabase(productId: number, commentParentId: null | number, commentDate: string, commentAuthor: string, commentContent: string) {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        productId: productId,
        parentId: commentParentId,
        authorName: commentAuthor,
        dateGmt: commentDate,
        content: commentContent
      })
    };
    try {
      const response = await fetch('http://localhost:3333/comments', requestOptions);
    } catch (error) {
      console.log(error);
    }
  }

}

export default ProductDetail