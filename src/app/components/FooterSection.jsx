"use client";

import React from 'react';
// PASO 1: Importar los íconos que vamos a usar
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  // PASO 2: Definir las URLs de tus redes sociales para un código más limpio
  const githubUrl = "https://github.com/Davemnt";
  const linkedinUrl = "https://www.linkedin.com/in/david-monte-a9ba567b/";

  return (
    <footer className="bg-[#1c1c1c] text-[#e7e6c4] py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <h3 className="text-2xl font-bold text-[#e7e6c4] mb-4">O encuéntrame en:</h3>
        {/* --- PASO 3: AÑADIR LOS ENLACES A REDES SOCIALES --- */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visitar perfil de GitHub"
            className="text-[#e7e6c4] hover:text-orange-500 transition-colors duration-300"
          >
            <FaGithub className="h-7 w-7" />
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visitar perfil de LinkedIn"
            className="text-[#e7e6c4] hover:text-orange-500 transition-colors duration-300"
          >
            <FaLinkedin className="h-7 w-7" />
          </a>
        </div>

        {/* Información de Copyright (sin cambios) */}
        <p className="text-[#e7e6c4] text-sm md:text-base">
          © {currentYear} David. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;