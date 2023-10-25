"use client";

import AddTodo from "@/components/AddTodo";
import { Todo } from "@/components/Todo";
import TodoList from "@/components/TodoList";
import { useState } from "react";
import { FaSistrix } from "react-icons/fa6";

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
          <form className="flex items-center col-span-3 p-2  border focus-within:border-gray-400 bg-white shadow rounded">
            <input
              type="text"
              name="search"
              id="search"
              className="w-full peer outline-none text-xs bg-transparent"
              placeholder="Search Todo..."
            />
            <FaSistrix className="w-6 h-6 text-slate-400 peer-focus:text-slate-800" />
          </form>
          <div className="col-span-2 flex items-center gap-2">
            <p className="px-5 py-2.5 text-white text-xs bg-blue-600 shadow cursor-pointer rounded">All</p>
            <p className="px-5 py-2.5 border border-gray-300 text-xs bg-white shadow cursor-pointer rounded">Completed</p>
            <p className="px-5 py-2.5 border border-gray-300 text-xs bg-white shadow cursor-pointer rounded">UnCompleted</p>

          </div>
          <div className="col-span-3 ">
            <TodoList />
          </div>
        </div>
      </div>
    </main>
  );
}
