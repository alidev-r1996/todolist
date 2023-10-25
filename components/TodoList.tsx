import { Todo } from "./Todo";

const TodoList = () => {
  return (
    <div className="bg-white flex flex-col p-4 shadow rounded  gap-1">
        <Todo />
        <Todo />
    </div>
  );
};

export default TodoList;