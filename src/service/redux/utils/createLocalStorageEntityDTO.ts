import { DTOElement, StoreElement } from "../../../types";

export function createLocalStorageEntityDTO(element: StoreElement): DTOElement {

  if (element.children) {
    return {
      name: element.name,
      children: element.children?.map(child => createLocalStorageEntityDTO(child))
    }
  } else {
    return {
      name: element.name
    }
  }
}