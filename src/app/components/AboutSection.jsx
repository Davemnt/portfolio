"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../translations';

const technologies = [
  { name: "HTML", imgSrc: "/images/html.png" },
  { name: "CSS", imgSrc: "/images/css.png" },
  { name: "JavaScript", imgSrc: "/images/javascript.png" },
  { name: "React", imgSrc: "/images/react.png" },
  { name: "Next.js", imgSrc: "/images/nextjs.png" },
  { name: "Tailwind", imgSrc: "/images/tailwind.png" },
  { name: "Bootstrap", imgSrc: "/images/bootstrap.png" },
  { name: "GitHub", imgSrc: "/images/github.png" },
  { name: "Python", imgSrc: "/images/python.png" },
];

const AboutMeSection = () => {
  const { language } = useLanguage();
  const t = getTranslation(language);

  const fadeInAnimation = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  return (
    // La sección principal ya no necesita la animación, la pasamos a sus hijos
    <section id="sobre-mi" className="py-24 md:py-32 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-12">
        
        {/* --- SECCIÓN SUPERIOR: DOS COLUMNAS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* --- COLUMNA IZQUIERDA: IMAGEN --- */}
          {/* Aplicamos la animación a esta columna */}
          <motion.div
            className="flex justify-center"
            {...fadeInAnimation}
            transition={{ ...fadeInAnimation.transition, delay: 0.2 }}
          >
            {/* CLAVE PARA RECORTAR LA IMAGEN: El 'div' exterior define la forma */}
            <div className="w-full max-w-[22rem] h-auto bg-slate-200 rounded-2xl shadow-lg overflow-hidden aspect-[4/5]">
              <img
                src="/images/home1.png"
                alt="David"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* --- COLUMNA DERECHA: "SOBRE MÍ" Y TEXTO --- */}
          {/* Aplicamos la animación a esta columna */}
          <motion.div
            className="text-center lg:text-left"
            {...fadeInAnimation}
            transition={{ ...fadeInAnimation.transition, delay: 0.4 }}
          >
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-800 mb-6 leading-tight">
              {t.about.title}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
                {t.about.titleHighlight}
              </span>
            </h2>
            <p className="text-slate-600 text-xl leading-relaxed mb-4">
              {t.about.description1}
            </p>
            <p className="text-slate-600 text-xl leading-relaxed mb-10">
              {t.about.description2}
            </p>
          </motion.div>
        </div>

        {/* --- SECCIÓN INFERIOR: TECNOLOGÍAS --- */}
        {/* Aplicamos la animación a esta sección también */}
        <motion.div
          className="mt-24"
          {...fadeInAnimation}
          transition={{ ...fadeInAnimation.transition, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            {t.about.techTitle}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech) => (
              <div 
                key={tech.name} 
                className="flex flex-col items-center justify-center w-32 h-32 bg-white border border-slate-200 rounded-lg shadow-sm transition-all duration-300 hover:shadow-xl hover:border-slate-300 hover:-translate-y-2"
              >
                <img src={tech.imgSrc} alt={tech.name} className="h-14 w-14 object-contain"/>
                <span className="text-sm font-medium text-slate-600 mt-2">{tech.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMeSection;