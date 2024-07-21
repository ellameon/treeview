import { getEntity } from "../../transport";
import { useDispatch } from "react-redux";
import { setEntityToStore, setEntityToStoreFromLocalStorage } from "../redux/modules/entity/entity.action";
import { createLocalStorageEntityDTO } from "../redux/utils";
import _ from "lodash";
import { EntityStoreElement } from "../../types";

export const useInitializeStore = () => {
  const dispatch = useDispatch()
  const storageInterface = localStorage.getItem("currentInterface")

  if (storageInterface !== null) {
    getEntity().then(result => {
      if (_.isEqual(JSON.parse(storageInterface).entities.map((element: EntityStoreElement) => createLocalStorageEntityDTO(element)),
        result)) {
        dispatch(setEntityToStoreFromLocalStorage(JSON.parse(storageInterface)))
      } else {
        dispatch(setEntityToStore(result))
      }
    })
  } else {
    getEntity().then(result => {
      dispatch(setEntityToStore(result))
    })
  }
}