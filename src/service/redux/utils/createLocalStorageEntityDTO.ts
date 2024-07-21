import { EntityDTOElement, EntityStoreElement } from "../../../types";

export function createLocalStorageEntityDTO (element: EntityStoreElement): EntityDTOElement {

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