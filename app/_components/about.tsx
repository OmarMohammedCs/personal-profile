"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Transition from "./Transition";
import Tabs from "./Tabs";


const Counter = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    const duration = 2000; 
    const frameRate = 1000 / 60; 
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const updateCounter = () => {
      frame++;
      const progress = frame / totalFrames;
      setCount(Math.floor(progress * end));
      if (frame < totalFrames) requestAnimationFrame(updateCounter);
    };

    requestAnimationFrame(updateCounter);
  }, [value]);

  return (
    <motion.span
      className="font-bold text-xl sm:text-2xl lg:text-3xl text-blue-500 mt-2"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {count}+
    </motion.span>
  );
};


const stats = [
  { number: 2, label: "Years Learning" },
  { number: 16, label: "Projects Completed" },
  { number: 17, label: "Technologies Mastered" },
  { number: 0, label: "Open to Work" },
];

const About = () => {
  return (
    <div
      id="about"
      className="w-full h-[140vh] md:h-screen grid grid-cols-1 md:grid-cols-2 justify-items-center items-center px-6 md:px-20 lg:px-32 bg-text gap-6"
    >
      <Transition>
      

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-distinct">
            <span className="text-[#1E40AF]">Full-Stack Developer</span> | TypeScript & Next.js | Backend & Database Specialist
          </h1>
          <p className="text-base sm:text-lg text-scandry">
            Experienced in JavaScript, TypeScript, React, and Next.js, with expertise in RESTful APIs (Express, NestJS) and database management (MongoDB, SQLite, MySQL). Proficient in PHP and Python, focused on building efficient, scalable solutions and continuously improving data structures and algorithms. 🚀
          </p>
          
          {/* ✅ إحصائيات المطور */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-gray-900 dark:text-white w-full text-center">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center border-l-2 border-scandry opacity-90 pl-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Counter value={item.number} />
                <span className="text-sm sm:text-md md:text-lg text-scandry dark:text-gray-400">{item.label}</span>
              </motion.div>
            ))}
          </div>
      </Transition>

     
      <motion.div
        className="w-full flex justify-center md:justify-end"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Tabs />
      </motion.div>
    </div>
  );
};

export default About;
