import React, { useState } from 'react'

const RegisterCDA: React.FC = () => {
  const [phone, setPhone] = useState('')

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value)
  }
  return (
    <div className="flex flex-col items-center justify-center w-full px-8 py-20 mx-auto max-w-screen-2xl sm:px-10 lg:px-20">
      <h2 className="max-w-5xl text-5xl font-bold text-center">
        Register to join a Community Development Association
      </h2>
      <div className="w-full max-w-xl p-8 my-10 bg-white rounded-lg shadow-lg">
        <form className="w-full">
          {/* First Name and Last Name in two columns */}
          <div className="flex flex-col mb-4 sm:flex-row sm:space-x-4">
            <div className="flex-1">
              <label className="block mb-2 font-medium" htmlFor="first-name">
                First Name
              </label>
              <input
                id="first-name"
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                placeholder="First Name"
              />
            </div>
            <div className="flex-1 mt-4 sm:mt-0">
              <label className="block mb-2 font-medium" htmlFor="last-name">
                Last Name
              </label>
              <input
                id="last-name"
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                placeholder="Last Name"
              />
            </div>
          </div>

          {/* Email Address Input */}
          <label className="block mb-2 font-medium" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none"
            placeholder="Enter your email"
          />

          {/* Phone Number Input */}
          <label className="block mb-2 font-medium" htmlFor="phone">
            Phone Number
          </label>
          <div className="flex items-center py-2 mb-4 overflow-hidden border rounded-lg">
            {/* Prefix */}
            <span className="px-3 py-1 text-gray-700 border-r border-gray-400">
              +234
            </span>
            {/* Input Field */}
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              className="flex-1 px-4 py-1 focus:outline-none"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Select Input */}
          <label className="block mb-2 font-medium" htmlFor="local-area">
            Select your Local Area
          </label>
          <select
            id="local-area"
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
            className="w-full px-4 py-2 font-bold text-white transition-all duration-300 rounded-lg bg-dark-green hover:bg-green-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default RegisterCDA
