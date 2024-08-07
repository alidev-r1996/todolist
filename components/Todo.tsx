import { TodoProps } from "@/Types/Todo.type";
import DateString from "@/utils/DateString";
import React from "react";
import TodoActions from "./TodoActions";

export const Todo: React.FC<TodoProps> = ({created_at,desc, _id,isCompleted,title,}) => {

  return (
    <div title={desc}
      className={`flex relative cursor-pointer items-start sm:items-center justify-between p-2 bg-gray-100 rounded`}
    >
      <div className="flex flex-col flex-1">
        <h1 className={`${isCompleted && "line-through text-rose-700"} flex-1 font-bold text-sm`}>
          {title}
        </h1>
        <p className="text-[10px]  text-gray-400">{DateString(created_at)}</p>  
      </div>
      <div className="flex items-center ">
        <TodoActions todo={{title, desc, _id, isCompleted}} />
      </div>
    </div>
  );
};
