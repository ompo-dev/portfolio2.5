import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const expereinces = [
    {
      name: "AWS - Instituto Caldeira",
      role: "Aluno - AWS",
      url: "https://institutocaldeira.org.br/programas/nova-geracao/",
      start: "Jun 2023",
      end: "--- ----",
      shortDescription: [
        "Curso de preparação para a prova Cloud Solution Architect - AWS.",
        "AWS Certified Cloud Practitioner Official Practice.",
      ],
    },
    {
      name: "Intituto Caldeira",
      role: "Aluno - Programa Nova Geração",
      url: "https://institutocaldeira.org.br/programas/nova-geracao/",
      start: "Abr 2023",
      end: "--- ----",
      shortDescription: [
        "Curso de Programação Web e Java fornecido pelo Instituto Caldeira em Parceria com a Alura.",
        "NG Talks - Palestras com espacilaistas em diversas áreas.",
        "Paradas Tech - Eventos com foco em estudos em grupo.",
        "Dias D - Eventos e formações de Network.",
      ],
    },
    {
      name: "Tegma - RS",
      role: "Jovem Aprendiz",
      url: "https://www.tegma.com.br",
      start: "Fev 2020",
      end: "Dez 2022",
      shortDescription: [
        "Criação de automação de tarefas com Excel.",
        "Criação de projetos para organização e digitalização do almoxarifado envolvendo React Js e React Native.",
      ],
    },
    {
      name: "Senac RS",
      role: "T.I.",
      url: "https://www.senacrs.com.br",
      start: "Jun 2021",
      end: "Dez 2022",
      shortDescription: [
        "2 Módulos de Programção.",
        "Módulo de Redes.",
        "Módulo de Hardware.",
      ],
    },
    {
      name: "Fundação Bradesco",
      role: "Cursos",
      url: "https://fundacao.bradesco",
      start: "Nov 2016",
      end: "Nov 2019",
      shortDescription: [
        "Circuitos Elétricos.",
        "Pelo meu destaque no curso de Robótica com 14 anos fui convidado a ser Instrutor de Robótica.",
        "Eletricidade Básica.",
        "Robótica.",
        "2 Cursos de Criação de sites com Html5 Css3 e JavaScript.",
        "2 Cursos de Lógica de programção.",
        "Pacote Windows e suas ferramentas do Basico ao Avançado.",
      ],
    },
  ];
  return (
    <motion.div
      className="experience"
      id="experience"
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
        <h2>Experiências e Cursos</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={expereince.name}
              >
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={expereinces[selected].url} className="link">
                  {expereinces[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
