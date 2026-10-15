
import Navbar from '../components/common/NavBar'
import Hero from '../components/homeComponents/Hero'
import Features from '../components/homeComponents/Features'
import AboutUs from '../components/homeComponents/AboutUs'
import Reviews from '../components/homeComponents/Reviews'
import Closing from '../components/homeComponents/Closing'

const HomePage = () => {
  return (
    <div>
      <Navbar />

      <main>
        <Hero />
        <Features />
        <AboutUs />
        <Reviews />
        <Closing />
      </main>

    </div>
  )
}

export default HomePage