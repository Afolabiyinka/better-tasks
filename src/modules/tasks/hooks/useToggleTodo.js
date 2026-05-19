import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleTodo } from "../services/request";
import useToastMessage from "../../../shared/store/libs/useToastMsg";

export function useToggleTask() {
  const { toastError, toastLoading, toastSuccess } = useToastMessage();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ id, completed }) =>
      toggleTodo({
        id,
        completed,
      }),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
      toastSuccess("Task Completed");
    },

    onError: (error) => {
      toastError(error.message);
    },
  });

  return {
    toggleTodo: mutation.mutate,
    loading: mutation.isPending,
    activeId: mutation.variables?.id,
  };
}
