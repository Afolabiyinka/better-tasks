import React from "react";
import AddTask from "../components/AddTask";
import Task from "../components/Task";
import { useTasks } from "../hooks/useTasks";
import LoadingContainer from "../../../Components/loader/LoadingContainer";
import CustomBtn from "../../../Components/custom/CustomBtn";
import {
  CheckSquare,
  ClipboardXIcon,
  ListTodo,
  RefreshCcw,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Tasks = () => {
  const { error, loading, tasks, refetch } = useTasks();
  const navigate = useNavigate();

  let tasksText = tasks.length === 1 ? "task" : "tasks";

  if (error) {
    return (
      <div className="w-full h-full flex flex-col space-y-4 items-center justify-center">
        <p className="text-red-500 text-2xl">Failed to fetch tasks</p>
        <CustomBtn onClick={() => refetch()} icon={RefreshCcw}>
          Retry
        </CustomBtn>
      </div>
    );
  }

  if (loading) {
    return <LoadingContainer />;
  }

  return (
    <div className="w-full  rounded-2xl overflow-auto p-1  h-full">
      <div className="flex md:flex-row flex-col w-full justify-between md:items-center p-1 gap-2 mb-3">
        <h1 className="font-bold text-xl md:ml-5">
          You have ( {tasks.length} ) {tasksText} pending
        </h1>
        <CustomBtn
          type="button"
          icon={CheckSquare}
          onClick={() => navigate("/add-task")}
        >
          Add Task
        </CustomBtn>
      </div>
      <div className="h-full w-full p-2 space-y-3">
        {tasks.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="p-4 rounded-3xl border mb-4">
              <ListTodo size={48} className="text-gray-400 stroke-[1.5px]" />
            </div>

            <h2 className="text-lg font-semibold">No tasks yet</h2>

            <p className="text-sm text-gray-500 mt-1">
              Create your first task to get started
            </p>
          </div>
        ) : (
          tasks?.map((task) => <Task key={task._id} task={task} />)
        )}
      </div>
    </div>
  );
};

export default Tasks;
