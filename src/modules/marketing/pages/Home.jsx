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
    <div className="flex flex-col lg:flex-row  h-full w-full justify-center items-center p-4 md:px-20 gap-10">
      <div className="md:space-y-6 space-y-3 md:w-1/2  lg:px-10 h-full w-full flex flex-col text-center md:text-left items-center md:items-start">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-7xl font-extrabold  capitalize"
        >
          Think, plan and track
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:text-5xl text-2xl text-gray-700  dark:text-gray-300 tracking-wide capitalize"
        >
          All in one place
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
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
      <span className="w-full lg:w-[40%] h-full flex items-center justify-center">
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
