import React from 'react'
import chairman from '../assets/images/chairman.png'
import vice from '../assets/images/vice.png'
import sec from '..//assets/images/sec.png'
import superImg from '../assets/images/super.png'
import hod from '../assets/images/hod.png'

// Define the type for each executive
interface Executive {
  name: string
  title: string
  img: string // The path to the image, in React we just use string for image paths
}

const executives: Executive[] = [
  {
    name: 'Prince Usman Akanbi Hamzat',
    title: 'Executive Chairman',
    img: chairman,
  },
  {
    name: 'Hon. Mrs Toyin Akerele',
    title: 'Vice Chairman',
    img: vice,
  },
  {
    name: 'Hon. Kolawole Fatusi',
    title: 'Secretary to the Local Government',
    img: sec,
  },
  {
    name: 'Hon. Akeem Yekini',
    title: 'Super for Agric and Social Services',
    img: superImg,
  },
  {
    name: 'Mrs. Oyafunke Omolabake',
    title: 'HOD - Agric and Social Service',
    img: hod,
  },
]

// Define the component using React.FC
const LGExecutives: React.FC = () => {
  return (
    <section className="w-full px-8 py-20 mx-auto text-center max-w-screen-2xl sm:px-10 lg:px-20">
      <h2 className="text-4xl font-bold">LG EXECUTIVE</h2>
      <p className="mt-5 text-xl">
        Details you should know about your LG Executives
      </p>
      <div className="grid grid-cols-1 gap-10 mt-10 md:grid-cols-2 lg:grid-cols-3">
        {executives.map((exec, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            {/* Standard <img> for each executive */}
            <img
              src={exec.img}
              alt={exec.name}
              className="object-cover w-full h-72"
            />
            <div className="w-full py-3 bg-white">
              <h3 className="text-xl font-bold">{exec.name}</h3>
              <p className="text-gray-600">{exec.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default LGExecutives
