import { ReactComponent as RefetchIcon } from "../../../assets/icons/refetch.svg";
import "./no-data.scss";

export type NoDataProps = {
  onRefetch?: () => void;
};

export const NoData = ({onRefetch}: NoDataProps): JSX.Element => {
  const btn = (
    <button type="button" className={"no-data-btn"} onClick={onRefetch}>
      <RefetchIcon className={"no-data-icon"}/>
    </button>
  );

  return (
    <div className={"no-data-root"}>
      <div className={"no-data-wrapper"}>
        <div className={"no-data-text"}>
          Не удалось загрузить данные
        </div>
        {btn}
      </div>
    </div>
  );
};
