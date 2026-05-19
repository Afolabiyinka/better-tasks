import { Checkbox, CheckboxIndicator } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { User, Mail, Lock, UserPlus, HandIcon } from "lucide-react";
import { motion } from "framer-motion";
import { CustomInput } from "../../../Components/custom/Input";
import CustomBtn from "../../../Components/custom/CustomBtn";
import CustomCheckbox from "../../../Components/custom/Checkbox";
import { useSignup } from "../hooks/useRegister";
const slideUpVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const Register = () => {
  const { handleSignup, loading, signupData, setSignUpData } = useSignup();

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
          border
          p-6 sm:p-8
          shadow-sm
        "
      >
        {" "}
        <motion.div
          variants={slideUpVariants}
          className="flex flex-col items-center mb-8"
        >
          <div className="mb-3 p-3 rounded-2xl border">
            <HandIcon size={28} className="stroke-[1.5px] animate-bounce" />
          </div>

          <h1 className="text-2xl font-semibold tracking-tight">New here</h1>

          <p className="text-sm text-gray-500 mt-1">Create an your account</p>
        </motion.div>
        <motion.form
          className="flex flex-col justify-center items-center gap-4 p-6  w-full"
          onSubmit={handleSignup}
          variants={slideUpVariants}
        >
          <CustomInput
            icon={User}
            value={signupData.username}
            type="text"
            placeholder={"Username"}
            onChange={(e) =>
              setSignUpData({ ...signupData, username: e.target.value })
            }
          />
          <CustomInput
            icon={Mail}
            value={signupData.email}
            type="email"
            placeholder={"Email"}
            onChange={(e) =>
              setSignUpData({ ...signupData, email: e.target.value })
            }
          />
          <CustomInput
            icon={Lock}
            value={signupData.password}
            type="password"
            placeholder={"Password"}
            onChange={(e) =>
              setSignUpData({ ...signupData, password: e.target.value })
            }
          />
          <motion.div
            className="flex items-center w-full"
            variants={slideUpVariants}
          >
            <label className="flex items-center cursor-pointer text-sm">
              <CustomCheckbox />
              Remember Me
            </label>
          </motion.div>
          <CustomBtn
            className={`w-full`}
            loading={loading}
            disabled={loading}
            type="submit"
            children={`Create Account`}
          />
          <motion.p
            className=" mt-4 flex gap-1 text-sm tracking-wider text-center"
            variants={slideUpVariants}
          >
            Already have an account?
            <Link to="/auth/login" className="text-blue-500 hover:underline">
              Log In
            </Link>
          </motion.p>
          <motion.div variants={slideUpVariants}></motion.div>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default Register;
