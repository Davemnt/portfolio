"use client";

import React, { useState, useRef } from 'react';

import { motion } from "framer-motion";
import { sendEmail } from '@/app/actions';

const ContactSection = () => {
  const [status, setStatus] = useState(null);
  const formRef = useRef(null);

  

  const handleFormSubmit = async (formData) => {
    setStatus({ type: 'info', message: 'Enviando...' });
    const result = await sendEmail(formData);
    if (result.error) {
      setStatus({ type: 'error', message: result.error });
    } else {
      setStatus({ type: 'success', message: result.success });
      formRef.current?.reset();
    }
  };

  return (
    <motion.section
      id="contacto"
      className="py-20 sm:py-24 md:py-32 bg-slate-100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* --- Título y subtítulo con tipografía responsiva --- */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800">
            Ponte en <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">Contacto</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mt-4 max-w-3xl mx-auto">
            ¡Me encantaría saber de ti! Ya sea para proyectos, colaboraciones o simplemente para saludar, no dudes en enviarme un mensaje.
          </p>
        </div>

        {/* --- Estructura principal de dos columnas --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* --- COLUMNA IZQUIERDA: IMAGEN --- */}
          <motion.div
            className="flex justify-center" // Centra la imagen en su columna
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Contenedor de imagen con tamaño responsivo */}
            <div className="overflow-hidden">
              <img
                src="/images/mail.png"
                alt="Contáctame"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </motion.div>

          {/* --- COLUMNA DERECHA: FORMULARIO --- */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Formulario con padding responsivo */}
            <form ref={formRef} action={handleFormSubmit} className="bg-white p-6 sm:p-8 rounded-lg shadow-xl w-full">
              <div className="mb-5">
                <label htmlFor="name" className="block text-slate-700 font-medium mb-2">Nombre</label>
                <input type="text" id="name" name="name" required className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-orange-500 focus:border-orange-500 transition text-black"/>
              </div>
              <div className="mb-5">
                <label htmlFor="email" className="block text-slate-700 font-medium mb-2">Mail</label>
                <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-orange-500 focus:border-orange-500 transition text-black"/>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-slate-700 font-medium mb-2">Mensaje</label>
                <textarea id="message" name="message" rows="5" required className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-orange-500 focus:border-orange-500 transition text-black"></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="w-full px-8 py-3 bg-orange-600 text-white rounded-md text-lg font-semibold shadow-md hover:bg-orange-700 transition duration-300 disabled:bg-slate-400" disabled={status?.type === 'info'}>
                  {status?.type === 'info' ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
              </div>
              {status && (
                <p className={`text-center font-semibold mt-4 ${
                  status.type === 'success' ? 'text-green-600' :
                  status.type === 'error' ? 'text-red-600' : 'text-gray-600'
                }`}>
                  {status.message}
                </p>
              )}
            </form>
          </motion.div>
        </div>

        {/* --- SECCIÓN DE REDES SOCIALES (AÑADIDA) --- */}
        

      </div>
    </motion.section>
  );
};

export default ContactSection;