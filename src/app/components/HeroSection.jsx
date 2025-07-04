"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// PASO 1: Corregimos el nombre del ícono a 'GiSparkles'
import { FaMousePointer } from "react-icons/fa";
import { GiSparkles } from "react-icons/gi"; // Nombre corregido

 
const linkedinUrl = "https://www.linkedin.com/in/david-monte-a9ba567b/";

const HeroSection = () => {
  return (
    <motion.section
      id="home"
      className="min-h-[85vh] flex items-center justify-center bg-gray-50"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center w-full px-4 sm:px-6 lg:px-12">
        <div className="col-span-12 lg:col-span-7 place-self-center text-center lg:text-left">
          <h4 className="text-[#323946] text-lg sm:text-xl lg:text-2xl font-semibold mb-2 flex items-center justify-center lg:justify-start">
            Bienvenido a mi Portfolio
            {/* PASO 2: Usamos el nombre correcto del componente */}
            <GiSparkles className="ml-2 text-yellow-500 h-12 w-12" />
          </h4>

          {/* ... el resto de tu código se mantiene exactamente igual ... */}

          <h1 className="overflow-visible text-[#1c1c1c] mb-4 text-5xl sm:text-6xl lg:text-7xl font-extrabold items-center lg:items-start">
            Hola, soy{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-800 to-orange-600">
              David
            </span>
            <span className="text-2xl sm:text-4xl lg:text-5xl text-gray-700 font-semibold -mt-1 inline-block">
              Desarrollador Web Full Stack
              <span className="blinking-cursor inline-block align-middle bg-gray-700 w-1 h-8 sm:h-12 ml-2"></span>
              <FaMousePointer className="inline-block align-middle text-gray-600 text-3xl sm:text-4xl ml-2 transform -rotate-45" />
            </span>
          </h1>
          <p className="text-[#323946] text-base mb-6 sm:text-lg lg:text-xl leading-relaxed">
            Impulsado por el deseo de crecimiento y la búsqueda de nuevas
            oportunidades.
          </p>

          {/* ----- ÁREA DE BOTONES ACTUALIZADA CON EFECTO DE BRILLO ----- */}
          <div>
            {/* ===== BOTÓN CONTACTO (CON EFECTO INVERTIDO) ===== */}
            <Link
              href="#contacto"
              // Clases actualizadas: sin brillo por defecto, con brillo y elevación en hover
              className="add-glow-on-hover inline-block px-6 py-3 rounded-full mr-4 bg-orange-600 text-[#e7e6c4] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
            >
              CONTACTO
            </Link>

            {/* ===== BOTÓN VER CV (MANTIENE EL EFECTO ANTERIOR) ===== */}
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              // Este botón mantiene el brillo constante que se apaga en hover
              className="add-glow-on-hover inline-block px-0.5 py-0.5 rounded-full mt-3 bg-orange-600 text-[#1c1c1c] transition-all duration-300 ease-in-out hover:shadow-none hover:-translate-y-1 hover:scale-105"
            >
              <span className="block bg-[#fff] rounded-full px-5 py-2 transition-all duration-300 ease-in-out hover:bg-transparent hover:text-[#e7e6c4]">
                VER PERFIL LINKEDIN
              </span>
            </a>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-5 flex justify-center items-center p-4 mt-10 lg:mt-0">
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg overflow-hidden">
            <img
              src="/images/profile-image.png"
              alt="Profile Picture"
              className="w-full h-full object-cover"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
