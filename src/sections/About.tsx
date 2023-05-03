import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>Sobre mim</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
          Eu sou animado e gosto de aprender coisas novas. 
          Comecei a programar aos 12 anos, começando com Python, 
          depois C#, C++, JavaScript e TypeScript. Realizei cursos 
          de programação com arduino, HTML, CSS, JS e robótica. 
          Destaquei-me como instrutor de robótica aos 14 anos. 
          Concluí meu Técnico de Informática em 2022. 
          Minhas áreas de atuação são React JS, Next JS e React Native. 
          Estudo em andamento sobre Vue JS e Web3.0.
          </p>
          <p className="about-grid-info-text">
          Amor pela programação desde criança, 
          quando descobri que poderia montar e 
          desmontar coisas bem mais interessantes que meus brinquedos.
          </p>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/maicon.jpg" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
