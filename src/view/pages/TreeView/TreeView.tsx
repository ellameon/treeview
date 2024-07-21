import "./tree-view.scss"
import { useSelector } from "../../../service/redux/useSelector";
import { Loader, TreeViewElement } from "../../components";
import { NoData } from "../../components/NoData";

export const TreeView = () => {
  const {entities, isError, isLoading} = useSelector((state) => state.entity)

  return (
    <div className={"tree-view-root"}>
      <div className={"tree-view-content"}>
        <div className={"tree-view-header"}>
          TreeView
        </div>
        {entities && !isError && !isLoading && (
          <div className={"tree-view-list"}>
            {entities.map(element => (
              <TreeViewElement element={element} key={element.id}/>
            ))}
          </div>
        )}
        {isLoading && !isError &&
          <Loader/>
        }
        {isError && <NoData/>}
      </div>
    </div>
  )
}