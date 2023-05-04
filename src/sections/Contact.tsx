import Button from "@/components/Button";
import React from "react";
import { motion } from "framer-motion";
function Contact() {
  return (
    <motion.div
      className="contact"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2 className="contact-title">Quem é o proximo?</h2>
      <h2 className="contact-sub-title">Que tal você?</h2>
      <p className="contact-text">
      Vamos conversar, me mande suas ideias e projetos por email clicando no link abaixo, vamos fazer acontecer!
      </p>
      <div className="contact-cta">
        <Button link="mailto:2326mpb@gmail.com?subject=Envie sua proposta, em breve lhe enviarei o orçamento" text="Enviar Proposta" />
      </div>
    </motion.div>
    
  );
}

export default Contact;
