import { useState } from 'react'
import Modal from '../components/Modal'
import { Link } from 'react-router-dom'
const FindYourCDA = () => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div className="flex flex-col items-center justify-center w-full px-8 py-20 mx-auto max-w-screen-2xl sm:px-10 lg:px-20">
      <h2 className="max-w-5xl text-5xl font-bold text-center">
        Find your Community Development Association
      </h2>
      <div className="w-full max-w-xl p-8 my-10 bg-white rounded-lg shadow-lg">
        <form>
          {/* CDA Input */}
          <label className="block mb-2 font-medium" htmlFor="cda">
            Residential Address
          </label>
          <input
            id="cda"
            type="text"
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none"
            placeholder="Enter your CDA"
          />

          {/* Report Option Dropdown */}
          <label className="block mb-2 font-medium" htmlFor="report-type">
            Select your Local Area
          </label>
          <select
            id="report-type"
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none"
          >
            <option value="">Select an option</option>
            <option value="issue1">Ifako Forum</option>
            <option value="issue2">Iju Forum</option>
            <option value="issue3">Obawole Forum</option>
            <option value="issue3">Ogba Forum</option>
          </select>

          {/* Submit Button */}
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault()
              setIsVisible(true)
            }}
            className="w-full px-4 py-2 font-bold text-white transition-all duration-300 rounded-lg bg-dark-green hover:bg-green-700"
          >
            Submit
          </button>
        </form>
      </div>
      <Modal isVisible={isVisible} onClose={() => setIsVisible(false)}>
        <div className="flex flex-col items-center justify-center px-10 py-10 space-y-5 md:px-20">
          <h3 className="text-4xl">
            Your CDA is <span className="font-bold">Mega CDA</span>
          </h3>
          <p>Click on the button to view details about your CDA</p>
          <Link
            to="/cda/mega-cda"
            className="px-4 py-2 font-bold text-white rounded-lg bg-dark-green hover:bg-green-700"
          >
            View Details
          </Link>
        </div>
      </Modal>
    </div>
  )
}

export default FindYourCDA
