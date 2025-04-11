import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type CountUpProps = {
  to: number;
  duration?: number;
};

export function CountUp({ to, duration = 1.5 }: CountUpProps) {
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, {
    damping: 180,
    stiffness: 250,
  });

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    motionVal.set(to);
  }, [to]);

  useEffect(() => {
    return spring.on("change", (v) => {
      setCurrent(Math.floor(v));
    });
  }, [spring]);

  return <motion.span>{current}</motion.span>;
}
