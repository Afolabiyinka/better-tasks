import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import useToastMessage from "../../../shared/store/libs/useToastMsg";
import { addTask } from "../services/request";
import { queryClient } from "../../../main";
import { useNavigate } from "react-router-dom";

export const useAddTasks = () => {
  const { toastSuccess } = useToastMessage();
  const [taskInputData, setTaskInputData] = useState({
    title: "",
    priority: "low",
    deadline: "",
    completed: false,
  });

  const navigate = useNavigate();

  //Add Task
  const {
    mutate,
    isPending: loading,
    error,
  } = useMutation({
    mutationFn: (payload) => addTask(payload),
    onSuccess: (data) => {
      toastSuccess(data.message || "Task added succesfully");
      navigate("/tasks");
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  function handleAddTask(e) {
    e.preventDefault();
    mutate(taskInputData);
  }
  return { handleAddTask, taskInputData, setTaskInputData, loading, error };
};
