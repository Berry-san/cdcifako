import React, { useState } from 'react'
import CarouselCard from './CarouselCard'

interface Article {
  id: number
  title: string
  description: string
  imageUrl: string
  readMoreLink: string
}

interface CarouselProps {
  articles: Article[]
}

const Carousel: React.FC<CarouselProps> = ({ articles }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Set the card width and the number of visible cards
  const cardWidth = 300 // Fixed width for each card
  const visibleCards = 4 // Number of visible cards in the view

  // Swipe detection states
  const [touchStartX, setTouchStartX] = useState<number | null>(null)
  const [touchEndX, setTouchEndX] = useState<number | null>(null)

  // Minimum swipe distance to trigger navigation
  const minSwipeDistance = 50

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? articles.length - visibleCards : prevIndex - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === articles.length - visibleCards ? 0 : prevIndex + 1
    )
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return

    const swipeDistance = touchStartX - touchEndX

    // If swipe is greater than the minimum distance, trigger navigation
    if (swipeDistance > minSwipeDistance) {
      // Swipe left: Next
      handleNext()
    } else if (swipeDistance < -minSwipeDistance) {
      // Swipe right: Previous
      handlePrev()
    }

    // Reset touch start and end
    setTouchStartX(null)
    setTouchEndX(null)
  }

  return (
    <div
      className="relative w-full p-6 mx-auto max-w-7xl"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Carousel container with overflow hidden */}
      <div className="overflow-hidden">
        {/* Flex container for the cards */}
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}
        >
          {articles.map((article) => (
            <div
              key={article.id}
              className="flex-shrink-0 p-2"
              style={{ width: `${cardWidth}px` }} // Fixed width for each card
            >
              <CarouselCard
                title={article.title}
                description={article.description}
                imageUrl={article.imageUrl}
                readMoreLink={article.readMoreLink}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center mt-4">
        <button
          onClick={handlePrev}
          className="p-2 mx-2 bg-gray-300 rounded-full hover:bg-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="p-2 mx-2 bg-gray-300 rounded-full hover:bg-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Carousel
