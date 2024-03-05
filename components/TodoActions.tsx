"use client";

import { IoTrashOutline } from "react-icons/io5";
import { TbEdit } from "react-icons/tb";
import { TiTick } from "react-icons/ti";
import useRemoveTodo from "@/hook/useRemoveTodo";
import useCheckTodo from "@/hook/useCheckTodo";
import { TodoActionProps } from "@/Types/TodoAction.type";
import { useState, useEffect } from "react";
import EditForm from "./EditForm";
import toast from "react-hot-toast";

const TodoActions: React.FC<TodoActionProps> = ({
  todo: { _id, desc, title, isCompleted },
}) => {
  const [showEdit, setShowEdit] = useState(false);
  const { RemoveMutateAsync } = useRemoveTodo();
  const { CheckMutateAsync } = useCheckTodo();
  

  const RemoveTodoHandler = async () => {
    try {
      const msg = await RemoveMutateAsync(_id);
      toast.success(msg || "");
    } catch (err) {
      console.log(err);
    }
  };

  const CheckTodoHandler = async () => {
    try {
      const msg = await CheckMutateAsync(_id);
      toast.success(msg || "");
    } catch (err) {
      console.log(err);
    }
  };



  return (
    <div className="flex items-center gap-2">
      <EditForm showEdit={showEdit} setShowEdit={setShowEdit} todos={{title, desc, _id}}/>
      <div className="relative">
        <button
          onClick={CheckTodoHandler}
          className={`TodoAction peer hover:bg-emerald-600`}
        >
          <TiTick className="h-7 w-7" />
        </button>
        <p className={`bg-emerald-600 before:bg-emerald-600 TodoAction-Label`}>
          {isCompleted ? "UnCheck" : "Check"}
        </p>
      </div>

      <div className="relative">
        <button
          onClick={()=>setShowEdit(true)}
          className={`TodoAction peer hover:bg-yellow-500`}
        >
          <TbEdit className="h-7 w-7" />
        </button>
        <p className={`bg-yellow-500 before:bg-yellow-500 TodoAction-Label`}>
          Edit
        </p>
      </div>

      <div className="relative">
        <button
          onClick={RemoveTodoHandler}
          className={`TodoAction peer hover:bg-rose-500`}
        >
          <IoTrashOutline className="h-7 w-7" />
        </button>
        <p className={`bg-rose-500 before:bg-rose-500 TodoAction-Label`}>
          Remove
        </p>
      </div>
    </div>
  );
};

export default TodoActions;

