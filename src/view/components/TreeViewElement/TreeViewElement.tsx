import React, { useState } from "react";
import { StoreElement } from "../../../types";
import { ReactComponent as Plus } from "../../../assets/icons/plus.svg";
import { useToggleElementIsOpen } from "../../../service";
import styles from "./index.module.css";

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
  }, isOpenAllowed ? 0 : 500)

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.elementName}>{element.name}</div>
        <div
          onClick={() => onClickPlus(element.id)}
          className={`${styles.plus} ${element.isOpen ? styles.rotated : ""}`}
        >
          <Plus/>
        </div>
      </div>
      <div className={`${element.isOpen ? styles.listOpen : (isOpenAllowed ? styles.listInitial : styles.list)}`}>
        {isOpenAllowed &&
          <>
            {element.children && element.children.length > 0
              ? element.children.map(child => (
                <TreeViewElement key={child.id} element={child}/>
              ))
              : <div className={styles.noData}>
                Нет вложенных элементов
              </div>
            }
          </>
        }
      </div>
    </div>
  );
};