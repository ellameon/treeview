import { ReactComponent as RefetchIcon } from "../../../assets/icons/refetch.svg";
import styles from "./index.module.css";

export type NoDataProps = {
  onRefetch: () => void;
};

export const NoData = ({ onRefetch }: NoDataProps): JSX.Element => {
  const btn = (
    <button type="button" className={styles.btn} onClick={onRefetch}>
      <RefetchIcon className={styles.icon} />
    </button>
  );

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <h5 className={ styles.text }>
          Не удалось загрузить данные
        </h5>
        {btn}
      </div>
    </div>
  );
};
