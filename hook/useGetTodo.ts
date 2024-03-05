import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { GetTodo } from "@/services/Requests/TodoServices";

export default function useGetTodo() {
  const searchParams = useSearchParams();
  const Searchquery =searchParams.get("search")?.split(",").toString() ||"";
  const FilterQuery =searchParams.get("category")?.split(",").toString() ||"";
  const query = Searchquery || FilterQuery || ""
  const { data, isError, isLoading } = useQuery({
    queryKey: ["todos", query],
    queryFn: () => GetTodo(query),
  });
  return { data, isError, isLoading };
}
