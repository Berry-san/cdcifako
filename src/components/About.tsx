import mapImg from '../assets/images/mapImg.png'

const About = () => {
  return (
    <section className="w-full max-w-screen-2xl mx-auto px-8 sm:px-10 lg:px-20 py-20">
      <div className="mb-10">
        <h2 className="text-4xl font-bold">
          What You should Know about our CDC
        </h2>
        <div className="hidden w-56 h-2 mt-2 xl:flex bg-dark-green"></div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-7 mx-auto">
        <div className="relative w-full max-w-xl pt-10 pb-3 mx-auto">
          {/* Green Background */}
          <div className="absolute w-full h-32 rounded-lg md:h-64 top-7 md:top-5 left-3 md:left-7 bg-dark-green"></div>

          {/* Map Image */}
          <img
            src={mapImg}
            alt="Map"
            className="relative z-10 w-full h-auto rounded-lg"
            loading="lazy"
          />
        </div>
        <div className="max-w-2xl">
          <h3 className="pt-5 text-xl font-bold">
            A brief history about Ifako - Ijaiye CDC
          </h3>
          <div className={`font-actor`}>
            <p className={`text-lg mt-4`}>
              {' '}
              Before now, members of the Community Development Associations in
              Ifako and Iju areas used to attend the CDC meeting in Agege LGA
              until the creation of Ifako-Ijaiye in 1997. There were just three
              CDAs in Ifako and Iju, respectively. Iju area had Iju Ogundimu,
              Iju Railway, and Iju Ishaga, while Ifako had Ifako Forum,
              Arogangan, and Idi-Agbon
            </p>
            <p className="mt-2 text-xl">
              It was indeed a breakthrough for Ifako-Ijaiye CDC when the local
              government was created. It ended the unnecessary rigour of
              attending meetings and other activities outside the LGA.
            </p>
          </div>
        </div>
      </div>
      <article className={`font-actor text-xl`}>
        Meanwhile, it was the members of the CDAs who facilitated the setting up
        of the local government secretariat by mobilizing people from different
        communities to support the government in revenue generation and other
        essential services. However, there was a need to populate the CDC, which
        informed the creation of additional CDAs. The pioneer principal officers
        were:
        <ul>
          <li>- Chief I.A. Lawal as Chairman</li>
          <li>- Chief Felix Usalo as Vice Chairman</li>
          <li>- M.L. Adedo </li>
          <li>- Ven. Lawrence Ogunsipe.</li>
        </ul>
        The Ifako-Ijaiye CDC, under the chairmanship of Pastor Samuel Olumuyiwa
        Opajobi, has achieved significant accomplishments, ranking it as a
        formidable CDC among the 57 CDCs in Lagos State. In 2023, Ifako-Ijaiye
        CDC emerged as the best-performing CDC in Lagos, as one of its CDAs
        (CRWERA CDA) was awarded the best CDA in Lagos—a feat that was
        unprecedented in the history of the CDC.
      </article>
    </section>
  )
}

export default About
