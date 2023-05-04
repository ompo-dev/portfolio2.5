import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/project1.png",
      projectName: "Call Talk",
      projectLink: "https://calltalk.netlify.app",
      projectDescription:
        "Call Talk é um site gratuito onde você pode criar salas, fazer chamadas de vídeo, conversar por texto e compartilhar sua tela.",
      projectTech: [
        "React Js",
        "API",
        "Typescript",
      ],
      projectExternalLinks: {
        github: "https://github.com/ompo-dev/Call-Talk",
        externalLink: "https://calltalk.netlify.app",
      },
    },
    {
      image: "/project2.png",
      projectName: "Site Empresarial",
      projectLink: "https://base4.netlify.app",
      projectDescription:
        "Site para empresa Base 4 Telecom. Obs: Site original da empresa não foi atualizado por questões de contrato com a Hospedagem.",
      projectTech: [
        "HTML5",
        "CSS3",
        "JavaScript",
      ],
      projectExternalLinks: {
        github: "https://github.com/ompo-dev/Base-4-Telecom",
        externalLink: "https://base4.netlify.app",
      },
    },
    {
      image: "/project3.png", 
      projectName: "Crowdfunding - Web3.0",
      projectLink: "https://crowdfunding-ompo.netlify.app",
      projectDescription:
        "Crowdfunding em React Js na Web3.0 com transações em Crypto(ETH).",
      projectTech: [
        "React Js",
        "Vite",
        "Web3.0",
        "Tailwind",
        "Smart Contracts",
        "TypeScript",
      ],
      projectExternalLinks: {
        github: "https://github.com/ompo-dev/CrowdFunding",
        externalLink: "https://crowdfunding-ompo.netlify.app",
      },
    },
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Alguns Projetos</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Link href={projectExternalLinks.externalLink} className="project-info-links-item-link">
                      <Image src={image} fill alt={projectName} quality={100} />
                    </Link>
                  </div>
                </div>
                <div className="project-info">
                  <Link href={projectExternalLinks.externalLink} className="project-info-links-item-link">
                    <h3 className="project-info-title">{projectName}</h3>
                  </Link>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
