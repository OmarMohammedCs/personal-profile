"use client";

import { motion, MotionProps } from "framer-motion";

interface TransitionProps extends MotionProps {
  children: React.ReactNode;
}

export default function Transition({
  children,
  initial = { y: 20, opacity: 0 },
  animate = { y: 0, opacity: 1 },
  transition = { ease: "easeInOut", duration: 1.5 },
  ...rest
}: TransitionProps) {
  return (
    <motion.div initial={initial} animate={animate} transition={transition} {...rest}>
      {children}
    </motion.div>
  );
}
