"use client";

import React from 'react';
import { motion } from "framer-motion";
// PASO 1: Importamos los íconos que vamos a usar
import { FaGraduationCap, FaArrowRight } from 'react-icons/fa';

const StudiesSection = () => {
  // Datos de tus estudios
  const studies = [
    {
      title: "Experto Universitario en Seguridad de la Información",
      institution: "Centro de e-Learning UTN FRBA",
      date: "Marzo 2024 - Agosto 2024",
      description: "Desarrollo de planes estratégicos de seguridad, con foco en los elementos tecnológicos, redes y servidores de datos que generan un impacto de valor en la organización.",
      skills: ["Ciberseguridad", "Gestión de Riesgos", "Normativas", "Redes Seguras"]
    },
     {
      title: "Diplomatura en Programación Web Full Stack con React JS",
      institution: "Centro de e-Learning UTN FRBA",
      date: "Noviembre 2022 - Mayo 2023",
      description: "Formación dedicada al Front End y luego los contenidos aplicados a desarrollos Full Stack manejando desde el maquetado inicial hasta la puesta en marcha de un proyecto completo.",
      skills: ["HTML", "CSS", "React", "Node.js", "JavaScript ES6+"]
    },
    // ... resto de tus estudios
  ];

  // PASO 2: Añadimos tu URL de LinkedIn
  const linkedinUrl = "https://www.linkedin.com/in/david-monte-a9ba567b/";

  return (
    <motion.section
      id="estudios"
      className="py-24 md:py-32 bg-slate-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-800 text-center mb-16">
          Mi <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">Formación</span>
        </h2>

        {/* Contenedor de la línea de tiempo (sin cambios) */}
        <div className="relative border-l-2 border-orange-300 ml-4">
          {studies.map((study, index) => (
            <motion.div
              key={index}
              className="mb-10 pl-10 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="absolute -left-5 top-1 flex items-center justify-center h-10 w-10 rounded-full bg-orange-500 shadow-md">
                <FaGraduationCap className="text-white text-xl" />
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 border border-transparent transition-all duration-300 hover:shadow-xl hover:border-orange-300 hover:-translate-y-1">
                <div className="flex flex-wrap justify-between items-center text-sm mb-4">
                  <p className="font-semibold text-orange-700">{study.institution}</p>
                  <p className="text-slate-500">{study.date}</p>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{study.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-5">{study.description}</p>
                <div className="flex flex-wrap gap-2">
                  {study.skills.map((skill) => (
                    <span key={skill} className="bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full">{skill}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- PASO 3: AÑADIMOS EL BOTÓN "VER MÁS" AL FINAL --- */}
        <div className="text-center mt-16">
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            // La clase 'group' es la clave para la animación del ícono
            className="group inline-flex items-center text-lg font-semibold text-slate-700 transition-colors duration-300 hover:text-orange-600"
          >
            Ver trayectoria completa en LinkedIn
            <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
          </a>
        </div>
        
      </div>
    </motion.section>
  );
};

export default StudiesSection;