import React from "react";
import {ReactComponent as Plus } from "../../../assets/icons/plus.svg";
import styles from "./index.module.css";
import { useToggleElementIsOpen } from "../../../service";

type EntityStoreElement = {
  id: number;
  name: string;
  isOpen: boolean;
  children?: EntityStoreElement[];
};

type Props = {
  element: EntityStoreElement;
};

export const TreeViewElement = ({ element }: Props) => {
  const { toggleElementIsOpen } = useToggleElementIsOpen();

  const onClickPlus = (id: number) => {
    toggleElementIsOpen(id);
    console.log(id);
  };

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.elementName}>{element.name}</div>
        <div
          onClick={() => onClickPlus(element.id)}
          className={`${styles.plus} ${element.isOpen ? styles.rotated : ''}`}
        >
          <Plus />
        </div>
      </div>
      {element.isOpen && element.children && (
        <div className={styles.list}>
          {element.children.map(child => (
            <TreeViewElement key={child.id} element={child} />
          ))}
        </div>
      )}
    </div>
  );
};