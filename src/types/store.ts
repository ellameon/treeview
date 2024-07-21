export type EntityStoreElement = {
  id: number
  name: string
  isOpen: boolean
  children?: Array<EntityStoreElement>
}


export type EntityStore = Array<EntityStoreElement> | []