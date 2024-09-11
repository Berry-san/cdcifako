import pastor from '../assets/images/pastor.png'

const Chairman = () => {
  return (
    <section className="w-full max-w-screen-2xl mx-auto px-8 sm:px-10 lg:px-20 py-20">
      <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
        <div className="">
          <h3 className="mb-5 text-3xl font-bold">Meet the Chairman</h3>
          <div className={`font-actor`}>
            <p className={`text-lg`}>
              Pastor Samuel Olu Opajobi is an icon of community activism,
              renowned for his exceptional leadership style. Currently serving
              as the Chairman of the Ifako-Ijaiye Community Development
              Committee (CDC), he has been the driving force behind the
              successes and development trajectory of community work in the
              Ifako-Ijaiye Local Government. Since assuming his position as
              Chairman.
            </p>
            <p className="mt-4 text-lg">
              Pastor Opajobi has blazed the trail with groundbreaking
              achievements, choosing the path of objectivity, selflessness,
              innovation, teamwork, transparency, and mission-oriented policies.
              These qualities have made him and his team the first CDC team to
              deliver significant projects and continuously win accolades, which
              are both unprecedented and mind-blowing.
            </p>
          </div>
        </div>
        <div className="relative w-full max-w-xl pt-10 pb-3 mx-auto">
          {/* Green Background */}
          <div className="absolute w-full h-32 rounded-lg md:h-64 top-7 md:top-5 left-3 md:left-7 bg-dark-green"></div>

          {/* Map Image */}
          <img
            src={pastor}
            alt="pastor"
            className="relative z-10 w-full h-auto rounded-lg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

export default Chairman
