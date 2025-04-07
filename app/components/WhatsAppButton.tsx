'use client'

import React from 'react'

export function WhatsAppButton() {
  const phoneNumber = '258872204494'
  const message = 'Olá! Gostaria de saber mais sobre o OiChat.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 w-12 h-12 sm:w-16 sm:h-16 bg-whatsapp-green rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
      aria-label="Contato via WhatsApp"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        className="w-6 h-6 sm:w-8 sm:h-8 text-white fill-current"
      >
        <path 
          d="M.057 24l1.687-6.163A11.867 11.867 0 01.11 12C.11 5.4 5.498 0 12.05 0 18.6 0 23.95 5.4 23.95 12c0 6.6-5.35 12-11.9 12-1.993 0-3.95-.5-5.688-1.44L.058 24zM12.05 1.8C6.48 1.8 1.9 6.4 1.9 12c0 1.8.457 3.55 1.33 5.1L2.097 21.8l4.766-1.253A9.913 9.913 0 0012.05 22.2c5.567 0 10.1-4.55 10.1-10.2 0-5.65-4.533-10.2-10.1-10.2zM18.5 14.4c-.266-.383-1.665-.963-1.93-.963-.266 0-.383.15-.766.53-.232.32-.96.92-1.192 1.063-.116.075-.225.112-.335.112a1.15 1.15 0 01-.47-.236c-.35-.188-.745-.348-1.17-.55-1.8-.836-2.998-2.795-3.082-2.925-.084-.13-.832-1.11-.832-2.11 0-1.01.516-1.5.7-1.7.183-.2.4-.25.532-.25.132 0 .265.002.383.006.116.005.272-.046.427.326.16.38.54 1.303.588 1.397.048.095.08.208.017.332-.064.125-.113.215-.212.34l-.32.377c-.104.12-.207.25-.09.478.12.226.54.997 1.156 1.616.796.795 1.468 1.043 1.677 1.162.21.12.33.1.45-.05.12-.15.516-.608.653-.817.137-.207.276-.172.465-.104.19.07 1.2.565 1.407.668.207.103.346.156.395.245.048.09.048.8-.118 1.57z" 
        />
      </svg>
    </a>
  )
} 