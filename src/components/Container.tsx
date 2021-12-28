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
    id: number,
    title: string,
    imageUrl: string,
    blocks?: Array<Block>,
    comments?: Array<Comment>
}

interface Block {
  id: number,
  type: string,
  text?: string,
  imgUrl?: string,
  items?: Array<string>
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
 * Main container with all components.
 */
class Container extends React.Component<ContainerProps, ContainerState> {
    state = {
      productData: {
        "id": 0,
        "title": "",
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
        return (
            <div className="mainDiv">
                <div className = "contentContainer">
                    <Header productTitle = {this.state.productData && this.state.productData.title}
                            productImgUrl = {this.state.productData && this.state.productData.imageUrl} 
                    />
                    <MainSection blocks = {this.state.productData.blocks}/>
                    <CommentSection comments = {this.state.productData.comments}
                                    callbackAddComment = {this.callbackAddComment}/>
          </div>
        </div>
      )
    }

    componentDidMount() {
      this.loadData();
    }

    loadData() {
        this.setState({ productData: productDataJSON});
        console.log(productDataJSON)
    }

    callbackAddComment = (commentParentId: number, commentAuthor: string, commentContent: string) => {
      //this.setState({addCommentText: commentText});
      this.addCommentToDatabase("1", commentParentId, new Date().toISOString(), commentAuthor, commentContent);
    } 

    addCommentToDatabase(productId: string, commentParentId: number, commentDate: string, commentAuthor: string, commentContent: string) {
      console.log(JSON.stringify({
        productId: productId,
        parentID: commentParentId, 
        authorName: commentAuthor,
        dateGmt: commentDate,
        content: commentContent}));
    } 
  }

  export default Container