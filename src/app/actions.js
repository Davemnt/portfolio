// src/app/actions.js

"use server";

import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData) => {
  const name = formData.get('name');
  const senderEmail = formData.get('email');
  const message = formData.get('message');

  if (!name || !senderEmail || !message) {
    return { error: 'Por favor, completa todos los campos.' };
  }

  try {
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'monte.david@outlook.com',
      subject: `Nuevo mensaje de tu Portfolio de: ${name}`,
      reply_to: senderEmail,
      // --- INICIO DEL BLOQUE CORREGIDO ---
      html: `
        <h3>Nuevo Mensaje del Portfolio</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${senderEmail}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `, // <-- ¡ACENTO GRAVE Y COMA AÑADIDOS Y CÓDIGO HTML LIMPIADO!
      // --- FIN DEL BLOQUE CORREGIDO ---
    });

    return { success: '¡Mensaje enviado con éxito!' };

  } catch (error) {
    console.error("Error al enviar email:", error);
    return { error: 'Hubo un error en el servidor.' };
  }
};