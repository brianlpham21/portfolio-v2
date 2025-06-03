'use client'

import React, { useState } from 'react'
import Button from '@/components/ui/Button'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Replace with actual form submission logic (e.g., API call)
    console.log('Form submitted:', formData)
  }

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 text-white px-4 sm:px-8"
      aria-label="Contact Section"
    >
      <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 drop-shadow-lg">
        Get In Touch
      </h1>

      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4 text-left">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded text-black focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded text-black focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded text-black resize-none focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        <div className="pt-2">
          <Button type="submit">Send Message</Button>
        </div>
      </form>
    </section>
  )
}
