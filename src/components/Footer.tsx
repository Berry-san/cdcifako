import React from 'react'
import logo from '../assets/images/logo.png'
import pin from '../assets/icons/pin.svg'
import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import phone from '../assets/icons/phone.svg'
import mail from '../assets/icons/mail.svg'

const Footer: React.FC = () => {
  return (
    <footer className="text-white bg-dark-blue ">
      <div className="grid grid-cols-1 gap-5 px-8 py-20 mx-auto sm:px-20 md:grid-cols-2 max-w-screen-2xl">
        <section className="space-y-4">
          <div>
            {/* Replacing next/image with standard img */}
            <img alt="logo" src={logo} width={100} height={50} />
          </div>
          <p className="font-bold">Best CDC in Lagos, Year 2023</p>
          <p className="flex space-x-2">
            {/* Replacing next/image with standard img */}
            <img alt="pin" src={pin} width={20} height={20} />
            <span>Ifako-Ijaiye, Lagos state, Nigeria.</span>
          </p>
        </section>
        <section className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="">
            <h3 className="mb-2 mr-5 text-lg font-bold">Useful Links</h3>
            <ul className="list-disc">
              <li>About Us</li>
              <li>News and Highlights</li>
              <li>Gallery</li>
              <li>Send a message</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="mb-2 text-lg font-bold">Contact Us</h3>
            <div className="flex space-x-5">
              <img src={facebook} className="w-5 h-5" alt="facebook" />
              <img src={instagram} className="w-5 h-5" alt="instagram" />
              <img src={mail} className="w-5 h-5" alt="mail" />
            </div>
            <div className="flex items-center mt-4 space-x-5">
              <img src={phone} className="w-5 h-5" alt="" />
              <div className="">
                <p className="">+2348107151496</p>
                <p className="">+2347063777618</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="py-3 text-center text-white border-t border-gray-500">
        <p>
          <span className="font-bold">&copy;</span> 2024 Ifako-Ijaiye CDC
        </p>
      </div>
    </footer>
  )
}

export default Footer
