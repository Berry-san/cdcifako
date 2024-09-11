import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import About from '../components/About'
import Achievements from '../components/Achievements'
import Chairman from '../components/Chairman'
import Constitution from '../components/Constitution'
import FindCDA from '../components/FindCDA'

// Define images array as string[]
const images: string[] = [
  '/images/background1.png',
  '/images/background2.png',
  '/images/background3.png',
  '/images/background4.png',
]

const Home: React.FC = () => {
  // UseState with TypeScript type for currentImageIndex
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 2000) // Change image every 2 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId)
  }, [])

  return (
    <>
      <div className="relative h-[38rem] overflow-hidden px-8">
        {/* Slide wrapper that shifts based on the current image */}
        <div
          className="absolute top-0 left-0 w-full h-full transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentImageIndex * 100}%)`, // Slide effect
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="absolute top-0 left-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage: `url(${image})`,
                left: `${index * 100}%`, // Position each image next to the previous one
              }}
            ></div>
          ))}
        </div>

        {/* Text content on top of the background image */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white">
          <h1 className="max-w-5xl text-5xl font-bold">
            Ifako-Ijaiye Community Development Committee
          </h1>
          <p className="mt-2 text-lg">
            Welcome to Ifako-Ijaiye CDC. The award-winning CDC in Lagos State.
          </p>
          <p className="px-8 mt-2 text-lg font-bold">
            Proudly supported by Prince Usman Akanbi Hamzat - Executive
            Chairman, Ifako-Ijaiye Local Government.
          </p>
          <div className="flex items-center justify-center mt-5 space-x-5">
            <Link
              to="/report-complaint"
              className="px-5 py-4 font-bold text-white rounded-xl bg-dark-green"
            >
              Report a complaint
            </Link>
            <Link
              to="/report-complaint"
              className="px-8 py-4 font-bold text-white border-2 rounded-xl border-dark-green"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <About />
      <Chairman />
      <FindCDA />
      <Achievements />
      <Constitution />
    </>
  )
}

export default Home
