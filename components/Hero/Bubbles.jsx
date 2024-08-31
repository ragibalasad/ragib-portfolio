"use client";

import { React, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const Bubbles = () => {
  let ref = useRef();
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  let yPinkTransform = useTransform(scrollYProgress, [0, 1], ["0%", "600%"]);
  let yIndigoTransform = useTransform(scrollYProgress, [0, 1], ["0%", "250%"]);
  let yGreenTransform = useTransform(scrollYProgress, [0, 1], ["0%", "800%"]);
  let yYellowTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-600%"]);

  let yPink = yPinkTransform;
  let yIndigo = yIndigoTransform;
  let yGreen = yGreenTransform;
  let yYellow = yYellowTransform;

  return (
    <>
      <motion.div
        style={{ y: yPink }}
        className="pink-bubble absolute left-10 top-6 -z-10 block h-48 w-48 rounded-full bg-gradient-to-br from-transparent to-pink-500 shadow-2xl shadow-pink-500 blur max-md:left-6"
      ></motion.div>
      <motion.div
        style={{ y: yIndigo }}
        className="indigo-bubble absolute bottom-10 right-0 -z-10 block h-52 w-52 rounded-full bg-gradient-to-br from-transparent to-indigo-500 shadow-2xl shadow-indigo-500 blur"
      ></motion.div>
      <motion.div
        style={{ y: yGreen }}
        className="green-bubble absolute right-1/3 top-28 -z-10 block h-40 w-40 rounded-full bg-gradient-to-br from-transparent to-green-500 shadow-2xl shadow-green-500 blur max-md:right-6 max-md:top-52 2xl:top-1/4"
      ></motion.div>
      <motion.div
        style={{ y: yYellow }}
        className="yellow-bubble absolute -bottom-12 left-1/4 -z-10 block h-32 w-32 rounded-full bg-gradient-to-br from-transparent to-yellow-500 shadow-2xl shadow-yellow-500 blur"
      ></motion.div>
    </>
  );
};

export default Bubbles;
