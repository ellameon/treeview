import { EntityStore, EntityStoreElement } from "../../../types";

export function toggleIsElementOpen (state: EntityStore, id: number) {

  const toggleIsOpen = (entity: EntityStoreElement): EntityStoreElement => {
    if (entity.id === id) {
      return {
        id: entity.id,
        name: entity.name,
        isOpen: !entity.isOpen,
        children: entity.children?.map(element => toggleIsOpen(element))
      }
    }
    else return entity
  }

  return state.map(stateElement => {
    if (stateElement.id === id) {
      return {
        id: stateElement.id,
        name: stateElement.name,
        isOpen: !stateElement.isOpen,
        children: stateElement.children?.map(element => toggleIsOpen(element))
      }
    }
    else return stateElement
  })
}