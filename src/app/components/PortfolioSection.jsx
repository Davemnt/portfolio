"use client";

import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from "framer-motion";
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../translations';

const PortfolioSection = () => {
  const { language } = useLanguage();
  const t = getTranslation(language);
  const esProjects = [
    {
      id: 1,
      title: "Curriculum Vitae Interactivo",
      description: "A modo de práctica, diseñé mi CV de forma interactiva para mostrar mis habilidades de maquetación y diseño.",
      technologies: ["HTML5", "CSS"],
      image: "/images/cv.png",
      gitUrl: "https://github.com/Davemnt/curriculum",
      previewUrl: "https://davemnt.github.io/curriculum/",
    },
    {
      id: 2,
      title: "Gestor de gastos",
      description: "Sistema web profesional de gestión financiera, diseñado para control de gastos corporativos con autenticación segura, monitoreo en tiempo real y diseño responsive completo. PINs: `demo123` (usuario) / `admin456` (admin)",
      technologies: ["Firebase", "Javascript Vanilla", "HTML"],
      image: "/images/gestor-gasto.jpeg",
      gitUrl: "#",
      previewUrl: "https://gestor-de-gastos-demo.web.app/",
    },
    {
      id: 3,
      title: "Landing Page para Negocio de IT",
      description: "Es un sitio web corporativo moderno y completamente responsive, diseñado para ofrecer servicios de tecnología profesionales. El proyecto combina diseño atractivo, funcionalidad robusta y optimización SEO avanzada.",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "TailwindCSS"],
      image: "/images/miventech.png",
      gitUrl: "#",
      previewUrl: "https://miventech.com/",
    },
    {
      id: 4,
      title: "Sistema de Control de Stock",
      description: "Sistema web completo de gestión de inventario diseñado específicamente para negocios que manejen amplio stock. La aplicación permite gestionar inventario, controlar movimientos de stock, generar reportes PDF y administrar usuarios con diferentes niveles de acceso.",
      technologies: ["React", "Vite", "Full Stack", "Firebase"],
      image: "/images/sistema-control-stock.jpeg",
      gitUrl: "#",
      previewUrl: "https://control-stock-demo.web.app/login",
    },
    {
      id: 5,
      title: "Notas Personales - Demo",
      description: "Es una aplicación web privada y segura diseñada para la gestión personal de notas. La aplicación permite a los usuarios organizar, categorizar y almacenar sus reflexiones de manera estructurada, con funcionalidades avanzadas de búsqueda y sincronización multi-dispositivo.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Firebase"],
      image: "/images/personal-notes.png",
      gitUrl: "#",
      previewUrl: "https://personal-notes-demo.netlify.app/",
    },
  ];

  const enProjects = [
    {
      id: 1,
      title: "Interactive CV",
      description: "As a practice, I designed my CV interactively to showcase my layout and design skills.",
      technologies: ["HTML", "CSS"],
      image: "/images/cv.png",
      gitUrl: "https://github.com/Davemnt/curriculum",
      previewUrl: "https://davemnt.github.io/curriculum/",
    },
    {
      id: 2,
      title: "Expense Manager",
      description: "Professional web-based financial management system, designed for corporate expense control with secure authentication, real-time monitoring, and fully responsive design. PINs: `demo123` (user) / `admin456` (admin)",
      technologies: ["Firebase", "Javascript Vanilla", "HTML"],
      image: "/images/gestor-gasto.jpeg",
      gitUrl: "#",
      previewUrl: "https://gestor-de-gastos-demo.web.app/",
    },
    {
      id: 3,
      title: "IT Business Landing Page",
      description: "A modern and fully responsive corporate website, designed to showcase professional technology services. The project combines attractive design, robust functionality, and advanced SEO optimization.",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "TailwindCSS"],
      image: "/images/miventech.png",
      gitUrl: "#",
      previewUrl: "https://miventech.com/",
    },
    {
      id: 4,
      title: "Stock Control System",
      description: "Complete web-based inventory management system designed specifically for businesses handling large stock volumes. The application allows for inventory management, tracking stock movements, generating PDF reports, and managing users with different access levels.",
      technologies: ["React", "Vite", "Full Stack", "Firebase"],
      image: "/images/sistema-control-stock.jpeg",
      gitUrl: "#",
      previewUrl: "https://control-stock-demo.web.app/login",
    },
    {
      id: 5,
      title: "Personal Notes - Demo",
      description: "It is a private and secure web application designed for personal note management. The application allows users to organize, categorize, and store their thoughts in a structured way, with advanced search features and multi-device synchronization.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Firebase"],
      image: "/images/personal-notes.png",
      gitUrl: "#",
      previewUrl: "https://personal-notes-demo.netlify.app/",
    },
  ];

  const projects = language === 'es' ? esProjects : enProjects;

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
          {t.portfolio.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">{t.portfolio.titleHighlight}</span>
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