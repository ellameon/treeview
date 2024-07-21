import styles from "./index.module.css"
import { useSelector } from "../../../service/redux/useSelector";
import { TreeViewElement } from "../../components";

export const TreeView = () => {
  const {entities} = useSelector((state) => state.entity)

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.header}>
          TreeView
        </div>
        {entities && (
          <div className={styles.list}>
            {entities.map(element => (
              <TreeViewElement element={element} key={element.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}