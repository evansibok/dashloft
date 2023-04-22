import { useSelector } from "react-redux";
import { State } from "../state/types";

export const useAppConfig = () => {
  const { appConfig } = useSelector((state: State) => state.product);

  return { appConfig };
};

export const useProduct = () => {
  const { product, loading } = useSelector((state: State) => state.product);

  return { product, loading };
};

export const useTrl = () => {
  const { trl, loading } = useSelector((state: State) => state.product);
  return { trl, loading };
};
