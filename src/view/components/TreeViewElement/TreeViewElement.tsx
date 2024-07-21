import React, { useEffect, useState } from "react";
import { StoreElement } from "../../../types";
import { ReactComponent as Plus } from "../../../assets/icons/plus.svg";
import { useToggleElementIsOpen } from "../../../service";
import "./tree-view-element.scss";

type Props = {
  element: StoreElement;
};

export const TreeViewElement = ({element}: Props) => {
  const {toggleElementIsOpen} = useToggleElementIsOpen();
  const [listClass, setListClass] = useState<string>("tree-view-element-listInitial")

  const onClickPlus = (id: number) => {
    toggleElementIsOpen(id);
  };

  useEffect(() => {
    if (element.isOpen) {
      setListClass("tree-view-element-list")
    }
  }, [element.isOpen])

  return (
    <div className={"tree-view-element-root"}>
      <div className={"tree-view-element-content"}>
        <div className={"tree-view-element-elementName"}>{element.name}</div>
        <div
          onClick={() => onClickPlus(element.id)}
          className={`${"tree-view-element-plus"} ${element.isOpen ? "tree-view-element-rotated" : ""}`}
        >
          <Plus/>
        </div>
      </div>
      <div className={`${element.isOpen ? "tree-view-element-listOpen" : listClass}`}>
        {element.children && element.children.length > 0
          ? element.children.map(child => (
            <TreeViewElement key={child.id} element={child}/>
          ))
          : <>
            {element.isOpen &&
              <div className={"tree-view-element-noData"}>
                Нет вложенных элементов
              </div>
            }
          </>
        }
      </div>
    </div>
  );
};