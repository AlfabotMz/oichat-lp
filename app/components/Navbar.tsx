'use client'

import React, { useState } from 'react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-dark-900/80 backdrop-blur-md z-50 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-blue">OiChat</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <a href="#" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
              Home
            </a>
            <a href="#beneficios" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
              Benefícios
            </a>
            <a 
              href="https://sour-spring-78c.notion.site/1ce921d51ee48032ba4de677ebc28cec?pvs=105"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-accent-purple to-accent-blue text-white px-6 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity shadow-lg shadow-accent-purple/20"
            >
              Quero Demonstração Grátis
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-dark-800 focus:outline-none transition-colors"
            >
              <span className="sr-only">Abrir menu principal</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-dark-900/95 backdrop-blur-md border-b border-white/5">
            <a
              href="#"
              className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium transition-colors"
            >
              Home
            </a>
            <a
              href="#beneficios"
              className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium transition-colors"
            >
              Benefícios
            </a>
            <div className="px-3 py-3">
              <a 
                href="https://sour-spring-78c.notion.site/1ce921d51ee48032ba4de677ebc28cec?pvs=105"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-accent-purple to-accent-blue text-white px-6 py-3 rounded-full text-base font-medium hover:opacity-90 transition-opacity shadow-lg shadow-accent-purple/20 text-center"
              >
                Quero Demonstração Grátis
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
} 