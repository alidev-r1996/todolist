import { addTodoType } from "@/Types/addTodo.type";
import { TodoProps } from "./../../Types/Todo.type";
import axios from "axios";

export async function GetTodo(query: string = "") {
  if (query == "All" || query == "Completed" || query == "UnCompleted") {
    try {
      const res = await axios.get(`/api?category=${query}`);
      return res.data.todos as TodoProps[];
    } catch (err) {
      console.log(err);
    }
  } else {
    try {
      const res = await axios.get(`/api?search=${query}`);
      return res.data.todos as TodoProps[];
    } catch (err) {
      console.log(err);
    }
  }
}

export async function AddTodo(todo: addTodoType) {
  try {
    const res = await axios.post("/api", todo);
    return res.data.message as string;
  } catch (err) {
    console.log(err);
  }
}

export async function RemoveTodo(id: number) {
  try {
    const res = await axios.delete(`/api/${id}`);
    return res.data.message as string;
  } catch (err) {
    console.log(err);
  }
}

export async function CheckTodo(id: number) {
  try {
    const res = await axios.post(`/api/${id}`);
    return res.data.message as string;
  } catch (err) {
    console.log(err);
  }
}

export async function EditTodo(todo: addTodoType, id: number) {
  try {
    const res = await axios.put(`/api/${id}`, todo);
    return res.data.message as string;
  } catch (err) {
    console.log(err);
  }
}
