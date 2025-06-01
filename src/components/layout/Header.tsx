'use client'

import Link from 'next/link'
import React, { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-2 px-4 md:py-3 md:px-6" aria-label="Primary Navigation">
        <Link href="/" className="text-2xl font-bold text-indigo-700">
          Brian
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8 text-indigo-700 font-medium">
          <li>
            <Link href="#about" className="hover:text-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded">
              About
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Mobile menu */}
        {menuOpen && (
          <ul className="absolute top-full left-0 right-0 bg-white shadow-md flex flex-col space-y-2 p-4 md:hidden z-50">
            <li>
              <Link
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="block py-2 px-3 rounded hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="block py-2 px-3 rounded hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block py-2 px-3 rounded hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Contact
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  )
}
