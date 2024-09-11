interface Executive {
  name: string
  title: string
  img: string // The path to the image, in React we just use string for image paths
}

const executives: Executive[] = [
  {
    name: 'Prince Usman Akanbi Hamzat',
    title: 'Executive Chairman',
    img: '/images/executive1.png', // Update with actual image path
  },
  {
    name: 'Hon. Mrs Toyin Akerele',
    title: 'Vice Chairman',
    img: '/images/executive2.png', // Update with actual image path
  },
  {
    name: 'Hon. Kolawole Fatusi',
    title: 'Secretary to the Local Government',
    img: '/images/executive3.png', // Update with actual image path
  },
  {
    name: 'Hon. Akeem Yekini',
    title: 'Super for Agric and Social Services',
    img: '/images/executive4.png', // Update with actual image path
  },
  {
    name: 'Mrs. Oyafunke Omolabake',
    title: 'HOD - Agric and Social Service',
    img: '/images/executive5.png', // Update with actual image path
  },
]

const PastChairman = () => {
  return (
    <section className="w-full px-8 py-20 mx-auto text-center max-w-screen-2xl sm:px-10 lg:px-20">
      <h2 className="text-4xl font-bold">Past Chairmen</h2>
      <p className="mt-5 text-xl">
        Find past and present chairman for Ifako - Ijaiye CDC{' '}
      </p>
      <div className="grid grid-cols-1 gap-10 mt-10 md:grid-cols-2 lg:grid-cols-3">
        {executives.map((exec, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            {/* <img
              src={exec.img}
              alt={exec.name}
              className="object-cover w-24 h-24 rounded-full"
            /> */}
            <div className="w-full h-52 bg-slate-600"></div>
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

export default PastChairman
