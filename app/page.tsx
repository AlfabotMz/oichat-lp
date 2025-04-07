'use client'

import React from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Emotional } from './components/Emotional'
import { Rational } from './components/Rational'
import { Offer } from './components/Offer'
import { Footer } from './components/Footer'

export default function Home() {
  return (
    <main className="bg-dark-900">
      <Navbar />
      <Hero />
      <Emotional />
      <Rational />
      <Offer />
      <Footer />
    </main>
  )
} 