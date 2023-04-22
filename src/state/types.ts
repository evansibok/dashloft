export interface ProductState {
  loading: boolean;
  error: string | null;
  product: Product | null;
  trl: TRL | null;
}

export interface Product {
  [key: string]: any;
}

export interface TRL {
  id: string;
  name: string;
  description?: string;
}
