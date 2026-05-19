import { Input } from "@material-tailwind/react";
import { motion } from "framer-motion";

export const CustomInput = ({
  icon: Icon,
  type,
  placeholder,
  onChange,
  value,
  className,
}) => {
  return (
    <motion.div
      className={`relative w-full h-12 text-sm flex  gap-1 items-center justify-center pl-2 border-[1px] rounded-xl overflow-hidden focus:ring-2 ${className} `}
    >
      {Icon && <Icon size={25} className={`stroke-[1px]`} />}
      <input
        placeholder={placeholder}
        className="h-full w-full focus:shadow-none border-0 bg-transparent outline-none shadow-none "
        type={type}
        value={value}
        onChange={onChange}
        required
      />
    </motion.div>
  );
};
