import {
  Dialog,
  DialogOverlay,
  DialogContent,
  Select,
  SelectTrigger,
  SelectOption,
  SelectList,
} from "@material-tailwind/react";
import CustomBtn from "../../../Components/custom/CustomBtn";
import { CustomInput } from "../../../Components/custom/Input";
import { Plus, X } from "lucide-react";
import { useAddTasks } from "../hooks/useAddTasks";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const { error, handleAddTask, loading, setTaskInputData, taskInputData } =
    useAddTasks();
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/tasks");
  };

  return (
    <Dialog open={true} onOpenChange={handleClose}>
      <DialogOverlay className="backdrop-blur-sm">
        <DialogContent className="sm:max-w-lg border-none shadow-none relative p-4 h-[60%]">
          <button
            onClick={handleClose}
            className="absolute top-2 right-3 border p-1.5 rounded-xl hover:bg-black/5 transition-colors"
            type="button"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <form className="space-y-4" onSubmit={handleAddTask}>
            <h2 className="text-lg font-medium">Add a new task</h2>

            <div className="flex flex-col md:flex-row md:items-center gap-2">
              <CustomInput
                value={taskInputData.title}
                onChange={(e) =>
                  setTaskInputData({
                    ...taskInputData,
                    title: e.target.value,
                  })
                }
                placeholder="Walk the dog 🐕‍🦺"
                className="w-full"
                required
              />

              <Select
                placement="bottom-end"
                value={taskInputData.priority}
                onChange={(value) =>
                  setTaskInputData((prev) => ({
                    ...prev,
                    priority: value,
                  }))
                }
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 25 },
                }}
              >
                <SelectTrigger className="w-32 border" placeholder="Priority" />
                <SelectList>
                  <SelectOption value="high">High</SelectOption>
                  <SelectOption value="medium">Medium</SelectOption>
                  <SelectOption value="low">Low</SelectOption>
                </SelectList>
              </Select>
            </div>

            {error && <p className="text-sm text-red-600">{error}</p>}

            <CustomBtn
              icon={Plus}
              type="submit"
              disabled={loading}
              className="w-full"
            >
              {loading ? "Adding..." : "Add Task"}
            </CustomBtn>
          </form>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
};

export default AddTask;
