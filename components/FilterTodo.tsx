"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { FaSistrix } from "react-icons/fa6";

const FilterTodo = () => {
  const [filter, setFilter] = useState("All");
  const [isPending, startTransition] = useTransition();
  const [search, setSearch] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const filterHandler = (param: string) => {
    params.delete("search");
    router.push(pathname + "?" + params.toString());
    params.set("category", param.toString());
    router.push(pathname + "?" + params.toString());
  };

  const ChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    startTransition(() => {
        params.delete("category");
        router.push(pathname + "?" + params.toString());
        params.set("search", event.target.value.toString());
        router.push(pathname + "?" + params.toString());
    });
  };

  return (
    <>
      <form className="flex w-full items-center col-span-3 p-2  border focus-within:border-gray-400 bg-white shadow rounded">
        <input
          type="text"
          name="search"
          id="search"
          value={search}
          onChange={ChangeHandler}
          className="w-full peer outline-none text-xs bg-transparent"
          placeholder="Search Todo..."
        />
        <FaSistrix className="w-6 h-6 text-slate-400 peer-focus:text-slate-800" />
      </form>
      <div className="col-span-2 flex items-center gap-2">
        <p
          onClick={() => {
            filterHandler("All");
            setFilter("All");
          }}
          className={`${
            filter == "All"
              ? "bg-blue-600 text-white"
              : "border-gray-300  bg-white"
          } text-xs px-3  py-2.5 text-center border  shadow cursor-pointer rounded`}
        >
          All
        </p>
        <p
          onClick={() => {
            filterHandler("Completed");
            setFilter("Completed");
          }}
          className={`${
            filter == "Completed"
              ? "bg-blue-600 text-white"
              : "border-gray-300  bg-white"
          } text-xs px-3 flex-1 sm:flex-none py-2.5 text-center border  shadow cursor-pointer rounded`}
        >
          Completed
        </p>
        <p
          onClick={() => {
            filterHandler("UnCompleted");
            setFilter("UnCompleted");
          }}
          className={`${
            filter == "UnCompleted"
              ? "bg-blue-600 text-white"
              : "border-gray-300  bg-white"
          } text-xs px-3 flex-1 sm:flex-none py-2.5 text-center border  shadow cursor-pointer rounded`}
        >
          UnCompleted
        </p>
      </div>
    </>
  );
};

export default FilterTodo;
