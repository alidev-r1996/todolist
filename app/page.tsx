"use client";

import AddTodo from "@/components/AddTodo";
import FilterTodo from "@/components/FilterTodo";
import TodoList from "@/components/TodoList";

export default function Home() {
  const ActionHandler = (type: string) => {
    switch (type) {
      case "Check":
        break;
      case "Edit":
        break;
      case "Remove":
        break;
      default:
        throw new Error("no action Defined");
    }
  };
  return (
    <main className="bg-gray-100 w-screen h-screen">
      <h1 className="shadow p-4 text-center rounded bg-white text-slate-800 font-bold">
        TodoList App
      </h1>
      <div className="flex items-start gap-4 p-4 ">
        <AddTodo />
        <div className=" grid grid-rows-[36px,_max] grid-cols-5 gap-2 gap-y-4 w-full">
          <FilterTodo />
          <TodoList />
        </div>
      </div>
    </main>
  );
}
