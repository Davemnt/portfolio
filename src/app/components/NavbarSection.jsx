"use client"; // Esta directiva es necesaria para usar hooks de React

// PASO 1: Importaciones adicionales que necesitaremos
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link'; // Es mejor usar el Link de Next.js

// PASO 2: Centralizamos los enlaces en un array para un código más limpio
const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#sobre-mi", label: "Sobre mi" },
  { href: "#estudios", label: "Formación" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contacto", label: "Contacto" },
];

const Navbar = () => {
  // Tu estado actual para el menú móvil (se mantiene igual)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // PASO 3: Añadimos el estado y la lógica para el resaltado por scroll
  const [activeLink, setActiveLink] = useState("#home"); // Estado para el enlace activo
  const observer = useRef(null); // Usamos useRef para mantener la instancia del observer

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
            src="/images/dm_logo.png"
            alt="Tu Logo"
            className="h-12 w-auto filter drop-shadow-[1px_1px_7px_rgba(250,61,59,1)]"
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
            
            {/* PASO 4: Renderizamos los enlaces dinámicamente */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick} // PASO 5: Cerramos el menú al hacer clic
                // Aplicamos clases condicionalmente para el resaltado
                className={`block w-full text-center py-2 lg:inline-block lg:w-auto mx-4 text-lg font-medium transition duration-300
                  ${activeLink === link.href 
                    ? 'text-orange-600' // Tu clase para el estado activo
                    : 'text-[#323946] hover:text-[#ff232a]' // Tus clases para el estado normal
                  }`
                }
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;