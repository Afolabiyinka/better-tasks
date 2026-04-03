import { CheckSquare } from "lucide-react";
import Greetings from "./pages/Greetings";
import Tasks from "./pages/Tasks";

const TaskLayout = () => {
  return (
    <div className="h-screen flex flex-col  items-center md:max-w-4xl w-full gap-2  rounded-2xl p-2 justify-center">
      <div className="w-full rounded-2xl">
        <a
          href="/"
          className="flex text-2xl w-full md:w-fit font-semibold items-center gap-1  capitalize border  p-3 rounded-2xl"
        >
          <CheckSquare className="stroke-[2px]" />
          Better Tasks
        </a>
      </div>
      <Greetings />
      <Tasks />
    </div>
  );
};

export default TaskLayout;
