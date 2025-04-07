'use client'

import React from 'react'
import Image from 'next/image'

export function WhatsAppChat() {
  return (
    <div className="w-[300px] sm:w-[350px] bg-dark-800 rounded-2xl shadow-xl overflow-hidden mx-auto">
      {/* Header */}
      <div className="bg-whatsapp-dark text-white p-4">
        <div className="flex items-center space-x-3">
          <div className="relative w-10 h-10">
            <Image
              src="/avatar.png"
              alt="Avatar"
              fill
              className="rounded-full object-cover"
            />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-whatsapp-green rounded-full border-2 border-whatsapp-dark"></div>
          </div>
          <div>
            <h3 className="font-medium">Atendente Virtual</h3>
            <p className="text-sm opacity-90">Online agora</p>
          </div>
        </div>
      </div>

      {/* Chat */}
      <div className="bg-[#0F1A2A] p-4 h-[400px] overflow-y-auto space-y-4">
        {/* Mensagem do bot */}
        <div className="flex justify-start">
          <div className="bg-dark-700 rounded-lg p-3 max-w-[80%] shadow-sm">
            <p className="text-white">Olá! Como posso ajudar?</p>
            <p className="text-xs text-gray-400 mt-1">10:30</p>
          </div>
        </div>

        {/* Mensagem do usuário */}
        <div className="flex justify-end">
          <div className="bg-whatsapp-dark rounded-lg p-3 max-w-[80%] shadow-sm">
            <p className="text-white">Gostaria de saber mais sobre os planos</p>
            <p className="text-xs text-gray-400 mt-1">10:31</p>
          </div>
        </div>

        {/* Mensagem do bot */}
        <div className="flex justify-start">
          <div className="bg-dark-700 rounded-lg p-3 max-w-[80%] shadow-sm">
            <p className="text-white">Claro! Temos planos a partir de R$ 97/mês com:</p>
            <ul className="list-disc ml-4 mt-2 space-y-1 text-white">
              <li>Atendimento 24/7</li>
              <li>Respostas personalizadas</li>
              <li>Integração com CRM</li>
              <li>Suporte prioritário</li>
            </ul>
            <p className="text-xs text-gray-400 mt-1">10:31</p>
          </div>
        </div>
      </div>

      {/* Input */}
      <div className="bg-dark-800 p-4 flex items-center space-x-3">
        <div className="flex-1 bg-dark-700 rounded-full px-4 py-2 flex items-center">
          <input
            type="text"
            placeholder="Digite uma mensagem"
            className="bg-transparent w-full focus:outline-none text-white placeholder-gray-400"
          />
        </div>
        <button className="w-10 h-10 bg-whatsapp-green rounded-full flex items-center justify-center text-white">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </button>
      </div>
    </div>
  )
} 