import React from "react";
import { FaPencilRuler, FaCode, FaLayerGroup } from "react-icons/fa";
import Transition from "./Transition";

const services = [
  {
    title: "Frontend Development",
    description: "Building modern and responsive web interfaces with cutting-edge technologies.",
    icon: <FaLayerGroup className="text-distinct text-3xl" />, 
  },
  {
    title: "Backend Development",
    description: "Creating scalable and efficient server-side applications and APIs.",
    icon: <FaPencilRuler className="text-distinct text-3xl" />, 
  },
  {
    title: "Fullstack Development",
    description: "Combining frontend and backend expertise to develop complete web solutions.",
    icon: <FaCode className="text-distinct text-3xl" />, 
  },
];

const Services: React.FC = () => {
  return (
   <div id="service" className="w-full h-[150vh] md:h-screen bg-text">
     <section className=" text-white py-16 px-8 flex items-center justify-center">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          My <span className="text-distinct">services.</span>
        </h2>
        <p className="text-white max-w-md mb-12 mx-auto">
        I specialize in both frontend and backend development, crafting seamless fullstack applications.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 justify-center">
          {services.map((service, index) => (
            <Transition key={index}>
              <div className="bg-scandry p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2">
                {service.icon}
                <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
                <p className="text-white mt-2">{service.description}</p>
                <a href="#" className="inline-block mt-4 text-white text-xl">→</a>
              </div>
            </Transition>
          ))}
        </div>
      </div>
    </section>
   </div>
  );
};

export default Services;