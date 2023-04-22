export interface ProductState {
  loading: boolean;
  error: string | null;
  product: Product | null;
}

export interface Product {
  [key: string]: any;
}
