import whiteScreenShot from "../../../Assets/ScreenShots/light-screenshot.webp";
import blackScreenShot from "../../../Assets/ScreenShots/dark-screenshot.webp";
import CustomBtn from "../../../Components/custom/CustomBtn";
import { motion } from "framer-motion";
import { ArrowRightCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../../shared/store/useTheme";

const Home = () => {
  const { theme } = useTheme();
  const screenshot = theme === "dark" ? blackScreenShot : whiteScreenShot;
  const navigate = useNavigate();

  return (
    <div className="flex flex-col lg:flex-row  h-full w-full justify-center items-center p-10 md:px-16">
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-5 md:w-1/2  h-full w-full">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold font-sans leading-tight capitalize"
        >
          Think, plan and track
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:text-4xl lg:text-5xl text-2xl text-gray-600  dark:text-gray-300 tracking-wide capitalize"
        >
          All in one place
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl text-gray-600 dark:text-gray-400 capitalize"
        >
          Efficiently manage your tasks and boost productivity
        </motion.p>

        <CustomBtn
          children="Try it now"
          onClick={() => navigate("/auth/login")}
          icon={ArrowRightCircle}
        />
      </div>

      {/* Right side: Floating Screenshot */}
      <span className="w-full lg:w-1/2 h-full flex items-center justify-center">
        <motion.img
          src={screenshot}
          alt="App Preview"
          className="max-w-[300px]"
        />
      </span>
    </div>
  );
};

export default Home;
