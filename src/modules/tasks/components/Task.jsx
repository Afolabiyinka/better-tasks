import { Tooltip } from "@material-tailwind/react";
import CustomCheckbox from "../../../Components/custom/Checkbox";
import { Loader, Trash, Trash2 } from "lucide-react";
import { useDeleteTask } from "../hooks/useDeleteTasks";
import { useToggleTask } from "../hooks/useToggleTodo";

const Task = ({ task }) => {
  const taskId = task?._id;

  if (!taskId) return null;
  const { handleDelete } = useDeleteTask(taskId);
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };
  const { toggleTodo, loading, activeId } = useToggleTask();
  return (
    <div className="flex w-full justify-between items-center border p-1 px-3 rounded-3xl">
      <div className="flex items-center gap-3">
        {loading && activeId === taskId ? (
          <Loader size={20} className="animate-spin" />
        ) : (
          <CustomCheckbox
            checked={task.completed}
            // onChange={() =>
            //   toggleTodo({
            //     id: taskId,
            //     completed: !task.completed,
            //   })
            // }
          />
        )}

        <p
          className={`text-sm ${
            task.completed
              ? "line-through text-gray-500 dark:text-gray-300"
              : "text-gray-800 dark:text-gray-100"
          }`}
        >
          {task.title}
        </p>
      </div>

      <div className="flex gap-2 items-center">
        <span
          className={` text-sm px-5 rounded-full flex text-white h-fit justify-center items-center ${getPriorityColor(task.priority)}`}
        >
          {task.priority}
        </span>
        <Tooltip>
          <Tooltip.Trigger>
            <span
              onClick={() => handleDelete()}
              className="h-12 w-12 hover:bg-black hover:text-white cursor-pointer flex justify-center items-center rounded-full"
            >
              <Trash2 className="stroke-[1px]" />
            </span>
          </Tooltip.Trigger>
          <Tooltip.Content className="bg-red-500">
            {" "}
            Delete Task{" "}
          </Tooltip.Content>
        </Tooltip>
      </div>
    </div>
  );
};

export default Task;
