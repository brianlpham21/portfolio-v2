import React from 'react'

type WorkExperience = {
  company: string
  role: string
  startDate: string
  endDate: string | 'Present'
  description: string
  location?: string
}

const workTimeline: WorkExperience[] = [
  {
    company: 'EFFI',
    role: 'Frontend Engineer',
    startDate: 'Jan 2023',
    endDate: 'Present',
    description: 'Developed scalable React and Next.js applications focusing on performance and accessibility.',
    location: 'Remote',
  },
  {
    company: 'Kahani',
    role: 'Frontend Developer',
    startDate: 'Jun 2021',
    endDate: 'Dec 2022',
    description: 'Collaborated on UI improvements and built reusable React components with TypeScript.',
    location: 'New York, NY',
  },
    {
    company: 'Socialive',
    role: 'Frontend Developer',
    startDate: 'Jun 2021',
    endDate: 'Dec 2022',
    description: 'Collaborated on UI improvements and built reusable React components with TypeScript.',
    location: 'New York, NY',
  },
    {
    company: 'MyMedicareBot LLC',
    role: 'Frontend Developer',
    startDate: 'Jun 2021',
    endDate: 'Dec 2022',
    description: 'Collaborated on UI improvements and built reusable React components with TypeScript.',
    location: 'New York, NY',
  },
]

const WorkTimeline = () => {
  return (
    <section id="experience" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Experience
        </h2>

        <div className="relative border-l-2 border-indigo-500 dark:border-indigo-400 ml-4">
          {workTimeline.map(({ company, role, startDate, endDate, description, location }, idx) => (
            <div key={idx} className="mb-10 ml-6">
              {/* Dot */}
              <span className="absolute -left-4 top-2 w-4 h-4 bg-indigo-600 dark:bg-indigo-400 rounded-full border-2 border-white dark:border-gray-900"></span>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {role} <span className="text-indigo-600 dark:text-indigo-400">@ {company}</span>
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {startDate} — {endDate} {location && `• ${location}`}
                </p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkTimeline
