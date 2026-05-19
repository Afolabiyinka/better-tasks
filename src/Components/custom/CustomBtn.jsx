import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

const CustomBtn = ({
  children,
  className,
  icon: Icon,
  onClick,
  disabled,
  loading,
  type = "button",
}) => {
  return (
    <motion.button
      type={type}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      disabled={disabled}
      className={`h-11 bg-black text-sm dark:bg-white text-white dark:text-black flex gap-3 px-10 hover:px-12 items-center justify-center rounded-2xl transition-all duration-500 border disabled:cursor-not-allowed disabled:bg-gray-500 ${className}`}
    >
      {loading && <Loader2 className="animate-spin" />}
      <span>{children}</span>
      {Icon && <Icon size={20} className="stroke-[1px]" />}
    </motion.button>
  );
};

export default CustomBtn;
