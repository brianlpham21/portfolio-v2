import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-indigo-900 text-indigo-200 py-2 mt-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Brian. All rights reserved.</p>
        <div className="mt-2 flex justify-center space-x-6">
          <a
            href="https://github.com/brianlpham21"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/blpham/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded"
          >
            LinkedIn
          </a>
          <a
            href="mailto:brianlpham21@gmail.com"
            className="hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
