import { Product } from "@/models/product";

export interface ICartState {
  products: Product[];
  isOpen: boolean;
}

function state(): ICartState {
  return {
    products: [],
    isOpen: false,
  };
}

export default state;
