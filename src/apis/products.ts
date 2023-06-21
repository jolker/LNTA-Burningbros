import axios from "axios";

export type GetQuestionsParm = {
  page?: number;
  pageSize?: number;
  search?: string;
};

export type GetProductData = [
  products: {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: [];
  }
];
export type GetProductsResponse = GetProductData;

export const getProducts = (
  param: GetQuestionsParm
): Promise<GetProductsResponse> => {
  return axios
    .get(`https://dummyjson.com/products?limit=${param.pageSize}&skip=${param.page}`)
    .then((res) => {
      return res.data.products
    })
    .catch((error) => console.log(error));
};

export const searchProducts = (
  param: GetQuestionsParm
): Promise<GetProductsResponse> => {
  return axios
    .get(`https://dummyjson.com/products/search?q=${param.search}`)
    .then((res) => {
      return res.data.products
    })
    .catch((error) => console.log(error));
};
