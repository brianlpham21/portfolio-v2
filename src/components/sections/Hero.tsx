// src/components/sections/Hero.tsx

import React from 'react'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 text-white px-4 sm:px-8"
      aria-label="Introduction and overview"
    >
      <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 drop-shadow-lg">
        Hi, I'm <span className="text-yellow-300">[Your Name]</span>
      </h1>
      <p className="max-w-xl text-lg sm:text-xl mb-8 drop-shadow-md">
        I’m a Frontend Developer specializing in building accessible, performant, and beautiful web experiences.
      </p>
      <a
        href="#projects"
        className="inline-block bg-yellow-300 text-indigo-900 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-500 focus:ring-opacity-75 transition"
      >
        See My Work
      </a>
    </section>
  )
}
