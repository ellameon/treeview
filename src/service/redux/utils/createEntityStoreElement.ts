import { DTOElement, StoreElement } from "../../../types";

export function createEntityStoreElement(entityElement: DTOElement): StoreElement {
  return {
    id: Math.random(),
    isOpen: false,
    name: entityElement.name,
    children: entityElement.children?.map(element => createEntityStoreElement(element))
  }
}