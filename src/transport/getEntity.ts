import { EntityDTO } from "../types";

const mokData = [
  {
    "name": "Элемент 1",
    "children": [
      {
        "name": "Элемент 1.1",
        "children": [
          {
            "name": "Элемент 1.1.1"
          },
          {
            "name": "Элемент 1.1.2"
          }
        ]
      },
      {
        "name": "Элемент 1.2"
      }
    ]
  },
  {
    "name": "Элемент 2"
  }
]

export async function getEntity (): Promise<EntityDTO> {
  const entities: EntityDTO = []

  //тут получаем данные с бека, но в данном случае есть моковые данные

  entities.concat(mokData)

  return entities
}