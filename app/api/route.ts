import { NextRequest, NextResponse } from "next/server";
import Todo from "../../server/models/TodoModel";
import dbConnect from "../../server/utils/dbConnect";
import getQuery from "@/utils/getQuery";
dbConnect();

export async function GET(req: NextRequest, res: NextResponse) {
  const SearchQuery = getQuery(req, "search");
  const SearchRegex = new RegExp(`${SearchQuery}`);

  const Filterquery = getQuery(req, "category");

  let todos = [];

  if (Filterquery) {
    switch (Filterquery) {
      case "All":
        todos = await Todo.find();
        break;
      case "Completed":
        todos = await Todo.find({ isCompleted: true });
        break;
      case "UnCompleted":
        todos = await Todo.find({ isCompleted: false });
        break;
      default:
        return;
    }
  } else if (SearchQuery) {
    todos = await Todo.find({ title: { $regex: SearchRegex, $options: "i" } });
  } else {
    todos = await Todo.find();
  }
  return NextResponse.json({ message: "success get Todos", todos });
}

export async function POST(req: Request, res: Response) {
  const { title, desc } = await req.json();
  const findTodo = await Todo.find({title: title});
  if (findTodo.length){
    return NextResponse.json({ message: `${title} is Already exist!`});
  }else{
    await Todo.create({ title: title.toString(), desc: desc.toString() })
    const todos = await Todo.find()
    return NextResponse.json({ message: `${title} successfully added!`, todos});
  }
}
