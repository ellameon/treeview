import { ReactComponent as MainLoader } from "../../../assets/icons/main-loader.svg";
import "./loader.scss";

export const Loader = (): JSX.Element => (
  <div className={"loader"}>
    <MainLoader/>
  </div>
);
