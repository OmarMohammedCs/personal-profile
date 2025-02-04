import Image from "next/image";
import Link from "next/link";
import React from "react";

const Work = () => {
  const projects = [
    "/project1.webp",
    "/project2.webp",
    "/project3.webp",
    "/project4.webp",
  ];

  return (
    <div id="work" className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-12 bg-text gap-16">
      
      
      <div className="max-w-md text-center md:text-left">
        <h1 className="text-distinct text-3xl md:text-4xl font-bold mb-2">
          My Work <span className="text-3xl text-scandry">.</span>
        </h1>
        <p className="text-scandry text-base md:text-lg leading-relaxed">
          A collection of my projects built using (MongoDB ,mysql ,Express.js ,nestjs ,nextjs , React, Node.js). 
          Focused on creating <strong>fast, scalable, and user-friendly</strong> applications...
        </p>
      </div>

      
      <div className="grid grid-cols-2 gap-4 md:gap-6">
        {projects.map((img, index) => (
          <Link href="https://github.com/OmarMohammedCs" target="_blank" key={index} className="group">
            <div className="w-36 h-28 md:w-48 md:h-36 rounded-md overflow-hidden shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <Image
                src={img}
                alt={`Project ${index + 1}`}
                width={192}
                height={144}
                className="w-full h-full object-cover"
              />
            </div>
          </Link>
        ))}
      </div>
      
    </div>
  );
};

export default Work;
