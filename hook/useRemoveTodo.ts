import { useMutation, useQueryClient } from "@tanstack/react-query";
import { RemoveTodo } from "@/services/Requests/TodoServices";

export default function useRemoveTodo() {
  const queryClient = useQueryClient();
  const {mutateAsync: RemoveMutateAsync } = useMutation({
    mutationKey: ["todos"],
    mutationFn: (id: number) => RemoveTodo(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
  });
  return {RemoveMutateAsync };
}
