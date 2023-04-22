import { useSelector } from "react-redux";
import { State } from "../state/types";

export const useAppConfig = () => {
  const { appConfig } = useSelector((state: State) => state.product);

  return { appConfig };
};