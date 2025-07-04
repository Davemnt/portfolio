"use client";

import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from "framer-motion";

const PortfolioSection = () => {
  // PASO 1: Reestructuramos los datos. Añadimos un array 'technologies'.
  const projects = [
    {
      id: 1,
      title: "Curriculum Vitae Interactivo",
      description: "A modo de práctica, diseñé mi CV de forma interactiva para mostrar mis habilidades de maquetación y diseño.",
      technologies: ["HTML", "CSS"],
      image: "/images/cv.png",
      gitUrl: "https://github.com/Davemnt/curriculum",
      previewUrl: "https://davemnt.github.io/curriculum/",
    },
    {
      id: 2,
      title: "E-commerce de Colchones",
      description: "Desarrollo de un sitio de e-commerce completo, incluyendo carrito de compras, perfiles de usuario y pasarela de pago.",
      technologies: ["React", "Node.js", "Express", "EN DESARROLLO"],
      image: "/images/ecco1.png",
      gitUrl: "#",
      previewUrl: "#",
    },
    {
      id: 3,
      title: "Landing Page para Inmobiliaria",
      description: "Diseño de una Landing Page moderna y optimizada para la conversión de visitantes en potenciales clientes para una inmobiliaria.",
      technologies: ["Astro", "HTML", "CSS", "Gsap", "TailwindCSS", "EN DESARROLLO"],
      image: "/images/alquiler1.png",
      gitUrl: "#",
      previewUrl: "#",
    },
    {
      id: 4,
      title: "Sistema de Ventas",
      description: "Sistema de ventas diseñado para optimizar la gestión de stock y ventas de una empresa, con roles de usuario y reportes.",
      technologies: ["React", "PostgreSQL", "Full Stack", "EN DESARROLLO"],
      image: "/images/sist-ventas.png",
      gitUrl: "#",
      previewUrl: "#",
    },
  ];

  return (
    <motion.section
      id="portfolio"
      className="py-24 md:py-32 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-800 text-center mb-16">
          Mi <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">Portafolio</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative w-full aspect-video bg-slate-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/e2e8f0/475569?text=Proyecto"; }}
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
                <p className="text-slate-600 text-base leading-relaxed mb-4">{project.description}</p>
                
                {/* --- NUEVA SECCIÓN PARA PÍLDORAS DE TECNOLOGÍA --- */}
                <div className="flex flex-wrap gap-2 mt-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* --- BOTONES (EMPUJADOS AL FINAL) --- */}
                <div className="flex justify-start space-x-4 mt-auto pt-4 border-t border-slate-100">
                  {project.gitUrl !== "#" && (
                    <a href={project.gitUrl} target="_blank" rel="noopener noreferrer" className="add-glow-on-hover inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-md text-sm font-medium transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105" aria-label={`Ver código de ${project.title} en GitHub`}>
                      <FaGithub className="h-5 w-5 mr-2" /> GitHub
                    </a>
                  )}
                  {project.previewUrl !== "#" && (
                    <a href={project.previewUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 border border-orange-500 text-orange-600 rounded-md text-sm font-medium transition-all hover:bg-orange-500 hover:text-white" aria-label={`Ver demo en vivo de ${project.title}`}>
                      <FaExternalLinkAlt className="h-4 w-4 mr-2" /> Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default PortfolioSection;