import React from 'react'

const ReportComplaint = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full px-8 py-20 mx-auto max-w-screen-2xl sm:px-10 lg:px-20">
      <h2 className="max-w-5xl text-5xl font-bold text-center">
        You’re here because you’ll like to report a complaint
      </h2>
      <div className="w-full max-w-xl p-8 my-10 bg-white rounded-lg shadow-lg">
        <form>
          {/* Phone Number Input */}
          <label className="block mb-2 font-medium" htmlFor="phone">
            Phone Number
          </label>
          <div className="flex items-center py-1 overflow-hidden border rounded-lg">
            {/* Prefix */}
            <span className="px-3 py-1 text-gray-700 border-r">+234</span>
            {/* Input Field */}
            <input
              type="tel"
              className="flex-1 px-4 py-1 focus:outline-none "
              placeholder="Enter your phone number"
            />
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

          {/* Residential Address Input */}
          <label className="block mb-2 font-medium" htmlFor="address">
            What’s your Residential Address?
          </label>
          <input
            id="address"
            type="text"
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none"
            placeholder="Enter your residential address"
          />

          {/* CDA Input */}
          <label className="block mb-2 font-medium" htmlFor="cda">
            Your CDA
          </label>
          <input
            id="cda"
            type="text"
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none"
            placeholder="Enter your CDA"
          />

          {/* Report Option Dropdown */}
          <label className="block mb-2 font-medium" htmlFor="report-type">
            Choose Option of what you’ll like to report
          </label>
          <select
            id="report-type"
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none"
          >
            <option value="">Select an option</option>
            <option value="issue1">Issue 1</option>
            <option value="issue2">Issue 2</option>
            <option value="issue3">Issue 3</option>
          </select>

          {/* Report Textarea */}
          <label className="block mb-2 font-medium" htmlFor="report">
            Write Report
          </label>
          <textarea
            id="report"
            rows={4}
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none"
            placeholder="Enter your report"
          />

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

export default ReportComplaint
