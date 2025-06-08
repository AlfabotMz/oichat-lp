'use client'

import React from 'react'
import { WhatsAppSVG } from './WhatsAppSVG'

export function Hero() {
  return (
    <section className="relative min-h-screen bg-dark-900 overflow-hidden pt-24 sm:pt-28">
      {/* Elementos de fundo */}
      <div className="absolute inset-0">
        {/* Estrelas pequenas */}
        <div className="absolute h-full w-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i} 
              className={`absolute w-1 h-1 bg-white rounded-full animate-pulse-slow`}
              style={{ 
                top: `${Math.random() * 100}%`, 
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`
              }}
            />
          ))}
        </div>
        
        {/* Estrela cadente */}
        <div 
          className="absolute w-[2px] h-[80px] bg-gradient-to-b from-accent-blue to-transparent rotate-[30deg]"
          style={{
            top: '20%',
            left: '70%',
            boxShadow: '0 0 10px rgba(59, 130, 246, 0.6)',
            animation: 'meteor 8s linear infinite'
          }}
        />
        
        {/* Gradientes de fundo */}
        <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-accent-purple/10 blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 rounded-full bg-accent-blue/10 blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-accent-purple/10 to-accent-blue/10 opacity-60"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Responda até 500 leads por dia de forma{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-blue">
              automática, rápida e humanizada
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 px-4">
            Instale uma atendente no WhatsApp e deixe que ela faça o trabalho chato de maneira 100% automática.
          </p>
          <a 
            href="https://oichatform.alfabot.icu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-accent-purple to-accent-blue text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-accent-purple/20 mb-8 sm:mb-12"
          >
            Quero Demonstração Grátis
          </a>
          
          {/* SVG do WhatsApp */}
          <div className="mx-auto max-w-[280px] sm:max-w-xs relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/20 to-accent-blue/20 rounded-3xl blur-3xl"></div>
            <div className="relative">
              <WhatsAppSVG />
            </div>
          </div>
        </div>
      </div>
      
      {/* Estilo para a animação de meteoro */}
      <style jsx>{`
        @keyframes meteor {
          0% {
            transform: translateY(-100px) translateX(-100px) rotate(30deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          20% {
            opacity: 0;
          }
          100% {
            transform: translateY(calc(100vh)) translateX(calc(100vw)) rotate(30deg);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  )
} 