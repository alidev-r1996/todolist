import { FaSistrix } from "react-icons/fa6";


const FilterTodo = () => {
  return (
    <>
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
        <p className="px-5 py-2.5 text-white text-xs bg-blue-600 shadow cursor-pointer rounded">
          All
        </p>
        <p className="px-5 py-2.5 border border-gray-300 text-xs bg-white shadow cursor-pointer rounded">
          Completed
        </p>
        <p className="px-5 py-2.5 border border-gray-300 text-xs bg-white shadow cursor-pointer rounded">
          UnCompleted
        </p>
      </div>
    </>
  );
};

export default FilterTodo;
