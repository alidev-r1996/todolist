import { NextResponse } from "next/server";
import Todo from "../../../server/models/TodoModel";
import dbConnect from "../../../server/utils/dbConnect";
import getParams from "@/utils/getParams";
dbConnect();

export async function DELETE(req: Request, res: Response) {
  const id = getParams(req);
  const todo = await Todo.findById(id);
  await Todo.findByIdAndDelete(id);
  return NextResponse.json({message: `${todo.title} successfully Removed!`});
}

export async function PUT(req: Request, res: Response) {
  const { title, desc } = await req.json();
  const id = getParams(req);
  const todo = await Todo.findById(id);
  todo.title = title.toString();
  todo.desc = desc.toString();
  await todo.save();
  const todos = await Todo.find();
  return NextResponse.json({message: "successfully updated!", todos});
}

export async function POST(req: Request, res: Response) {
  const id = getParams(req);
  const todo = await Todo.findById(id);
  todo.isCompleted = !todo.isCompleted;
  await todo.save();
  if (todo.isCompleted){
    return NextResponse.json({message: `${todo.title} has been Completed!`});
  }else{
    return NextResponse.json({message: `${todo.title} Transfer to UnCompleted!`});
  }
  
}
