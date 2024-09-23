// CarouselCard.tsx
import React from 'react'

interface CarouselCardProps {
  title: string
  description: string
  imageUrl: string
  readMoreLink: string
}

const CarouselCard: React.FC<CarouselCardProps> = ({
  title,
  description,
  imageUrl,
  readMoreLink,
}) => {
  return (
    <div className="h-full bg-white rounded-lg shadow-lg">
      <img
        src={imageUrl}
        alt={title}
        className="object-cover w-full h-48 rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600">{description}</p>
        <a
          href={readMoreLink}
          className="inline-flex items-center mt-4 text-green-500"
        >
          Read More{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 12h14M12 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default CarouselCard
