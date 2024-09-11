import FireStations from '../components/FireStations'
import PoliceStations from '../components/PoliceStations'
const PoliceAndFireStation = () => {
  return (
    <section className="w-full px-10 py-20 mx-auto space-y-20 text-center max-w-screen-2xl sm:px-10 lg:px-20">
      <FireStations />
      <PoliceStations />
    </section>
  )
}

export default PoliceAndFireStation
