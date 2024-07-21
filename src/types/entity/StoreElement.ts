export type StoreElement = {
  id: number
  name: string
  isOpen: boolean
  children?: Array<StoreElement>
}