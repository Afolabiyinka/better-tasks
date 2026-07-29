import { motion } from "framer-motion";
import { Clipboard, CheckCheck, Clock } from "lucide-react";

const Features = () => {
  const LINKS = [
    {
      title: "Managing Deadlines",
      emoji: Clock,
    },
    {
      title: "Keeping Track with assignments",
      emoji: Clipboard,
    },

    {
      title: "Prioritize, organise, execute",
      emoji: CheckCheck,
    },
  ];

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="py-6 px-4 h-screen w-full  flex flex-col justify-center items-center">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        variants={titleVariants}
        className="text-3xl md:text-5xl font-semibold text-center mb-16"
      >
        Why Choose Our Task Manager?
      </motion.h2>

      <motion.div className="w-full md:w-[50%]  flex flex-col gap-5">
        {LINKS.map(({ emoji: Icon, title, color, i }) => (
          <motion.div
            key={title}
            initial={{ y: 40 }}
            whileInView={{ y: 1 }}
            exit={{ opacity: 0 }}
            whileHover={{
              boxShadow:
                "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            className="p-2 border rounded-2xl  flex gap-4 items-center w-full  transition-all duration-300"
          >
            <div className="p-3  rounded-xl flex items-center justify-center">
              <Icon size={35} className="stroke-[1px]" />
            </div>
            <p className="font-sans font-medium text-md">{title}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Features;
