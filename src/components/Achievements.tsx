import multi from '../assets/images/multi.png'

const Achievements = () => {
  return (
    <section className="w-full px-8 py-20 mx-auto max-w-screen-2xl sm:px-10 lg:px-20">
      <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
        <div className="">
          <div className="mb-5">
            <h3 className="text-3xl font-bold">Our Achievements so far</h3>
            <div className="w-56 h-2 mt-1 bg-dark-green"></div>
          </div>

          <ol className={`font-actor list-decimal space-y-5 text-xl`}>
            <li>
              Maintaining a cordial relationship with the local government to
              foster grassroots development.
            </li>
            <li>
              Facilitating a platform to resolve issues at the CDA level and
              escalating them to the appropriate government agencies if needed.
            </li>
            <li>
              Winning the coveted position of Public Relations Officer of the
              LSCDAC at the state level, currently held by the CDC Chairman.
            </li>
            <li>
              Continuously constructing the CDC multipurpose hall.5.
              Facilitating the distribution of food palliatives and other social
              benefits from the government to the people.
            </li>
            <li>
              Resolving conflicts arising from community activities and programs
              among the CDAs.
            </li>
            <li>
              Organizing special prayers to seek divine intervention for
              important community affairs.
            </li>
            <li>
              Ensuring effective communication and control of all the CDAs in
              Ifako-Ijaiye.
            </li>
            <li>
              Coordinating and supervising community projects capable of winning
              awards at the state level.
            </li>
          </ol>
        </div>
        <div className="relative w-full max-w-xl pt-10 pb-3 mx-auto">
          {/* Green Background */}
          <div className="absolute w-full h-32 rounded-lg md:h-64 top-7 md:top-5 left-3 md:left-7 bg-dark-green"></div>

          {/* Map Image */}
          <img
            src={multi}
            alt="pastor"
            className="relative z-10 w-full h-auto rounded-lg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

export default Achievements
