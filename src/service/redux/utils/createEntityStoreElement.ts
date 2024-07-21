import { EntityDTOElement, EntityStoreElement } from "../../../types";

export function createEntityStoreElement (entityElement: EntityDTOElement): EntityStoreElement {
  return {
   id: Math.random(),
   isOpen: false,
   name: entityElement.name,
   children: entityElement.children?.map(element => createEntityStoreElement(element))
 }
}