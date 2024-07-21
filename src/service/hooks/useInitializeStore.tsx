import { getEntity } from "../../transport";
import { useDispatch } from "react-redux";
import { setEntityToStore } from "../redux/modules/entity/entity.action";

export const useInitializeStore = () => {
  const dispatch = useDispatch()
  const storageInterface = localStorage.getItem("currentInterface")

  if (storageInterface !== null) {
    dispatch(setEntityToStore(JSON.parse(storageInterface).entities))
  } else {
    getEntity().then(result => {
      dispatch(setEntityToStore(result))
    })
  }
}