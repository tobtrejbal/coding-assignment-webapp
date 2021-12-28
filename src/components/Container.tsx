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
 * Main container with all components.
 */
class Container extends React.Component<ContainerProps, ContainerState> {
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
    return (
      <div className="mainDiv">
        <div className="contentContainer">
          <Header productTitle={this.state.productData && this.state.productData.title}
                  productImgUrl={this.state.productData && this.state.productData.imageUrl}
                  productDescription={this.state.productData && this.state.productData.description}
          />
          <MainSection blocks={this.state.productData.blocks} />
          <CommentSection comments={this.state.productData.comments}
            callbackAddComment={this.callbackAddComment} />
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    fetch('http://localhost:3333/products')
      .then(res => res.json())
      .then((data) => {
        this.setState({ productData: data[0] });
      })
      .catch(console.log)
    //this.setState({ productData: productDataJSON });
    //console.log(productDataJSON)
  }

  callbackAddComment = (commentParentId: null | number, commentAuthor: string, commentContent: string) => {
    this.addCommentToDatabase(1, commentParentId, new Date().toISOString(), commentAuthor, commentContent);
    window.location.reload();
  }

  addCommentToDatabase(productId: number, commentParentId: null | number, commentDate: string, commentAuthor: string, commentContent: string) {
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

    /*console.log(JSON.stringify({
      productId: productId,
      parentId: commentParentId,
      authorName: commentAuthor,
      dateGmt: commentDate,
      content: commentContent
    }));*/

    fetch('http://localhost:3333/comments', requestOptions)
      .then(response => response.json())
      .then((data) => {
      })
      .catch(console.log)

  }

}

export default Container