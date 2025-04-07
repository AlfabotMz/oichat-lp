'use client'

import React from 'react'

export function Offer() {
  const benefits = [
    {
      title: 'Aumento de produtividade',
      description: 'Libere sua equipe para tarefas estratégicas enquanto a IA cuida do atendimento básico',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Atendimento 24/7',
      description: 'Seus clientes recebem respostas a qualquer hora, mesmo quando sua equipe não está disponível',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Redução de custos',
      description: 'Economize até 70% nos custos de atendimento ao cliente com nossa solução automatizada',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Integração com WhatsApp',
      description: 'Conecte facilmente ao WhatsApp Business API sem necessidade de conhecimentos técnicos',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Personalização avançada',
      description: 'Treine seu assistente virtual com o tom e linguagem que melhor representa sua marca',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    },
    {
      title: 'Análises detalhadas',
      description: 'Acompanhe o desempenho com relatórios detalhados e métricas em tempo real',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ]

  return (
    <section className="py-24 bg-dark-900 relative overflow-hidden">
      {/* Elementos de fundo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-40 top-20 w-80 h-80 rounded-full bg-accent-purple/10 blur-3xl"></div>
        <div className="absolute -right-40 bottom-40 w-80 h-80 rounded-full bg-accent-blue/10 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Tudo o que você precisa para um atendimento
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-blue"> perfeito</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transforme seu atendimento no WhatsApp com recursos exclusivos
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-3xl backdrop-blur-sm border border-white/5 p-8 lg:p-10 relative overflow-hidden shadow-2xl shadow-accent-purple/5">
          <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-accent-purple/0 via-accent-purple to-accent-purple/0 opacity-70"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-dark-900/40 rounded-2xl p-6 backdrop-blur-sm border border-white/5 transition-all duration-300 hover:bg-gradient-to-br hover:from-dark-800/80 hover:to-dark-800/40 group">
                <div className="bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-accent-purple group-hover:from-accent-purple/30 group-hover:to-accent-blue/30 transition-all duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="bg-gradient-to-r from-accent-purple to-accent-blue text-white px-6 py-3 rounded-full text-base font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-accent-purple/20">
              Quero Demonstração Grátis
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 