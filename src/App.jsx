import './index.css'
import Navbar from './components/NavBar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/Feature'
import Workflow from './components/Workflow'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar></Navbar>
        <div className="max-w-7xl mx-auto pt-20 px-6">
          <HeroSection></HeroSection>
          <FeatureSection></FeatureSection>
          <Workflow></Workflow>
          <Pricing></Pricing>
          <Testimonials></Testimonials>
          <Footer></Footer>
      </div>
    </>
  )
}

export default App