import { TiTick } from "react-icons/ti";
import { TbEdit } from "react-icons/tb";
import { IoTrashOutline } from "react-icons/io5";

const TodoAction: {
  id: number;
  buttonStyle: string;
  labelStyle: string;
  icon: React.JSX.Element;
  label: string;
}[] = [
  {
    id: 1,
    buttonStyle: "hover:bg-emerald-600",
    labelStyle: "bg-emerald-600 before:bg-emerald-600",
    icon: <TiTick className="h-7 w-7" />,
    label: "Check",
  },
  {
    id: 2,
    buttonStyle: "hover:bg-yellow-500",
    labelStyle: "bg-yellow-500 before:bg-yellow-500",
    icon: <TbEdit className="h-7 w-7" />,
    label: "Edit",
  },
  {
    id: 3,
    buttonStyle: "hover:bg-rose-500",
    labelStyle: "bg-rose-500 before:bg-rose-500",
    icon: <IoTrashOutline className="h-7 w-7" />,
    label: "Remove",
  },
];

export default TodoAction;
