import { ReactComponent as MainLoader } from "../../../assets/icons/main-loader.svg";
import styles from "./index.module.css";

export const Loader = (): JSX.Element => (
  <div className={styles.loader}>
    <MainLoader className={styles.svg}/>
  </div>
);
