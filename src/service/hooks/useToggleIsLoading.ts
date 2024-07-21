import { useDispatch } from "react-redux";
import { toggleEntityIsLoading } from "../redux/modules/entity/entity.action";

export const useToggleIsLoading = () => {
  const dispatch = useDispatch()

  const toggleIsLoading = (payload: boolean) => {
    dispatch(toggleEntityIsLoading(payload))
  }

 return {
    toggleIsLoading
 }
}