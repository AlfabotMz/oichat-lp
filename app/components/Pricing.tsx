'use client'

import React from 'react'

export function Pricing() {
  const features = [
    'CRM Integrado',
    'Atendente Personalizada',
    'Controle de Dados',
    'Suporte 24/7',
    'Respostas Automáticas',
    'Análise de Conversas',
    'Relatórios Detalhados',
    'Integração com APIs',
    'Backup em Nuvem',
    'Treinamento Incluído'
  ]

  return (
    <section className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Comece a automatizar seu atendimento hoje
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Tudo que você precisa para transformar seu atendimento no WhatsApp
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-gradient-to-br from-dark-800 to-dark-700 rounded-3xl p-2">
            <div className="bg-dark-800 rounded-2xl p-8">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-white">Plano Profissional</h3>
                  <p className="text-gray-300 mt-2">Ideal para empresas em crescimento</p>
                </div>
                <div className="text-right">
                  <p className="text-4xl font-bold text-white">R$ 97</p>
                  <p className="text-gray-300">/mês</p>
                </div>
              </div>

              <div className="mt-8">
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-accent-purple mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <button className="w-full bg-gradient-to-r from-accent-purple to-accent-blue text-white py-4 px-8 rounded-xl text-lg font-medium hover:opacity-90 transition shadow-lg hover:shadow-accent-purple/20">
                  Começar Agora
                </button>
                <p className="text-center text-gray-400 mt-4 text-sm">
                  Teste grátis por 7 dias, sem compromisso
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 