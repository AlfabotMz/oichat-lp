'use client'

import React from 'react'

export function WhatsAppSVG() {
  return (
    <svg width="100%" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Container principal */}
      <rect width="400" height="400" rx="20" fill="#111111" />
      
      {/* Header */}
      <rect width="400" height="70" rx="20" fill="#075E54" />
      <circle cx="50" cy="35" r="20" fill="#404040" />
      <text x="85" y="40" fontFamily="Arial" fontSize="18" fontWeight="bold" fill="white">Atendente Virtual</text>
      <text x="85" y="60" fontFamily="Arial" fontSize="12" fill="#E0E0E0">Online</text>
      
      {/* Ícones do header */}
      <circle cx="340" cy="35" r="15" fill="#075E5400" stroke="#FFFFFF50" strokeWidth="1.5" />
      <path d="M340 28 L340 42 M333 35 L347 35" stroke="white" strokeWidth="1.5" />
      <circle cx="375" cy="35" r="15" fill="#075E5400" stroke="#FFFFFF50" strokeWidth="1.5" />
      <path d="M368 35 L382 35 M375 28 L375 42" stroke="white" strokeWidth="1.5" />

      {/* Fundo das mensagens */}
      <rect y="70" width="400" height="270" fill="#0E1621" />
      
      {/* Data */}
      <rect x="150" y="90" width="100" height="20" rx="10" fill="#222C38" />
      <text x="200" y="105" fontFamily="Arial" fontSize="12" fill="#8696A0" textAnchor="middle">HOJE</text>
      
      {/* Mensagem do usuário */}
      <g transform="translate(80, 130)">
        <rect x="0" y="0" width="280" height="60" rx="10" fill="#1E2D3A" />
        <text x="20" y="30" fontFamily="Arial" fontSize="15" fill="white">
          Quanto tempo economizas para mim?
        </text>
        <text x="250" y="50" fontFamily="Arial" fontSize="12" fill="#8696A0" textAnchor="end">
          14:32
        </text>
        <circle cx="265" cy="45" r="8" fill="#25D366" />
        <path d="M260 45 L264 49 L270 42" stroke="white" strokeWidth="1.5" />
      </g>

      {/* Mensagens do bot */}
      <g transform="translate(40, 210)">
        <rect x="0" y="0" width="280" height="70" rx="10" fill="#075E54" />
        <text x="20" y="25" fontFamily="Arial" fontSize="15" fill="white">
          Eu economizo até 5h por dia de 
        </text>
        <text x="20" y="50" fontFamily="Arial" fontSize="15" fill="white">
          mensagens respondidas.
        </text>
        <text x="250" y="60" fontFamily="Arial" fontSize="12" fill="#8696A0" textAnchor="end">
          14:33
        </text>
      </g>

      <g transform="translate(40, 300)">
        <rect x="0" y="0" width="280" height="70" rx="10" fill="#075E54" />
        <text x="20" y="25" fontFamily="Arial" fontSize="15" fill="white">
          Isso equivale a 25h por semana ou
        </text>
        <text x="20" y="50" fontFamily="Arial" fontSize="15" fill="white">
          100h por mês de produtividade extra!
        </text>
        <text x="250" y="60" fontFamily="Arial" fontSize="12" fill="#8696A0" textAnchor="end">
          14:33
        </text>
      </g>

      {/* Área de digitação */}
      <rect y="340" width="400" height="60" fill="#1F2C38" />
      <rect x="20" y="350" width="300" height="40" rx="20" fill="#2A3942" />
      <text x="50" y="375" fontFamily="Arial" fontSize="14" fill="#8696A0">Digite uma mensagem...</text>
      
      {/* Ícone de enviar */}
      <circle cx="360" cy="370" r="20" fill="#25D366" />
      <path d="M350 370 L370 370 M360 360 L370 370 L360 380" stroke="white" strokeWidth="2" />
    </svg>
  )
} 