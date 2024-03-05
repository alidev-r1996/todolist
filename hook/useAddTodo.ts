import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AddTodo } from "@/services/Requests/TodoServices";
import { addTodoType } from "@/Types/addTodo.type";

export default function useAddTodo() {
  const queryClient = useQueryClient();
  const { data, isError, isPending, mutateAsync } = useMutation({
    mutationKey: ["todos"],
    mutationFn: (todo: addTodoType) => AddTodo(todo),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
  });
  return { data, isError, isPending, mutateAsync };
}
