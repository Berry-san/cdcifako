const policeStations = [
  {
    sn: 1,
    station: 'Area G',
    address: 'Ogba Area G Police command, Aguda, Ojodu',
    phone: '08037097297',
  },
  {
    sn: 2,
    station: 'Red House',
    address: 'Iju Police Divisional HQ, Government Office.',
    phone: '08037256778',
  },
  {
    sn: 3,
    station: 'NPF',
    address: 'Agbado Road, Ifako - Ijaiye, Lagos.',
    phone: '07039210134',
  },
]
const PoliceStations = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <h2 className="mb-10 text-3xl font-bold text-center">
        Police Stations around Ifako - Ijaiye CDC
      </h2>
      <div className="w-full overflow-x-auto">
        <table className="max-w-3xl mx-auto bg-white divide-y rounded">
          <thead className="divide-y">
            <tr className="divide-x">
              <th className="px-4 py-2">S/N</th>
              <th className="px-4 py-2">POLICE STATION</th>
              <th className="px-4 py-2">ADDRESS</th>
              <th className="px-4 py-2">PHONE NUMBER</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {policeStations.map((station) => (
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

export default PoliceStations
