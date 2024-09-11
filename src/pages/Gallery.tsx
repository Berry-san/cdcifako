import React, { useState } from 'react'

const Gallery: React.FC = () => {
  // State type is inferred as 'string'
  const [activeTab, setActiveTab] = useState<'events' | 'projects'>('events')

  // Type for the images array is string[]
  const eventsImages: string[] = [
    '/images/event1.jpg',
    '/images/event2.jpg',
    '/images/event3.jpg',
    '/images/event4.jpg',
    '/images/event5.jpg',
    '/images/event6.jpg',
  ]

  const projectsImages: string[] = [
    '/images/project1.jpg',
    '/images/project2.jpg',
    '/images/project3.jpg',
    '/images/project4.jpg',
    '/images/project5.jpg',
  ]

  // Function to assign column spans for Events (6-4-2-2-4 pattern)
  const getEventGridClasses = (index: number): string => {
    const pattern = [
      'col-span-6', // 1st image spans 6 columns
      'col-span-4', // 2nd image spans 4 columns
      'col-span-2', // 3rd image spans 2 columns
      'col-span-2', // 4th image spans 2 columns
      'col-span-4', // 5th image spans 4 columns
    ]
    return `${pattern[index % 5]} h-64 overflow-hidden rounded-lg shadow-lg`
  }

  // Function to assign column spans for Projects (4-2-2-4 pattern)
  const getProjectGridClasses = (index: number): string => {
    const pattern = [
      'col-span-4', // 1st image spans 4 columns
      'col-span-2', // 2nd image spans 2 columns
      'col-span-2', // 3rd image spans 2 columns
      'col-span-4', // 4th image spans 4 columns
    ]
    return `${pattern[index % 4]} h-64 overflow-hidden rounded-lg shadow-lg`
  }

  return (
    <div className="w-full px-8 py-20 mx-auto max-w-screen-2xl sm:px-10 lg:px-20">
      {/* Title */}
      <h2 className="mb-8 text-4xl font-bold text-center">
        Here’s what we’ve been up to in pictures
      </h2>

      {/* Tabs for Events and Projects */}
      <div className="flex justify-center mb-8 space-x-6">
        <button
          className={`px-4 py-2 text-lg font-semibold ${
            activeTab === 'events'
              ? 'text-dark-green border-b-2 border-dark-green'
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('events')}
        >
          Events
        </button>
        <button
          className={`px-4 py-2 text-lg font-semibold ${
            activeTab === 'projects'
              ? 'text-dark-green border-b-2 border-dark-green'
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('projects')}
        >
          Projects
        </button>
      </div>

      {/* Images Section */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
        {activeTab === 'events' &&
          eventsImages.map((image, index) => (
            <div key={index} className={getEventGridClasses(index)}>
              <div className="object-cover w-full h-full transition-transform duration-300 hover:scale-105 bg-slate-600"></div>
              {/* Uncomment if you have actual images */}
              {/* <img
                src={image}
                alt={`Event ${index + 1}`}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
              /> */}
            </div>
          ))}

        {activeTab === 'projects' &&
          projectsImages.map((image, index) => (
            <div key={index} className={getProjectGridClasses(index)}>
              <div className="object-cover w-full h-full transition-transform duration-300 hover:scale-105 bg-slate-600"></div>
              {/* Uncomment if you have actual images */}
              {/* <img
                src={image}
                alt={`Project ${index + 1}`}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
              /> */}
            </div>
          ))}
      </div>
    </div>
  )
}

export default Gallery
