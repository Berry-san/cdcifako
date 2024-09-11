import image1 from '../assets/images/person-1.png'
import image2 from '../assets/images/person-2.png'
import image3 from '../assets/images/person-3.png'
import image4 from '../assets/images/person-4.png'
import image5 from '../assets/images/person-5.png'
import image6 from '../assets/images/person-6.png'
import image7 from '../assets/images/person-7.png'
import image8 from '../assets/images/person-8.png'
import image9 from '../assets/images/person-9.png'
import image10 from '../assets/images/person-10.png'
import image11 from '../assets/images/person-11.png'
import image12 from '../assets/images/person-12.png'

interface CDCExecutive {
  sn: number
  name: string
  position: string
  phone: string
  img: string
}

const cdcExecutives: CDCExecutive[] = [
  {
    sn: 1,
    name: 'Past Samuel Olu Opajobi',
    position: 'Chairman',
    phone: '08022367794',
    img: image1,
  },
  {
    sn: 2,
    name: 'Otunba Daniel Osude',
    position: 'Vice Chairman 1',
    phone: '08053387810',
    img: image2,
  },
  {
    sn: 3,
    name: 'Alhaji L.A. Azeez',
    position: 'Vice Chairman 2',
    phone: '08023051363',
    img: image3,
  },
  {
    sn: 4,
    name: 'Alhaji Abbas Bisiriyu',
    position: 'Gen Secretary',
    phone: '08036454310',
    img: image4,
  },
  {
    sn: 5,
    name: 'Alh. Engr Adewole Lamina',
    position: 'Asst. General Secretary',
    phone: '08031056454',
    img: image5,
  },
  {
    sn: 6,
    name: 'Chief Engr Adewole Lawal',
    position: 'Treasurer',
    phone: '08023455043',
    img: image6,
  },
  {
    sn: 7,
    name: 'Ezekiel Adebowale Aremu',
    position: 'Financial Secretary',
    phone: '08035088158',
    img: image12,
  },
  {
    sn: 8,
    name: 'Engr. S.O. Olatunde',
    position: 'P.R.O',
    phone: '08105404612',
    img: image11,
  },
  {
    sn: 9,
    name: 'Primate Osunmo David',
    position: 'Social Secretary',
    phone: '08039677165',
    img: '',
  },
  {
    sn: 10,
    name: 'Mr Oladiran Rufus',
    position: 'Auditor',
    phone: '08032056491',
    img: image7,
  },
  {
    sn: 11,
    name: 'Akinjo Amaka Adeleye',
    position: 'Social Welfare Officer',
    phone: '08038527579',
    img: image8,
  },
  {
    sn: 12,
    name: 'Alhaja Wasiat Qasim',
    position: 'Ex - Officio 1',
    phone: '08029194640',
    img: image9,
  },
  {
    sn: 13,
    name: 'Ven Lawrence Ogunlade',
    position: 'Ex - Officio 2',
    phone: '07036476110',
    img: image10,
  },
  {
    sn: 14,
    name: 'Mrs Irene Agunloye',
    position: 'Ex - Officio 3',
    phone: '08029731543',
    img: '',
  },
  {
    sn: 15,
    name: 'Prince F.M Ogaji',
    position: 'Ex - Officio 4',
    phone: '08108577442',
    img: '',
  },
]

const CDCExecutives = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full px-8 py-20 mx-auto overflow-x-auto max-w-screen-2xl sm:px-10 lg:px-20">
      <h2 className="text-4xl font-bold">CDC EXECUTIVE</h2>
      <p className="my-5 text-xl">
        Details you should Know about your CDC Executives
      </p>
      <div className="flex items-center justify-center w-full overflow-x-auto">
        <table className="max-w-3xl bg-white divide-y rounded">
          <thead className="divide-y">
            <tr className="divide-x">
              <th className="px-4 pb-2 pt-7">S/N</th>
              <th className="px-4 pb-2 pt-7">Name</th>
              <th className="px-4 pb-2 pt-7">Position</th>
              <th className="px-4 pb-2 pt-7">Phone Number</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {cdcExecutives.map((exec) => (
              <tr key={exec.sn} className="divide-x hover:bg-gray-100">
                <td className="px-4 py-2 text-center">{exec.sn}</td>
                <td className="flex items-center px-4 py-2 space-x-2">
                  {/* <img
                  src={exec.img}
                  alt={exec.name}
                  className="object-cover w-10 h-10 rounded-full"
                /> */}
                  {exec.img ? (
                    <img
                      src={exec.img}
                      alt={exec.name}
                      className="object-cover rounded w-14 h-14"
                    />
                  ) : (
                    <div className="rounded w-14 h-14 bg-slate-300"></div>
                  )}

                  <span>{exec.name}</span>
                </td>
                <td className="px-4 py-2 text-center">{exec.position}</td>
                <td className="px-4 py-2 text-center">{exec.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CDCExecutives
