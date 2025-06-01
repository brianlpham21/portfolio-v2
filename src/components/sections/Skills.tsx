import React from 'react'

type Skill = {
  name: string
  icon?: React.ReactNode // Optional: add icons or SVG here if you want
}

const skills: Skill[] = [
  { name: 'React' },
  { name: 'Next.js' },
  { name: 'TypeScript' },
  { name: 'Tailwind CSS' },
  { name: 'Redux' },
  { name: 'Git' },
  { name: 'HTML5' },
  { name: 'CSS3' },
  { name: 'JavaScript' },
  { name: 'Jest' },
  // Add more skills as needed
]

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Skills & Technologies</h2>

        <ul className="flex flex-wrap gap-4">
          {skills.map(({ name, icon }, idx) => (
            <li
              key={idx}
              className="flex items-center space-x-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 rounded-full px-4 py-2 text-sm font-semibold select-none"
              aria-label={name}
              title={name}
            >
              {icon && <span>{icon}</span>}
              <span>{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills
