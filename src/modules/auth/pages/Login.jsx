import { Link } from "react-router-dom";
import { User, Mail, Lock } from "lucide-react";
import { motion } from "framer-motion";

import { CustomInput } from "../../../Components/custom/Input";
import CustomBtn from "../../../Components/custom/CustomBtn";
import CustomCheckbox from "../../../Components/custom/Checkbox";
import { useLogin } from "../hooks/useLogin";

const slideUpVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Login = () => {
  const { handleLogin, loading, loginData, setLoginData } = useLogin();

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center p-4 w-full"
      initial="hidden"
      animate="visible"
    >
      <motion.div
        variants={slideUpVariants}
        className="
          max-w-md mx-auto
          w-full 
          rounded-3xl
        
          p-6 sm:p-8
          
        "
      >
        <motion.div
          variants={slideUpVariants}
          className="flex flex-col items-center mb-8"
        >
          <div className="mb-3 p-3 rounded-2xl border">
            <User size={28} className="stroke-[1.5px]" />
          </div>

          <h1 className="text-md font-semibold">Welcome Back</h1>

          <p className="text-lg text-gray-500 mt-1">Log into your account</p>
        </motion.div>

        <motion.form
          variants={slideUpVariants}
          onSubmit={handleLogin}
          className="space-y-4"
        >
          <CustomInput
            icon={Mail}
            type="email"
            placeholder="Email"
            value={loginData.email}
            onChange={(e) =>
              setLoginData({
                ...loginData,
                email: e.target.value,
              })
            }
            autoComplete="email"
          />

          <CustomInput
            icon={Lock}
            type="password"
            placeholder="Password"
            value={loginData.password}
            onChange={(e) =>
              setLoginData({
                ...loginData,
                password: e.target.value,
              })
            }
            autoComplete="current-password"
          />

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center  cursor-pointer">
              <CustomCheckbox />
              <span className="text-sm">Remember me</span>
            </label>

            <button
              type="button"
              className="text-gray-500 hover:text-black transition-colors"
            >
              Forgot password?
            </button>
          </div>

          <CustomBtn
            className="w-full"
            loading={loading}
            type="submit"
            disabled={loading}
          >
            {loading ? "Login in..." : "Log in"}
          </CustomBtn>

          <p className="text-sm text-center text-gray-500 pt-2">
            Don&apos;t have an account?
            <Link
              to="/auth/register"
              className="ml-1 text-blue-500 font-medium hover:underline"
            >
              Sign up
            </Link>
          </p>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default Login;
