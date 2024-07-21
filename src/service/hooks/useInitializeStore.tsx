import { getEntity } from "../../transport";
import { useDispatch } from "react-redux";
import { setEntityToStore, setEntityToStoreFromLocalStorage } from "../redux/modules/entity/entity.action";

export const useInitializeStore = () => {
  const dispatch = useDispatch()
  const storageInterface = localStorage.getItem("currentInterface")

  if (storageInterface !== null) {
    dispatch(setEntityToStoreFromLocalStorage(JSON.parse(storageInterface)))
  } else {
    getEntity().then(result => {
      dispatch(setEntityToStore(result))
    })
  }
}