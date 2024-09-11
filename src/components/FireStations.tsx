const fireStations = [
  {
    sn: 1,
    station: 'Alausa HQ',
    address: 'Governor Road, The secretariat, Alausa, Ikeja.',
    phone: '08033235891',
  },
  {
    sn: 2,
    station: 'Ikeja',
    address: 'Mobolaji Bank Anthony Way, Ikeja.',
    phone: '08032219746',
  },
  {
    sn: 3,
    station: 'Agege',
    address: 'Abeokuta Express way, Ile -Epo Bus stop, Oke - Odo.',
    phone: '08185704012',
  },
]
const FireStations = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="mb-10 text-3xl font-bold text-center">
        Fire Station around Ifako - Ijaiye CDC
      </h2>
      <div className="w-full overflow-x-auto">
        <table className="max-w-3xl mx-auto bg-white divide-y rounded">
          <thead className="divide-y">
            <tr className="divide-x">
              <th className="px-4 py-2">S/N</th>
              <th className="px-4 py-2">FIRE STATION</th>
              <th className="px-4 py-2">ADDRESS</th>
              <th className="px-4 py-2">PHONE NUMBER</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {fireStations.map((station) => (
              <tr key={station.sn} className="divide-x hover:bg-gray-100">
                <td className="px-4 py-2 text-center">{station.sn}</td>
                <td className="px-4 py-2">{station.station}</td>
                <td className="px-4 py-2 max-w-72">{station.address}</td>
                <td className="px-4 py-2 text-center">{station.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default FireStations
