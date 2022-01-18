type ProductData = {
    id: number,
    title: string,
    description: string,
    imageUrl: string,
    blocks?: Array<Block>,
    comments?: Array<Comment>
  }
  
  type Block = {
    id: number,
    type: string,
    text?: string,
    imgUrl?: string,
    items?: Array<string>,
    parameters?: Array<Parameter>,
    images?: Array<Image>
  }
  
  type Parameter = {
    name: string,
    value: string
  }
  
  type Image = {
    text: string,
    imgUrl: string
  }
  
  type Comment = {
    id: number,
    productId: number,
    parentId?: null | number,
    authorName: string,
    dateGmt: string,
    content: string
  }

  export type {ProductData, Comment, Block, Parameter, Image}