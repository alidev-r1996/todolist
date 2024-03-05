import { useMutation, useQueryClient } from "@tanstack/react-query";
import { EditTodo } from "@/services/Requests/TodoServices";
import { addTodoType } from "@/Types/addTodo.type";

export default function useEditTodo(id:number) {
  const queryClient = useQueryClient();
  const { data, isError, isPending, mutateAsync: EditMutateAsync } = useMutation({
    mutationKey: ["todos", id],
    mutationFn: (todo: addTodoType) => EditTodo(todo, id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
  });
  return {EditMutateAsync };
}
