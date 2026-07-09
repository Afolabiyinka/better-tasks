import { Sun, Moon, CloudSun } from "lucide-react";
import Settings from "../components/Settings";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % taskMotivations.length);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  const taskMotivations = [
    "One small step today leads to a giant leap tomorrow",
    "Keep going—every task you finish is a victory worth celebrating",
    "Progress over perfection, just start and the rest will follow",
    "You didn't come this far to only come this far—keep pushing",
    "Momentum builds with every click, so don't stop now",
    "This task is your next win—own it and move closer to your goal",
    "The hardest part is starting, and you've already done that",
    "Stay consistent, stay focused, and watch the magic happen",
    "Finish what you started—future you will thank you for it",
    "Every completed task is a brick in the foundation of your success",
  ];

  return (
    <div className="w-full rounded-2xl p-2 md:p-6">
      <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-black text-white rounded-full p-2 flex justify-center items-center">
            <Icon size={40} className={`stroke-[0.8px] h-10 w-10`} />
          </div>
          <div className="flex flex-col ">
            <h1 className="md:text-xl font-bold">{greeting}</h1>
            <motion.h1
              key={taskMotivations[index]}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="md:text-center md:text-lg font-heading"
            >
              {taskMotivations[index]}
            </motion.h1>{" "}
          </div>
        </div>
        <div className="flex items-center gap-4">{/* <Settings /> */}</div>
      </div>
    </div>
  );
};

export default Greetings;
