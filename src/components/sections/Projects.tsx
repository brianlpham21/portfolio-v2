import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Project = {
  title: string
  description: string
  image: string
  tech: string[]
  liveUrl?: string
  repoUrl?: string
}

const projects: Project[] = [
  {
    title: 'Dev Portfolio',
    description: 'A personal portfolio site built with Next.js and Tailwind CSS to showcase my work and skills.',
    image: '',
    tech: ['Next.js', 'Tailwind', 'TypeScript'],
    liveUrl: 'https://brianlpham21.github.io/portfolio/',
    repoUrl: 'https://github.com/brianlpham21/portfolio'
  },
  {
    title: 'The Next CRM',
    description: 'A responsive CRM dashboard.',
    image: '',
    tech: ['React', 'API', 'CSS Modules'],
    liveUrl: 'https://brianlpham21.github.io/the-next-crm/',
    repoUrl: 'https://github.com/brianlpham21/the-next-crm'
  },
  // Add more projects as needed
]

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Projects
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              <div className="relative w-full h-48 md:h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300 text-xs font-medium px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-indigo-600 hover:underline dark:text-indigo-400"
                    >
                      Live Site
                    </Link>
                  )}
                  {project.repoUrl && (
                    <Link
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-600 hover:underline dark:text-gray-400"
                    >
                      Code
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
