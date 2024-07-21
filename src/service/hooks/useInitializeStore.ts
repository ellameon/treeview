import { getEntity } from "../../transport";
import { useDispatch } from "react-redux";
import { setEntityToStore, setEntityToStoreFromLocalStorage } from "../redux/modules/entity/entity.action";
import { createLocalStorageEntityDTO } from "../redux";
import _ from "lodash";
import { StoreElement } from "../../types";
import { useToggleIsLoading } from "./useToggleIsLoading";
import { useToggleIsError } from "./useToggleIsError";

export const useInitializeStore = () => {
  const dispatch = useDispatch()
  const storageInterface = localStorage.getItem("treeViewElements")
  const {toggleIsLoading} = useToggleIsLoading()
  const {toggleIsError} = useToggleIsError()

  getEntity().then(result => {
    if (storageInterface !== null) {
      const elementsFromLocalStorage = JSON.parse(storageInterface).entities.map((element: StoreElement) => createLocalStorageEntityDTO(element))
      if (_.isEqual(elementsFromLocalStorage, result)) {
        dispatch(setEntityToStoreFromLocalStorage(JSON.parse(storageInterface)))
      } else {
        dispatch(setEntityToStore(result))
      }
    } else {
      dispatch(setEntityToStore(result))
    }
    toggleIsLoading(false)
  })
    .catch((e) => {
      toggleIsError(e)
    })
}