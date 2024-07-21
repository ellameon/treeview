import { getEntity } from "../../transport";
import { useDispatch } from "react-redux";
import { setEntityToStore } from "../redux/modules/entity/entity.action";

export const useInitializeStore = () => {
  const dispatch = useDispatch()

   getEntity().then(result => {
     dispatch(setEntityToStore(result))
   }).catch(error => console.log(error))
}