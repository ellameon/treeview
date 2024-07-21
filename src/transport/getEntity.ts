import { DTOElementArray } from "../types";

const mokData = [
  {
    "name": "Элемент 1",
    "children": [
      {
        "name": "Элемент 1.1",
        "children": [
          {
            "name": "Элемент 1.1.1",
            "children": [
              {
                "name": "Элемент 1.1.2"
              },
              {
                "name": "Элемент 1.1.3"
              }
            ]
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

export async function getEntity(): Promise<DTOElementArray> {
  const entities: DTOElementArray = []

  //тут получаем данные с бека, но в данном случае есть моковые данные

  const resultArray = entities.concat(mokData)

  await new Promise(resolve => setTimeout(resolve, 100))

  return resultArray
}