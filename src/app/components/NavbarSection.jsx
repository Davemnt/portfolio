"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../translations';
import { FaGlobe } from 'react-icons/fa';

// Get nav links based on language
const getNavLinks = (t) => [
  { href: "#home", label: t.nav.home },
  { href: "#sobre-mi", label: t.nav.about },
  { href: "#estudios", label: t.nav.studies },
  { href: "#portfolio", label: t.nav.portfolio },
  { href: "#contacto", label: t.nav.contact },
];

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const observer = useRef(null);
  
  const t = getTranslation(language);

  useEffect(() => {
    // Creamos una instancia del Intersection Observer
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Si una sección está en la vista, actualizamos el estado del enlace activo
          setActiveLink(`#${entry.target.id}`);
        }
      });
    }, { 
      rootMargin: "-50% 0px -50% 0px" // Activa el enlace cuando la sección está en el centro de la pantalla
    });

    // Empezamos a observar cada una de las secciones que tienen un id
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => {
      if (observer.current) {
        observer.current.observe(section);
      }
    });

    // Función de limpieza: dejamos de observar cuando el componente se desmonta
    return () => {
      if (observer.current) {
        sections.forEach((section) => {
          observer.current.unobserve(section);
        });
      }
    };
  }, []); // El array vacío asegura que este efecto se ejecute solo una vez

  // Tu función para el menú móvil (se mantiene igual)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    // Cerramos el menú móvil al hacer clic en un enlace
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white p-4 shadow-md sticky top-0 z-50 mt-6">
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        {/* Logo Section (sin cambios) */}
        <div className="flex items-center flex-shrink-0 mr-6">
          <img
            src="images/logo.png"
            alt="Tu Logo"
            className="h-20 w-auto filter drop-shadow-[1px_1px_7px_rgba(250,61,59,1)]" 
            // 2px_2px_8px_rgba(0,0,0,1)
          />
        </div>

        {/* Hamburger Menu Button (sin cambios) */}
        <div className="block lg:hidden ml-auto">
          <button onClick={toggleMenu} className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-gray-800 focus:outline-none">
            <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full lg:flex lg:items-center lg:w-auto`}>
          <div className="text-md lg:flex-grow flex flex-col lg:flex-row lg:justify-center items-center lg:items-center mt-4 lg:mt-0">
            {getNavLinks(t).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className={`block w-full text-center py-2 lg:inline-block lg:w-auto mx-4 text-lg font-medium transition duration-300
                  ${activeLink === link.href 
                    ? 'text-orange-600'
                    : 'text-[#323946] hover:text-[#ff232a]'
                  }`
                }
              >
                {link.label}
              </Link>
            ))}
            
            {/* Language Switcher */}
            <div className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-lg">
              <FaGlobe className="text-gray-600 text-sm mx-1" />
              <button
                onClick={() => language !== 'es' && toggleLanguage()}
                className={`px-2 py-1 rounded ${
                  language === 'es'
                    ? 'bg-orange-600 text-white font-medium'
                    : 'text-gray-600 hover:bg-gray-200'
                } transition-colors duration-300`}
              >
                ES
              </button>
              <span className="text-gray-300">|</span>
              <button
                onClick={() => language !== 'en' && toggleLanguage()}
                className={`px-2 py-1 rounded ${
                  language === 'en'
                    ? 'bg-orange-600 text-white font-medium'
                    : 'text-gray-600 hover:bg-gray-200'
                } transition-colors duration-300`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;