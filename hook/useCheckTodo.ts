import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CheckTodo } from "@/services/Requests/TodoServices";

export default function useCheckTodo() {
  const queryClient = useQueryClient();
  const {mutateAsync: CheckMutateAsync } = useMutation({
    mutationKey: ["todos"],
    mutationFn: (id: number) => CheckTodo(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
  });
  return {CheckMutateAsync };
}
