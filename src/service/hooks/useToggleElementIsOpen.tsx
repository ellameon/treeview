import { useDispatch } from "react-redux";
import { toggleEntityIsOpen } from "../redux/modules/entity/entity.action";

export const useToggleElementIsOpen = () => {
  const dispatch = useDispatch()

  const toggleElementIsOpen = (id: number) => {
    dispatch(toggleEntityIsOpen(id))
  }

  return {
    toggleElementIsOpen
  }
}