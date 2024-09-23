import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import LGExecutives from './pages/LGExecutives'
import CDCExecutives from './pages/CDCExecutives'
import PastChairman from './pages/PastChairmen'
import RegisterCDA from './pages/RegisterCDA'
import FindYourCDA from './pages/FindYourCDA'
import MegaCDA from './pages/MegaCDA'
import Gallery from './pages/Gallery'
import News from './pages/News'
import PoliceAndFireStation from './pages/PoliceAndFireStation'
import ReportComplaint from './pages/ReportComplaint'

function App() {
  return (
    <div className="flex flex-col min-h-screen font-quicksand bg-[#FAFAFA]">
      <Header />
      <div className="flex-grow">
        <Routes>
          {/* Home route */}
          <Route path="/" element={<Home />} />

          {/* Leadership */}
          <Route path="/leadership/lg-execs" element={<LGExecutives />} />
          <Route path="/leadership/cdc-execs" element={<CDCExecutives />} />
          <Route path="/leadership/past-chairmen" element={<PastChairman />} />

          {/* CDAs */}
          <Route path="/cda/register-cda" element={<RegisterCDA />} />
          <Route path="/cda/find-cda" element={<FindYourCDA />} />
          <Route path="/cda/mega-cda" element={<MegaCDA />} />

          {/* Resources */}
          <Route
            path="/resources/police-and-firestation"
            element={<PoliceAndFireStation />}
          />

          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news" element={<News />} />
          <Route path="/report-complaint" element={<ReportComplaint />} />
        </Routes>
      </div>

      <Footer />
    </div>
  )
}

export default App
