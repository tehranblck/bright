import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedDivProps {
  children: ReactNode;
  animationType?: "fade" | "slideX"|"slideY"| "scale";
  className?: string; 
}

const animations = {
  fade: { opacity: 0, y: 20 },
  slideX: { x: -50, opacity: 0 },
  slideY: { y: -50, opacity: 0 },
  scale: { scale: 0.8, opacity: 0 },
};

const AnimatedDiv: React.FC<AnimatedDivProps> = ({
  children,
  animationType = "fade",
  className = "", 
}) => {
  return (
    <motion.div
      initial={animations[animationType]}
      animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      transition={{ duration: 0.6 }}
      className={className} 
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;
