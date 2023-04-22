export interface ProductState {
  loading: boolean;
  error: string | null;
  product: Product | null;
  trl: TRL[] | null;
  appConfig: AppConfig | null;
}

export interface Product {
  [key: string]: any;
}

export interface TRL {
  id: string;
  name: string;
  description?: string;
}

export interface AppConfig {
  id: string;
  logo: string;
  mainColor: string;
  hasUserSection: boolean;
}

export interface State {
  product: ProductState;
}
