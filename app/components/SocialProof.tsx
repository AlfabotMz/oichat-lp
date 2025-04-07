'use client'

import React from 'react'

type Testimonial = {
  id: number
  name: string
  company: string
  role: string
  content: string
  image: string
}

export function SocialProof() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Marcos Silva',
      company: 'TechSolutions',
      role: 'CEO',
      content: 'Desde que implementamos o OiChat, nosso tempo de resposta diminuiu de horas para segundos. Aumentamos nossa taxa de conversão em 40% e agora conseguimos focar em tarefas mais estratégicas para o negócio.',
      image: '/avatar-1.png'
    },
    {
      id: 2,
      name: 'Juliana Costa',
      company: 'E-commerce Express',
      role: 'Diretora de Marketing',
      content: 'O atendimento automatizado do OiChat transformou completamente nosso relacionamento com clientes. Recebemos diversos elogios sobre a rapidez e qualidade das respostas. É impressionante como a IA consegue ser tão humanizada!',
      image: '/avatar-2.png'
    },
    {
      id: 3,
      name: 'Carlos Mendes',
      company: 'Agência Digital',
      role: 'Gerente de Operações',
      content: 'Reduzimos nossos custos operacionais em mais de 60% com o OiChat. O mais incrível é que a qualidade do atendimento não só se manteve como melhorou significativamente.',
      image: '/avatar-3.png'
    }
  ]

  return (
    <section className="py-24 bg-dark-900 relative overflow-hidden">
      {/* Elementos de fundo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full bg-accent-purple/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full bg-accent-blue/10 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            O que nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-blue">clientes</span> dizem
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Empresas de todos os tamanhos estão economizando tempo e dinheiro com o OiChat
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-dark-800/50 rounded-3xl backdrop-blur-sm border border-white/5 p-8 relative overflow-hidden group transition-all duration-300 hover:shadow-xl hover:shadow-accent-purple/5 flex flex-col"
            >
              <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-accent-purple/0 via-accent-purple to-accent-purple/0 opacity-70 transform transition-transform group-hover:scale-x-110 duration-500"></div>
              
              {/* Aspas decorativas */}
              <svg className="absolute top-8 right-8 w-16 h-16 text-accent-purple/10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              
              <p className="text-gray-300 italic mb-8 relative z-10">{testimonial.content}</p>
              
              <div className="mt-auto flex items-center">
                <div className="w-12 h-12 bg-dark-700 rounded-full overflow-hidden flex items-center justify-center">
                  <div className="text-white text-lg font-bold">{testimonial.name.charAt(0)}</div>
                </div>
                <div className="ml-4">
                  <p className="text-white font-medium">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-gradient-to-br from-dark-800/80 to-dark-800/40 rounded-3xl backdrop-blur-sm border border-white/5 p-8 lg:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-accent-purple/0 via-accent-purple to-accent-purple/0 opacity-70"></div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-blue mb-2">500+</p>
              <p className="text-gray-300">clientes satisfeitos</p>
            </div>
            <div className="text-center">
              <p className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-blue mb-2">98%</p>
              <p className="text-gray-300">taxa de retenção</p>
            </div>
            <div className="text-center">
              <p className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-blue mb-2">5M+</p>
              <p className="text-gray-300">mensagens processadas</p>
            </div>
            <div className="text-center">
              <p className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-blue mb-2">70%</p>
              <p className="text-gray-300">economia média</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 