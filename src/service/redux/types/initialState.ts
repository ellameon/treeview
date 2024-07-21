import { EntityStore } from "../../../types";

export type EntityTInitialState = Array<{
  id?: string | number
  name?: string
  isOpen?: boolean
  children?: Array<EntityStore>
}> | []