import React, { useState, useEffect } from 'react'
import Carousel from '../components/Carousel'

const News = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slidesToShow, setSlidesToShow] = useState(4) // Default to 4 slides on desktop

  // Dummy data for the cards
  const articles = [
    {
      id: 1,
      title: 'Ifako-Ijaiye CDC convenes crucial emergency Security Meeting.',
      description:
        'The leadership of the Ifako-Ijaiye Community Development Committee (CDC), chaired by Pastor Samuel Opajobi, convened a crucial security meeting to address emerging concerns.',
      imageUrl: 'https://via.placeholder.com/400',
      readMoreLink: '#',
    },
    {
      id: 2,
      title: 'Ifako-Ijaiye CDC Receives Much Anticipated "Ounje Eko"',
      description:
        'Ounje Eko is the food palliative programme initiated by the Lagos State Government, designed to distribute staple foods to vulnerable residents of Lagos.',
      imageUrl: 'https://via.placeholder.com/400',
      readMoreLink: '#',
    },
    {
      id: 3,
      title: 'Reject ill-fated Protest - CDC Chairman warns',
      description:
        'CDC Chairman urges the members of the public to embrace peace and engage in productive dialogue instead of ill-fated protests.',
      imageUrl: 'https://via.placeholder.com/400',
      readMoreLink: '#',
    },
    {
      id: 3,
      title: 'Reject ill-fated Protest - CDC Chairman warns',
      description:
        'CDC Chairman urges the members of the public to embrace peace and engage in productive dialogue instead of ill-fated protests.',
      imageUrl: 'https://via.placeholder.com/400',
      readMoreLink: '#',
    },
    {
      id: 3,
      title: 'Reject ill-fated Protest - CDC Chairman warns',
      description:
        'CDC Chairman urges the members of the public to embrace peace and engage in productive dialogue instead of ill-fated protests.',
      imageUrl: 'https://via.placeholder.com/400',
      readMoreLink: '#',
    },
    {
      id: 3,
      title: 'Reject ill-fated Protest - CDC Chairman warns',
      description:
        'CDC Chairman urges the members of the public to embrace peace and engage in productive dialogue instead of ill-fated protests.',
      imageUrl: 'https://via.placeholder.com/400',
      readMoreLink: '#',
    },
    {
      id: 3,
      title: 'Reject ill-fated Protest - CDC Chairman warns',
      description:
        'CDC Chairman urges the members of the public to embrace peace and engage in productive dialogue instead of ill-fated protests.',
      imageUrl: 'https://via.placeholder.com/400',
      readMoreLink: '#',
    },
    {
      id: 3,
      title: 'Reject ill-fated Protest - CDC Chairman warns',
      description:
        'CDC Chairman urges the members of the public to embrace peace and engage in productive dialogue instead of ill-fated protests.',
      imageUrl: 'https://via.placeholder.com/400',
      readMoreLink: '#',
    },
    {
      id: 3,
      title: 'Reject ill-fated Protest - CDC Chairman warns',
      description:
        'CDC Chairman urges the members of the public to embrace peace and engage in productive dialogue instead of ill-fated protests.',
      imageUrl: 'https://via.placeholder.com/400',
      readMoreLink: '#',
    },
  ]

  return (
    <div className="w-full px-5 py-10">
      <div className="text-center">
        <h2 className="text-3xl font-bold">What’s Happening?</h2>
        <p className="mt-2 text-lg">
          Check out news and highlights of happenings in Ifako - Ijaiye CDC
        </p>
      </div>

      {/* Cards */}
      <div className="relative mt-8">
        <Carousel articles={articles} />
      </div>
    </div>
  )
}

export default News
