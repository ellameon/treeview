import { useDispatch } from "react-redux";
import { toggleEntityIsError } from "../redux/modules/entity/entity.action";

export const useToggleIsError = () => {
  const dispatch = useDispatch()

  const toggleIsError = (payload: Error | undefined) => {
    dispatch(toggleEntityIsError(payload))
  }

  return {
    toggleIsError
  }
}