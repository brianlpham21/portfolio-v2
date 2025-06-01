// src/components/sections/Contact.tsx

import React from 'react'

import Button from "@/components/ui/Button";
import ButtonLink from "@/components/ui/ButtonLink";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 text-white px-4 sm:px-8"
      aria-label="Contact Section"
    >
      <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 drop-shadow-lg">
        Contact Section
      </h1>
      <Button>I'm a Button</Button>
        <ButtonLink href="/">I'm a Button Link</ButtonLink>
    </section>
  )
}
