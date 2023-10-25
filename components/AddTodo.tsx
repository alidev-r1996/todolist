"use client";
import { useState } from "react";

const AddTodo = () => {
  const [todo, setTodo] = useState({ title: "", desc: "" });
  return (
    <form className="bg-white p-4 shadow rounded flex flex-col gap-2">
      <input
        type="text"
        name="title"
        value={todo.title}
        onChange={(e)=>setTodo(prev=>{return{...prev,[e.target.name]:[e.target.value]}})}
        id="title"
        placeholder="Title"
        className="outline-none bg-gray-100 rounded p-3 text-xs"
      />
      <input
        type="text"
        name="desc"
        value={todo.desc}
        onChange={(e)=>setTodo(prev=>{return{...prev,[e.target.name]:[e.target.value]}})}
        id="desc"
        placeholder="Description"
        className="outline-none bg-gray-100 rounded p-3 text-xs"
      />
      <button className="text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded text-sm px-5 py-2.5 text-center mt-1 ">
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
