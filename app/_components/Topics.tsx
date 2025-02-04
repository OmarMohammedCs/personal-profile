import React from "react";

const Topics = () => {
  const topics = [
    "Advanced Programming",
    "Algorithm Design",
    "Data Structures",
    "Performance Analysis",
    "Clean Code",
    "Practical Projects",
    "Modern Technologies",
    "Self Learning",
    "Programming Logic",
    "Algorithm Efficiency",
  ];

  return (
    <div className="p-6 flex justify-center">
      <div className="grid grid-cols-3 md:grid-cols-2 gap-4 w-96 overflow-hidden">
        {topics.map((item, index) => (
          <div
            key={index}
            className="p-2 bg-scandry rounded-lg shadow-lg text-center text-[15px] font-medium
                       transition-all duration-300 hover:scale-105 hover:bg-blue-500 hover:text-white line-clamp-2"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topics;
