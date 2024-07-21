export type EntityDTOElement = {
  name: string
  children?: Array<EntityDTOElement>
}

export type EntityDTO = Array<EntityDTOElement>