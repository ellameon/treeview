import { getEntity } from "../../transport";
import { useDispatch } from "react-redux";
import { setEntityToStore } from "../redux/modules/entity/entity.action";

export const useInitializeStore = async () => {
  const dispatch = useDispatch()

  const entitiesFromServer = await getEntity()

  dispatch(setEntityToStore(entitiesFromServer))
}