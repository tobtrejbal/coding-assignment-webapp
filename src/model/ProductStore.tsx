import { observable, action, makeObservable } from 'mobx';
import { ProductData } from './ObjectTypes';

import APIService from './APIService';

class ProductStore {
  apiService: APIService;
  constructor() {
    this.apiService = new APIService();
    makeObservable(this)
  }

  @observable productData: ProductData | null = null;
  @observable loadingData: boolean = false;

  // init state
  // @observable productData: ProductData = {
  //   "id": 0,
  //   "title": "",
  //   "description": "",
  //   "imageUrl": "",
  //   "blocks": [
  //     {
  //       "id": 0,
  //       "type": ""
  //     }
  //   ],
  //   "comments": [
  //     {
  //       "id": 0,
  //       "productId": 0,
  //       "parentId": 0,
  //       "authorName": "",
  //       "dateGmt": "",
  //       "content": ""
  //     }
  //   ]
  // };

  @action setProductData(value: ProductData) {
    this.productData = value;
  }

  @action setLoadingData(value: boolean) {
    this.loadingData = value;
  }

  async loadData(productId: number) {
    try {
      this.setLoadingData(true);
      await new Promise((res) => setTimeout(res, 2000));
      const data = await this.apiService.getProductByID(productId);
      this.setProductData(data);
    } catch (error) {
      console.log(error);
    }
    finally {
      this.setLoadingData(false);
    }
  }

}

export default ProductStore;