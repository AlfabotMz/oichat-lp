'use client'

import React from 'react'

export function Emotional() {
  const benefits = {
    before: [
      'Horas respondendo mensagens repetitivas',
      'Estresse com clientes impacientes',
      'Perda de leads por demora no atendimento',
      'Custos elevados com equipe de suporte',
      'Respostas inconsistentes',
      'Tempo desperdiçado com tarefas repetitivas'
    ],
    after: [
      'Respostas automáticas 24/7',
      'Clientes satisfeitos com respostas rápidas',
      'Mais tempo para tarefas importantes',
      'Economia de até 70% em custos operacionais',
      'Respostas precisas e personalizadas',
      'Atendimento escalável'
    ]
  }

  return (
    <section id="beneficios" className="py-24 bg-dark-900 relative overflow-hidden">
      {/* Elementos de fundo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-24 w-64 h-64 rounded-full bg-accent-purple/10 blur-3xl"></div>
        <div className="absolute right-1/4 bottom-24 w-64 h-64 rounded-full bg-accent-blue/10 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            De estressado a tranquilo em questão de dias
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Veja como o OiChat pode transformar seu dia a dia no atendimento
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-stretch max-w-5xl mx-auto">
          {/* Antes */}
          <div className="bg-dark-800/50 rounded-3xl backdrop-blur-sm border border-white/5 p-8 lg:p-10 relative overflow-hidden group transition-all duration-300 hover:shadow-xl hover:shadow-red-500/5">
            <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-red-500/0 via-red-500 to-red-500/0 opacity-70"></div>
            <div className="flex flex-col h-full">
              <div className="mb-8 flex items-center justify-center">
                <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                    <path d="M8 15C8 15 9.5 17 12 17C14.5 17 16 15 16 15" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="9" y1="9" x2="9" y2="9" strokeWidth="3" strokeLinecap="round"/>
                    <line x1="15" y1="9" x2="15" y2="9" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Sem OiChat</h3>
              <ul className="space-y-4 flex-grow">
                {benefits.before.map((benefit, index) => (
                  <li key={index} className="flex items-start text-gray-300 group-hover:text-gray-100 transition-colors">
                    <svg className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Depois */}
          <div className="bg-gradient-to-br from-dark-800/80 to-dark-800/40 rounded-3xl backdrop-blur-sm border border-white/5 p-8 lg:p-10 relative overflow-hidden group transition-all duration-300 hover:shadow-xl hover:shadow-accent-purple/5">
            <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-accent-purple/0 via-accent-purple to-accent-purple/0 opacity-70"></div>
            <div className="flex flex-col h-full">
              <div className="mb-8 flex items-center justify-center">
                <div className="w-20 h-20 bg-accent-purple/10 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-accent-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                    <path d="M8 13C8 13 9.5 15 12 15C14.5 15 16 13 16 13" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="9" cy="9" r="1" fill="currentColor"/>
                    <circle cx="15" cy="9" r="1" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Com OiChat</h3>
              <ul className="space-y-4 flex-grow">
                {benefits.after.map((benefit, index) => (
                  <li key={index} className="flex items-start text-gray-300 group-hover:text-gray-100 transition-colors">
                    <svg className="w-5 h-5 text-accent-purple mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
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