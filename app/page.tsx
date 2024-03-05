import AddTodo from "@/components/AddTodo";
import FilterTodo from "@/components/FilterTodo";
import TodoList from "@/components/TodoList";
export default async function Home() {
  return (
    <main className="bg-gray-100 w-screen h-screen">
      <div className="flex lg:flex-row flex-col-reverse items-start gap-4 p-4 ">
        <AddTodo />
        <div className=" sm:grid sm:grid-rows-[36px,_max] sm:grid-cols-5 flex flex-col gap-2 gap-y-4 w-full">
          <FilterTodo />
          <TodoList />
        </div>
      </div>
    </main>
  );
}
