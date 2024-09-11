import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import mail from '../assets/icons/mail.svg'
import arrow from '../assets/icons/arrow.svg'
import activeArrow from '../assets/icons/active-arrow.svg'

const Header: React.FC = () => {
  const location = useLocation()
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
  const [desktopActiveSubMenu, setDesktopActiveSubMenu] = useState<
    string | null
  >(null)

  const [mobileMenuState, setMobileMenuState] = useState({
    isOpen: false,
    activeSubMenu: null as string | null,
  })

  const leadershipRef = useRef<HTMLDivElement>(null)
  const cdaRef = useRef<HTMLDivElement>(null)
  const resourcesRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        leadershipRef.current &&
        !leadershipRef.current.contains(event.target as Node) &&
        cdaRef.current &&
        !cdaRef.current.contains(event.target as Node) &&
        resourcesRef.current &&
        !resourcesRef.current.contains(event.target as Node)
      ) {
        setActiveSubMenu(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const linkClasses = (path: string): string => {
    if (path === '/') {
      return location.pathname === '/'
        ? 'text-dark-green font-bold'
        : 'text-gray-700 font-medium'
    }
    return location.pathname.startsWith(path)
      ? 'text-dark-green font-bold'
      : 'text-gray-700 font-medium'
  }

  const getArrowIcon = (path: string) => {
    return location.pathname.startsWith(path) ? activeArrow : arrow
  }

  const toggleMobileMenu = () => {
    setMobileMenuState((prev) => ({ ...prev, isOpen: !prev.isOpen }))
  }

  const closeMobileMenu = () => {
    setMobileMenuState({ isOpen: false, activeSubMenu: null })
  }

  const toggleSubMenu = (menu: string) => {
    setMobileMenuState((prev) => ({
      ...prev,
      activeSubMenu: prev.activeSubMenu === menu ? null : menu,
    }))
  }

  // const DesktopMenu = () => (
  //   <div className="items-center hidden space-x-8 lg:flex">
  //     <Link to="/" className={linkClasses('/')}>
  //       Home
  //     </Link>

  //     {/* Leadership Dropdown */}
  //     <div
  //       ref={leadershipRef}
  //       className="relative flex items-center cursor-pointer"
  //       onClick={() => toggleSubMenu('leadership')}
  //     >
  //       <span className={linkClasses('/leadership')}>Leadership</span>
  //       <img
  //         src={getArrowIcon('/leadership')}
  //         alt="arrow"
  //         className={`ml-2 transform transition-transform duration-300 ${
  //           activeSubMenu === 'leadership' ? 'rotate-180' : ''
  //         }`}
  //         width={12}
  //         height={12}
  //       />
  //       {activeSubMenu === 'leadership' && (
  //         <div className="absolute left-0 z-50 w-48 pt-2 bg-white rounded-lg shadow-md top-full">
  //           <ul className="py-2">
  //             <li>
  //               <Link
  //                 to="/leadership/lg-execs"
  //                 className="block px-4 py-2 hover:bg-black hover:text-white"
  //               >
  //                 LG Executives
  //               </Link>
  //             </li>
  //             <li>
  //               <Link
  //                 to="/leadership/cdc-execs"
  //                 className="block px-4 py-2 hover:bg-black hover:text-white"
  //               >
  //                 CDC Executives
  //               </Link>
  //             </li>
  //             <li>
  //               <Link
  //                 to="/leadership/past-chairmen"
  //                 className="block px-4 py-2 hover:bg-black hover:text-white"
  //               >
  //                 Past Chairmen
  //               </Link>
  //             </li>
  //           </ul>
  //         </div>
  //       )}
  //     </div>

  //     {/* CDAs Dropdown */}
  //     <div
  //       ref={cdaRef}
  //       className="relative flex items-center cursor-pointer"
  //       onClick={() => toggleSubMenu('cda')}
  //     >
  //       <span className={linkClasses('/cda')}>CDAs</span>
  //       <img
  //         src={getArrowIcon('/cda')}
  //         alt="arrow"
  //         className={`ml-2 transform transition-transform duration-300 ${
  //           activeSubMenu === 'cda' ? 'rotate-180' : ''
  //         }`}
  //         width={12}
  //         height={12}
  //       />
  //       {activeSubMenu === 'cda' && (
  //         <div className="absolute left-0 z-50 w-64 pt-2 bg-white rounded-lg shadow-md top-full">
  //           <ul className="py-2">
  //             <li>
  //               <Link
  //                 to="/cda/register-cda"
  //                 className="block px-4 py-2 hover:bg-black hover:text-white"
  //               >
  //                 Register to join a CDA
  //               </Link>
  //             </li>
  //             <li>
  //               <Link
  //                 to="/cda/find-cda"
  //                 className="block px-4 py-2 hover:bg-black hover:text-white"
  //               >
  //                 Find my CDA
  //               </Link>
  //             </li>
  //           </ul>
  //         </div>
  //       )}
  //     </div>

  //     {/* Resources Dropdown */}
  //     <div
  //       ref={resourcesRef}
  //       className="relative flex items-center cursor-pointer"
  //       onClick={() => toggleSubMenu('resources')}
  //     >
  //       <span className={linkClasses('/resources')}>Resources</span>
  //       <img
  //         src={getArrowIcon('/resources')}
  //         alt="arrow"
  //         className={`ml-2 transform transition-transform duration-300 ${
  //           activeSubMenu === 'resources' ? 'rotate-180' : ''
  //         }`}
  //         width={12}
  //         height={12}
  //       />
  //       {activeSubMenu === 'resources' && (
  //         <div className="absolute left-0 z-50 w-64 pt-2 bg-white rounded-lg shadow-md top-full">
  //           <ul className="px-2 py-2">
  //             <li>
  //               <Link
  //                 to="/resources/health-and-safety"
  //                 className="block px-4 py-2 hover:bg-black hover:text-white"
  //               >
  //                 Health and Safety
  //               </Link>
  //             </li>
  //             <li>
  //               <Link
  //                 to="/resources/police-and-firestation"
  //                 className="block px-4 py-2 hover:bg-black hover:text-white"
  //               >
  //                 Police and Fire Service
  //               </Link>
  //             </li>
  //             <li>
  //               <Link
  //                 to="/resources/education"
  //                 className="block px-4 py-2 hover:bg-black hover:text-white"
  //               >
  //                 Education
  //               </Link>
  //             </li>
  //             <li>
  //               <Link
  //                 to="/resources/recreation"
  //                 className="block px-4 py-2 hover:bg-black hover:text-white"
  //               >
  //                 Recreation
  //               </Link>
  //             </li>
  //           </ul>
  //         </div>
  //       )}
  //     </div>

  //     <Link to="/news" className={linkClasses('/news')}>
  //       News & Highlights
  //     </Link>
  //     <Link to="/gallery" className={linkClasses('/gallery')}>
  //       Gallery
  //     </Link>
  //   </div>
  // )

  // const MobileMenu = () => (
  //   <>
  //     {/* Background Overlay */}
  //     {isMobileMenuOpen && (
  //       <div
  //         className="fixed inset-0 z-40 bg-black bg-opacity-50"
  //         onClick={closeMobileMenu}
  //       />
  //     )}

  //     {/* Mobile Sidebar Menu */}
  //     <div
  //       className={`fixed top-0 left-0 w-2/3 h-full bg-white z-50 transition-transform duration-300 ${
  //         isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
  //       }`}
  //     >
  //       <div className="px-5 py-4">
  //         <button
  //           className="text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none"
  //           onClick={toggleMobileMenu}
  //         >
  //           <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
  //             <path
  //               fillRule="evenodd"
  //               d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
  //             />
  //           </svg>
  //         </button>
  //       </div>
  //       <div className="px-5 space-y-4">
  //         <Link
  //           to="/"
  //           className="block text-base font-medium text-gray-700 hover:text-gray-900"
  //           onClick={closeMobileMenu}
  //         >
  //           Home
  //         </Link>
  //         {/* Leadership Dropdown */}
  //         <div className="relative">
  //           <div
  //             className="flex items-center justify-between w-full text-base font-medium text-left text-gray-700 hover:text-gray-900"
  //             onClick={() => toggleSubMenu('leadership')}
  //           >
  //             Leadership
  //             <img
  //               src={getArrowIcon('/leadership')}
  //               alt="arrow"
  //               className={`transform transition-transform ${
  //                 activeSubMenu === 'leadership' ? 'rotate-180' : ''
  //               }`}
  //             />
  //           </div>
  //           {activeSubMenu === 'leadership' && (
  //             <div className="ml-4 space-y-2">
  //               <Link
  //                 to="/leadership/lg-execs"
  //                 className="block text-sm text-gray-600 hover:text-gray-800"
  //                 onClick={closeMobileMenu}
  //               >
  //                 LG Executives
  //               </Link>
  //               <Link
  //                 to="/leadership/cdc-execs"
  //                 className="block text-sm text-gray-600 hover:text-gray-800"
  //                 onClick={closeMobileMenu}
  //               >
  //                 CDC Executives
  //               </Link>
  //               <Link
  //                 to="/leadership/past-chairmen"
  //                 className="block text-sm text-gray-600 hover:text-gray-800"
  //                 onClick={closeMobileMenu}
  //               >
  //                 Past Chairmen
  //               </Link>
  //             </div>
  //           )}
  //         </div>
  //         {/* CDAs Dropdown */}
  //         <div className="relative">
  //           <div
  //             className="flex items-center justify-between w-full text-base font-medium text-left text-gray-700 hover:text-gray-900"
  //             onClick={() => toggleSubMenu('cda')}
  //           >
  //             CDAs
  //             <img
  //               src={getArrowIcon('/cda')}
  //               alt="arrow"
  //               className={`transform transition-transform ${
  //                 activeSubMenu === 'cda' ? 'rotate-180' : ''
  //               }`}
  //             />
  //           </div>
  //           {activeSubMenu === 'cda' && (
  //             <div className="ml-4 space-y-2">
  //               <Link
  //                 to="/cda/register-cda"
  //                 className="block text-sm text-gray-600 hover:text-gray-800"
  //                 onClick={closeMobileMenu}
  //               >
  //                 Register to join a CDA
  //               </Link>
  //               <Link
  //                 to="/cda/find-cda"
  //                 className="block text-sm text-gray-600 hover:text-gray-800"
  //                 onClick={closeMobileMenu}
  //               >
  //                 Find my CDA
  //               </Link>
  //             </div>
  //           )}
  //         </div>
  //         {/* Resources Dropdown */}
  //         <div className="relative">
  //           <div
  //             className="flex items-center justify-between w-full text-base font-medium text-left text-gray-700 hover:text-gray-900"
  //             onClick={() => toggleSubMenu('resources')}
  //           >
  //             Resources
  //             <img
  //               src={getArrowIcon('/resources')}
  //               alt="arrow"
  //               className={`transform transition-transform ${
  //                 activeSubMenu === 'resources' ? 'rotate-180' : ''
  //               }`}
  //             />
  //           </div>
  //           {activeSubMenu === 'resources' && (
  //             <div className="ml-4 space-y-2">
  //               <Link
  //                 to="/resources/health-and-safety"
  //                 className="block text-sm text-gray-600 hover:text-gray-800"
  //                 onClick={closeMobileMenu}
  //               >
  //                 Health and Safety
  //               </Link>
  //               <Link
  //                 to="/resources/police-and-firestation"
  //                 className="block text-sm text-gray-600 hover:text-gray-800"
  //                 onClick={closeMobileMenu}
  //               >
  //                 Police and Fire Service
  //               </Link>
  //               <Link
  //                 to="/resources/education"
  //                 className="block text-sm text-gray-600 hover:text-gray-800"
  //                 onClick={closeMobileMenu}
  //               >
  //                 Education
  //               </Link>
  //               <Link
  //                 to="/resources/recreation"
  //                 className="block text-sm text-gray-600 hover:text-gray-800"
  //                 onClick={closeMobileMenu}
  //               >
  //                 Recreation
  //               </Link>
  //             </div>
  //           )}
  //         </div>
  //         <Link
  //           to="/news"
  //           className="block text-base font-medium text-gray-700 hover:text-gray-900"
  //           onClick={closeMobileMenu}
  //         >
  //           News & Highlights
  //         </Link>
  //         <Link
  //           to="/gallery"
  //           className="block text-base font-medium text-gray-700 hover:text-gray-900"
  //           onClick={closeMobileMenu}
  //         >
  //           Gallery
  //         </Link>
  //       </div>
  //     </div>
  //   </>
  // )
  const toggleDesktopSubMenu = (menu: string) => {
    setDesktopActiveSubMenu((prev) => (prev === menu ? null : menu))
  }

  const DesktopMenu = () => (
    <div className="items-center hidden space-x-8 lg:flex">
      <Link to="/" className={linkClasses('/')}>
        Home
      </Link>

      {/* Leadership Dropdown */}
      <div
        ref={leadershipRef}
        className="relative flex items-center cursor-pointer"
        onClick={() => toggleDesktopSubMenu('leadership')}
      >
        <span className={linkClasses('/leadership')}>Leadership</span>
        <img
          src={getArrowIcon('/leadership')}
          alt="arrow"
          className={`ml-2 transform transition-transform duration-300 ${
            desktopActiveSubMenu === 'leadership' ? 'rotate-180' : ''
          }`}
          width={12}
          height={12}
        />
        {desktopActiveSubMenu === 'leadership' && (
          <div className="absolute left-0 z-50 w-48 pt-2 bg-white rounded-lg shadow-md top-full">
            <ul className="py-2">
              <li>
                <Link
                  to="/leadership/lg-execs"
                  className="block px-4 py-2 hover:bg-black hover:text-white"
                >
                  LG Executives
                </Link>
              </li>
              <li>
                <Link
                  to="/leadership/cdc-execs"
                  className="block px-4 py-2 hover:bg-black hover:text-white"
                >
                  CDC Executives
                </Link>
              </li>
              <li>
                <Link
                  to="/leadership/past-chairmen"
                  className="block px-4 py-2 hover:bg-black hover:text-white"
                >
                  Past Chairmen
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* CDAs Dropdown */}
      <div
        ref={cdaRef}
        className="relative flex items-center cursor-pointer"
        onClick={() => toggleDesktopSubMenu('cda')}
      >
        <span className={linkClasses('/cda')}>CDAs</span>
        <img
          src={getArrowIcon('/cda')}
          alt="arrow"
          className={`ml-2 transform transition-transform duration-300 ${
            desktopActiveSubMenu === 'cda' ? 'rotate-180' : ''
          }`}
          width={12}
          height={12}
        />
        {desktopActiveSubMenu === 'cda' && (
          <div className="absolute left-0 z-50 w-64 pt-2 bg-white rounded-lg shadow-md top-full">
            <ul className="py-2">
              <li>
                <Link
                  to="/cda/register-cda"
                  className="block px-4 py-2 hover:bg-black hover:text-white"
                >
                  Register to join a CDA
                </Link>
              </li>
              <li>
                <Link
                  to="/cda/find-cda"
                  className="block px-4 py-2 hover:bg-black hover:text-white"
                >
                  Find my CDA
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Resources Dropdown */}
      <div
        ref={resourcesRef}
        className="relative flex items-center cursor-pointer"
        onClick={() => toggleDesktopSubMenu('resources')}
      >
        <span className={linkClasses('/resources')}>Resources</span>
        <img
          src={getArrowIcon('/resources')}
          alt="arrow"
          className={`ml-2 transform transition-transform duration-300 ${
            desktopActiveSubMenu === 'resources' ? 'rotate-180' : ''
          }`}
          width={12}
          height={12}
        />
        {desktopActiveSubMenu === 'resources' && (
          <div className="absolute left-0 z-50 w-64 pt-2 bg-white rounded-lg shadow-md top-full">
            <ul className="px-2 py-2">
              <li>
                <Link
                  to="/resources/health-and-safety"
                  className="block px-4 py-2 hover:bg-black hover:text-white"
                >
                  Health and Safety
                </Link>
              </li>
              <li>
                <Link
                  to="/resources/police-and-firestation"
                  className="block px-4 py-2 hover:bg-black hover:text-white"
                >
                  Police and Fire Service
                </Link>
              </li>
              <li>
                <Link
                  to="/resources/education"
                  className="block px-4 py-2 hover:bg-black hover:text-white"
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  to="/resources/recreation"
                  className="block px-4 py-2 hover:bg-black hover:text-white"
                >
                  Recreation
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      <Link to="/news" className={linkClasses('/news')}>
        News & Highlights
      </Link>
      <Link to="/gallery" className={linkClasses('/gallery')}>
        Gallery
      </Link>
    </div>
  )

  const MobileMenu = () => (
    <>
      {mobileMenuState.isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={closeMobileMenu}
        />
      )}

      <div
        className={`fixed top-0 left-0 w-2/3 h-full bg-white z-50 transition-transform duration-300 ${
          mobileMenuState.isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="px-5 py-4">
          <button
            className="text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
            </svg>
          </button>
        </div>
        <div className="px-5 space-y-4">
          <Link
            to="/"
            className="block text-base font-medium text-gray-700 hover:text-gray-900"
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          {/* Leadership Dropdown */}
          <div className="relative">
            <div
              className="flex items-center justify-between w-full text-base font-medium text-left text-gray-700 hover:text-gray-900"
              onClick={() => toggleSubMenu('leadership')}
            >
              Leadership
              <img
                src={
                  mobileMenuState.activeSubMenu === 'leadership'
                    ? activeArrow
                    : arrow
                }
                alt="arrow"
                className={`transform transition-transform ${
                  mobileMenuState.activeSubMenu === 'leadership'
                    ? 'rotate-180'
                    : ''
                }`}
              />
            </div>
            {mobileMenuState.activeSubMenu === 'leadership' && (
              <div className="ml-4 space-y-2">
                <Link
                  to="/leadership/lg-execs"
                  className="block text-sm text-gray-600 hover:text-gray-800"
                  onClick={closeMobileMenu}
                >
                  LG Executives
                </Link>
                <Link
                  to="/leadership/cdc-execs"
                  className="block text-sm text-gray-600 hover:text-gray-800"
                  onClick={closeMobileMenu}
                >
                  CDC Executives
                </Link>
                <Link
                  to="/leadership/past-chairmen"
                  className="block text-sm text-gray-600 hover:text-gray-800"
                  onClick={closeMobileMenu}
                >
                  Past Chairmen
                </Link>
              </div>
            )}
          </div>
          {/* CDAs Dropdown */}
          <div className="relative">
            <div
              className="flex items-center justify-between w-full text-base font-medium text-left text-gray-700 hover:text-gray-900"
              onClick={() => toggleSubMenu('cda')}
            >
              CDAs
              <img
                src={
                  mobileMenuState.activeSubMenu === 'cda' ? activeArrow : arrow
                }
                alt="arrow"
                className={`transform transition-transform ${
                  mobileMenuState.activeSubMenu === 'cda' ? 'rotate-180' : ''
                }`}
              />
            </div>
            {mobileMenuState.activeSubMenu === 'cda' && (
              <div className="ml-4 space-y-2">
                <Link
                  to="/cda/register-cda"
                  className="block text-sm text-gray-600 hover:text-gray-800"
                  onClick={closeMobileMenu}
                >
                  Register to join a CDA
                </Link>
                <Link
                  to="/cda/find-cda"
                  className="block text-sm text-gray-600 hover:text-gray-800"
                  onClick={closeMobileMenu}
                >
                  Find my CDA
                </Link>
              </div>
            )}
          </div>
          {/* Resources Dropdown */}
          <div className="relative">
            <div
              className="flex items-center justify-between w-full text-base font-medium text-left text-gray-700 hover:text-gray-900"
              onClick={() => toggleSubMenu('resources')}
            >
              Resources
              <img
                src={
                  mobileMenuState.activeSubMenu === 'resources'
                    ? activeArrow
                    : arrow
                }
                alt="arrow"
                className={`transform transition-transform ${
                  mobileMenuState.activeSubMenu === 'resources'
                    ? 'rotate-180'
                    : ''
                }`}
              />
            </div>
            {mobileMenuState.activeSubMenu === 'resources' && (
              <div className="ml-4 space-y-2">
                <Link
                  to="/resources/health-and-safety"
                  className="block text-sm text-gray-600 hover:text-gray-800"
                  onClick={closeMobileMenu}
                >
                  Health and Safety
                </Link>
                <Link
                  to="/resources/police-and-firestation"
                  className="block text-sm text-gray-600 hover:text-gray-800"
                  onClick={closeMobileMenu}
                >
                  Police and Fire Service
                </Link>
                <Link
                  to="/resources/education"
                  className="block text-sm text-gray-600 hover:text-gray-800"
                  onClick={closeMobileMenu}
                >
                  Education
                </Link>
                <Link
                  to="/resources/recreation"
                  className="block text-sm text-gray-600 hover:text-gray-800"
                  onClick={closeMobileMenu}
                >
                  Recreation
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/news"
            className="block text-base font-medium text-gray-700 hover:text-gray-900"
            onClick={closeMobileMenu}
          >
            News & Highlights
          </Link>
          <Link
            to="/gallery"
            className="block text-base font-medium text-gray-700 hover:text-gray-900"
            onClick={closeMobileMenu}
          >
            Gallery
          </Link>
        </div>
      </div>
    </>
  )

  return (
    <header className="bg-white shadow-md">
      <section className="flex items-center justify-between px-4 py-3 bg-light-green lg:px-20">
        <div className="font-bold text-white">WE ONE...</div>
        <div className="flex space-x-5">
          <img src={facebook} className="w-5 h-5" alt="facebook" />
          <img src={instagram} className="w-5 h-5" alt="instagram" />
          <img src={mail} className="w-5 h-5" alt="mail" />
        </div>
      </section>

      <section className="flex items-center justify-between px-4 py-3 lg:px-20">
        <div className="flex items-center flex-shrink-0">
          <img alt="logo" src={logo} className="w-14 h-14 md:w-20 md:h-20" />
        </div>
        <div className="hidden lg:block">
          <DesktopMenu />
        </div>
        <div className="flex items-center">
          <Link
            to="/report-complaint"
            className="hidden px-4 py-2 text-sm font-medium text-white rounded-md lg:inline-block bg-dark-green hover:bg-green-700 focus:outline-none"
          >
            Report a complaint
          </Link>
          <button
            className="block text-gray-500 lg:hidden hover:text-gray-600 focus:text-gray-600 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path
                  fillRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </section>

      <MobileMenu />
    </header>
  )
}

export default Header
