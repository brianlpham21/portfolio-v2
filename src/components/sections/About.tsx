import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-5xl grid md:grid-cols-2 gap-10 items-center">
        {/* Profile Image */}
        <div className="flex justify-center md:justify-start">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg">
            <Image
              src="/profile.jpg" // Replace with your image path
              alt="Your name"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </div>

        {/* About Text */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            I’m a frontend developer with a passion for crafting accessible, performant, and visually engaging user experiences. With experience in technologies like React, Next.js, and Tailwind CSS, I enjoy turning complex problems into clean, maintainable code.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Outside of coding, I love exploring design trends, learning about accessibility best practices, and occasionally hitting the golf course or traveling. I’m always eager to collaborate and grow.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
