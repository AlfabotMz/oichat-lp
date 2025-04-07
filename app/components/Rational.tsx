'use client'

import React from 'react'

export function Rational() {
  return (
    <section className="py-24 bg-dark-900 relative overflow-hidden">
      {/* Elementos de fundo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-40 top-40 w-80 h-80 rounded-full bg-accent-blue/10 blur-3xl"></div>
        <div className="absolute -left-40 -bottom-20 w-80 h-80 rounded-full bg-accent-purple/10 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Resposta <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-blue">humanizada</span> vs. chatbot comum
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Veja a diferença entre uma resposta de chatbot comum e a do OiChat
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-stretch">
          {/* Chatbot Comum */}
          <div className="bg-dark-800/50 rounded-3xl backdrop-blur-sm border border-white/5 p-8 lg:p-10 relative overflow-hidden group transition-all duration-300 hover:shadow-xl">
            <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-gray-500/0 via-gray-500 to-gray-500/0 opacity-70"></div>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Chatbot Comum</h3>
            
            <div className="bg-dark-900/70 rounded-2xl p-4 border border-white/5">
              {/* Header do Chat */}
              <div className="flex items-center p-2 border-b border-white/5 pb-4">
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                <div className="ml-3">
                  <p className="text-white text-sm font-medium">Atendente Bot</p>
                  <p className="text-gray-400 text-xs">Online</p>
                </div>
              </div>
              
              {/* Mensagens */}
              <div className="py-4 space-y-4">
                {/* Mensagem do usuário */}
                <div className="flex justify-end">
                  <div className="bg-gray-700 rounded-lg p-3 max-w-xs">
                    <p className="text-white text-sm">Olá, gostaria de saber como funciona a integração com meu sistema atual?</p>
                  </div>
                </div>
                
                {/* Mensagem do bot */}
                <div className="flex justify-start">
                  <div className="bg-gray-800 rounded-lg p-3 max-w-xs">
                    <p className="text-white text-sm">Bem-vindo ao nosso serviço de atendimento! Oferecemos uma série de soluções para integração, incluindo API REST, Webhooks, SDK JavaScript, PHP, Python, integração direta via plugin, módulo para plataformas como WordPress, Magento, Shopify, WooCommerce, VTEX, além de documentação completa, suporte técnico especializado, tutoriais e workshops para implementação. Gostaria de receber mais informações ou agendar uma demonstração técnica com nosso time?</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-gray-400 text-center text-sm">
              <p>Respostas longas e genéricas</p>
              <p>Sobrecarga de informações</p>
              <p>Experiência impessoal e robótica</p>
            </div>
          </div>

          {/* OiChat */}
          <div className="bg-gradient-to-br from-dark-800/80 to-dark-800/40 rounded-3xl backdrop-blur-sm border border-white/5 p-8 lg:p-10 relative overflow-hidden group transition-all duration-300 hover:shadow-xl hover:shadow-accent-purple/10">
            <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-accent-purple/0 via-accent-purple to-accent-purple/0 opacity-70"></div>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">OiChat</h3>
            
            <div className="bg-dark-900/70 rounded-2xl p-4 border border-white/5">
              {/* Header do Chat */}
              <div className="flex items-center p-2 border-b border-white/5 pb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-accent-purple to-accent-blue rounded-full"></div>
                <div className="ml-3">
                  <p className="text-white text-sm font-medium">Atendente OiChat</p>
                  <p className="text-gray-400 text-xs">Online</p>
                </div>
              </div>
              
              {/* Mensagens */}
              <div className="py-4 space-y-4">
                {/* Mensagem do usuário */}
                <div className="flex justify-end">
                  <div className="bg-gradient-to-r from-accent-purple/30 to-accent-blue/30 rounded-lg p-3 max-w-xs">
                    <p className="text-white text-sm">Olá, gostaria de saber como funciona a integração com meu sistema atual?</p>
                  </div>
                </div>
                
                {/* Mensagens do OiChat */}
                <div className="flex justify-start">
                  <div className="bg-gradient-to-r from-accent-purple/20 to-accent-blue/20 rounded-lg p-3 max-w-xs">
                    <p className="text-white text-sm">Olá! Claro, posso te explicar sobre nossas integrações. 😊</p>
                  </div>
                </div>
                
                <div className="flex justify-start">
                  <div className="bg-gradient-to-r from-accent-purple/20 to-accent-blue/20 rounded-lg p-3 max-w-xs">
                    <p className="text-white text-sm">Primeiro, que sistema você utiliza atualmente?</p>
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="bg-gradient-to-r from-accent-purple/20 to-accent-blue/20 rounded-lg p-3 max-w-xs">
                    <p className="text-white text-sm">Temos integrações prontas para as principais plataformas do mercado, e também oferecemos uma API simples para sistemas customizados.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-gray-300 text-center text-sm">
              <p>Respostas curtas e conversacionais</p>
              <p>Engajamento com perguntas relevantes</p>
              <p>Experiência humanizada e personalizada</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-accent-purple to-accent-blue text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-accent-purple/20">
            Quero Demonstração Grátis
          </button>
        </div>
      </div>
    </section>
  )
} 