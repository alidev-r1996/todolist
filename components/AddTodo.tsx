"use client";
import { useState } from "react";
import useAddTodo from "@/hook/useAddTodo";
import TextInput from "@/common/inputField";
import { IoIosRefreshCircle } from "react-icons/io";
import toast from "react-hot-toast";

const AddTodo = () => {
  const [todo, setTodo] = useState({ title: "", desc: "" });
  const { data, isError, isPending, mutateAsync } = useAddTodo();

  const AddTodoHandler = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    if ((todo.title.length == 0) || (todo.desc.length == 0)) {
      toast.error("All Field must be completed!");
    } else {
      try {
        const msg = await mutateAsync(todo);
        toast.success(msg || "");
        setTodo({ title: "", desc: "" });
      } catch (err) {
        console.log(err);
      }
    }
  };

  const ChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setTodo((prev) => {
      return { ...prev, [name]: [value] };
    });
  };

  return (
    <form className="bg-white p-4 shadow rounded flex flex-col gap-2 w-full sm:w-max">
      <TextInput
        name={"title"}
        value={todo.title}
        handler={ChangeHandler}
        label={"Title"}
      />
      <TextInput
        name={"desc"}
        value={todo.desc}
        handler={ChangeHandler}
        label={"Description"}
      />

      <button
        type="submit"
        onClick={AddTodoHandler}
        className="btn flex items-center justify-center gap-2"
      >
        <p className={`${isPending && "animate-pulse"}`}>
          {isPending ? "Adding..." : "Add Todo"}
        </p>
        <IoIosRefreshCircle
          className={`${isPending && "block animate-spin"} w-5 h-5 `}
        />
      </button>
    </form>
  );
};

export default AddTodo;
