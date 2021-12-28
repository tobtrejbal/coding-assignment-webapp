import React from "react"
import Header from "./Header"
import MainSection from "./MainSection"
import CommentSection from "./CommentSection"
import { productDataJSON } from "./Data";
import './Container.css';

interface ContainerProps {
  
}

interface ContainerState {
    productData: ProductData
}

interface ProductData {
    id: string,
    title: string,
    imageUrl: string,
    comments: Array<Comment>
}

interface Comment {
    id: string,
    productId: string,
    parentId: string,
    authorName: string,
    dateGmt: string,
    content: string
}

/**
 * Main container with all components.
 */
class Container extends React.Component<ContainerProps, ContainerState> {
    state = {
      productData: {
        "id": "",
        "title": "",
        "imageUrl": "",
        "comments": [
            {
              "id": "",
              "productId": "",
              "parentId": "",
              "authorName": "",
              "dateGmt": "",
              "content": ""
            }
        ]
      }   
    }  


    render() {
        return (
            <div className="mainDiv">
                <div className = "contentContainer">
                    <Header productName = {this.state.productData && this.state.productData.title}
                            productImgPath = {this.state.productData && this.state.productData.imageUrl} 
                    />
                    <MainSection />
                    <CommentSection />
          </div>
        </div>
      )
    }
  }

  export default Container