import { Product } from "@/models/product";

export interface IProductsState {
  products: Product[];
  isLoading: boolean;
  selectedProduct: Product | null;
}

function state(): IProductsState {
  return {
    products: [],
    isLoading: false,
    selectedProduct: null,
  };
}

export default state;
