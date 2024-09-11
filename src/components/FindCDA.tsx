import { Link } from 'react-router-dom'

const FindCDA = () => {
  return (
    <div className="bg-light-green text-center flex flex-col items-center justify-center space-y-4 py-10 text-white">
      <h3 className="text-3xl font-bold">Quicky Find your CDA</h3>
      <p className="text-lg">
        Use the Button below to see all CDAs under Ifako -Ijaiye CDC{' '}
      </p>
      <Link
        to={''}
        className="px-5 py-4 font-bold text-white rounded-xl bg-dark-green"
      >
        Download PDF
      </Link>
    </div>
  )
}

export default FindCDA
