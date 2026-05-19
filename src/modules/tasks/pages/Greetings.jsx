import { Sun, Moon, CloudSun } from "lucide-react";
import Settings from "../components/Settings";

const Greetings = () => {
  const timeNow = new Date().getHours();

  const getGreeting = () => {
    if (timeNow >= 5 && timeNow < 12)
      return { greeting: "Good Morning", Icon: Sun, color: "text-yellow-500" };
    if (timeNow >= 12 && timeNow < 18)
      return {
        greeting: "Good Afternoon",
        Icon: CloudSun,
        color: "text-orange-400",
      };
    return { greeting: "Good Evening", Icon: Moon, color: "text-indigo-500" };
  };

  const { greeting, Icon, color } = getGreeting();

  return (
    <div className="w-full rounded-2xl p-2 md:p-6">
      <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-black text-white rounded-full p-2 flex justify-center items-center">
            <Icon size={40} className={`stroke-[0.8px] h-10 w-10`} />
          </div>
          <div className="flex flex-col ">
            <h1 className="md:text-xl font-bold">{greeting}, Olayinka</h1>
            <p className="">What do you plan to do today?</p>
          </div>
        </div>
        <div className="flex items-center gap-4">{/* <Settings /> */}</div>
      </div>
    </div>
  );
};

export default Greetings;
