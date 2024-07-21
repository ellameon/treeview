import { EntityStore, StoreElement } from "../../../types";

export function toggleIsElementOpen(state: EntityStore, id: number) {
  const toggleIsOpen = (entity: StoreElement): StoreElement => {
    if (entity.id === id) {
      return {
        ...entity,
        isOpen: !entity.isOpen,
        children: entity.children && entity.children.map(toggleIsOpen)
      }
    } else if (entity.children) {
      return {
        ...entity,
        children: entity.children.map(toggleIsOpen)
      }
    } else {
      return entity
    }
  }

  return {
    ...state,
    entities: state.entities.map(toggleIsOpen)
  };
}