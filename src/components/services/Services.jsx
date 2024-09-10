import React from 'react';
import "./services.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";

const data = [
  {
    id: 1,
    image: Image1,
    title: "UI/UX design",
    description:
      "Offering user-centered design solutions, creating intuitive and accessible interfaces that elevate user experiences across digital platforms. Specializing in interactive prototyping, delivering high-fidelity designs with real-time feedback for seamless iterations and polished final results.",
  },
  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description:
      "Providing full-stack web development services, building responsive, high-performance websites with a focus on functionality and scalability. Expertise in creating custom solutions that ensure seamless user experiences and robust back-end systems for optimal performance.",
  },
  {
    id: 3,
    image: Image3,
    title: "Android App Development",
    description:
      "Delivering comprehensive Android development services, creating high-performance, user-friendly apps tailored for various devices. Specializing in custom solutions with seamless functionality, optimized performance, and a focus on enhancing the user experience.",
  },
];


const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Services</h2>

      <div className="services__container grid">
        {data.map(({id, image, title,description}) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />

              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services