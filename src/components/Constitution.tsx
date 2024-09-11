import React from 'react'

const Constitution = () => {
  return (
    <section className="text-center flex flex-col items-center justify-center space-y-4 pb-10 text-black">
      <h3 className="text-3xl font-bold">Know your constitution</h3>
      <p className="text-lg">Download Constitution in PDF Format</p>
      {/* <Link
        href={''}
        className="px-5 py-4 font-bold text-white rounded-xl bg-dark-green"
      >
        Download PDF
      </Link> */}
      <a
        href="/files/constitution for CDA book.pdf"
        download="Constitution.pdf"
      >
        <button className="px-5 py-4 font-bold text-white rounded-xl bg-dark-green">
          Download File
        </button>
      </a>
    </section>
  )
}

export default Constitution
