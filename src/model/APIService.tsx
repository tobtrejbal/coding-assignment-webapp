import config from "../components/Config.json";

class APIService {

  async getProductByID(productId: number) {
    try {
      const res = await fetch(config.SERVER_URL + config.SERVER_PATH_PRODUCTS + productId);
      const data = await res.json();
      return data;
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
      const response = await fetch(config.SERVER_URL + config.SERVER_PATH_COMMENTS, requestOptions);
    } catch (error) {
      console.log(error);
    }
  }

}

export default APIService;