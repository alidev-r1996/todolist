"use client";
import { Todo } from "./Todo";
import Loading from "../common/Loading";
import useGetTodo from "@/hook/useGetTodo";

const TodoList: React.FC = () => {
  const { data, isError, isLoading } = useGetTodo();

  if (isLoading)
    return (
      <div>
        <Loading />
      </div>
    );

    if (!data) return <div>no todo!</div>

  
  return (
    <div className={`${data?.length && "bg-white shadow"} col-span-3 scrollbar-thin overflow-x-hidden   max-h-72 overflow-y-auto  flex flex-col p-4  rounded  gap-1`}>
      {data?.map((todo) => {
        return <Todo {...todo} key={todo._id} />;
      })}
    </div>
  );
};

export default TodoList;
