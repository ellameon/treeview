import React, { useState } from "react";
import { StoreElement } from "../../../types";
import { ReactComponent as Plus } from "../../../assets/icons/plus.svg";
import { useToggleElementIsOpen } from "../../../service";
import  "./tree-view-element.scss";

type Props = {
  element: StoreElement;
};

export const TreeViewElement = ({element}: Props) => {
  const {toggleElementIsOpen} = useToggleElementIsOpen();
  const storageInterface = localStorage.getItem("treeViewElements")
  const [isOpenAllowed, setIsOpenAllowed] = useState(storageInterface !== null)

  const onClickPlus = (id: number) => {
    toggleElementIsOpen(id);
  };

  // сделано для правильной работы анимации закрытия списка
  setTimeout(() => {
    setIsOpenAllowed(true)
  }, isOpenAllowed ? 0 : 1000)

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
      <div className={`${element.isOpen ? "tree-view-element-listOpen" : (isOpenAllowed ? "tree-view-element-listInitial" : "tree-view-element-list")}`}>
        {isOpenAllowed &&
          <>
            {element.children && element.children.length > 0
              ? element.children.map(child => (
                <TreeViewElement key={child.id} element={child}/>
              ))
              : <div className={"tree-view-element-noData"}>
                Нет вложенных элементов
              </div>
            }
          </>
        }
      </div>
    </div>
  );
};