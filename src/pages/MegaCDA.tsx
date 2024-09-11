import React from 'react'
import chairmanImg from '../assets/images/img-1.png'
import secretaryImg from '../assets/images/img-3.png'
import treasurerImg from '../assets/images/img-2.png'

const cdaMembers = [
  {
    sn: 1,
    name: 'Alhaji Abeshin',
    position: 'Chairman',
    phone: '08107151496',
    img: chairmanImg,
  },
  {
    sn: 2,
    name: 'Adekunle Balogun',
    position: 'Secretary',
    phone: '07063777618',
    img: secretaryImg,
  },
  {
    sn: 3,
    name: 'Alhaji Bilesanmi',
    position: 'Treasurer',
    phone: '08148363410',
    img: treasurerImg,
  },
  {
    sn: 4,
    name: 'Secretariat',
    position: '30, Mojisola Street, Off Oyemekun Street, Ifako-Ijaiye',
    phone: '', // No phone, so we merge the columns for position
    isAddressRow: true, // New field to handle column merging for address rows
  },
  {
    sn: 5,
    name: 'Meeting Date',
    position: 'Every Second Tuesday of the month at the secretariat',
    phone: '', // No phone, so we merge the columns for position
    isAddressRow: true, // New field to handle column merging for address rows
  },
]

const MegaCDA = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full px-8 py-20 mx-auto max-w-screen-2xl sm:px-10 lg:px-20">
      <h2 className="mb-2 text-4xl font-bold text-center">Mega CDA</h2>
      <p className="text-xl text-center mb-7">
        Details you should Know about your CDA
      </p>
      <div className="w-full mx-auto overflow-x-auto">
        <table className="max-w-3xl mx-auto bg-white divide-y rounded-lg shadow-lg">
          <thead className="divide-y">
            <tr className="divide-x">
              <th className="px-6 py-3 text-sm font-semibold text-center text-gray-700 whitespace-nowrap">
                S/N
              </th>
              <th className="px-6 py-3 text-sm font-semibold text-center text-gray-700 whitespace-nowrap">
                NAME
              </th>
              <th className="px-6 py-3 text-sm font-semibold text-center text-gray-700 whitespace-nowrap">
                POSITION
              </th>
              <th className="px-6 py-3 text-sm font-semibold text-center text-gray-700 whitespace-nowrap">
                PHONE NUMBER
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {cdaMembers.map((member) => (
              <tr key={member.sn} className="divide-x hover:bg-gray-100">
                {/* Check if it's an address row */}
                {member.isAddressRow ? (
                  <>
                    <td className="px-6 py-4 text-center whitespace-nowrap">
                      {member.sn}
                    </td>
                    <td className="px-6 py-4 text-center whitespace-nowrap">
                      {member.name}
                    </td>
                    {/* Merge the position (address or meeting date) into two columns */}
                    <td colSpan={2} className="px-10 py-4 text-center md:px-20">
                      {member.position}
                    </td>
                  </>
                ) : (
                  <>
                    <td className="px-6 py-4 text-center whitespace-nowrap">
                      {member.sn}
                    </td>
                    <td className="flex items-center py-4 pl-6 pr-16 space-x-4 text-center whitespace-nowrap">
                      {member.img && (
                        <img
                          src={member.img}
                          alt={member.name}
                          className="object-cover w-10 h-10 rounded-md"
                        />
                      )}
                      <span>{member.name}</span>
                    </td>
                    <td className="px-6 py-4 text-center whitespace-nowrap">
                      {member.position}
                    </td>
                    <td className="px-6 py-4 text-center whitespace-nowrap">
                      {member.phone || '-'}
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MegaCDA
