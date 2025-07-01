import './index.css'
import Navbar from './components/NavBar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/Feature'

const App = () => {
  return (
    <>
      <Navbar></Navbar>
        <div className="max-w-7xl mx-auto pt-20 px-6">
          <HeroSection></HeroSection>
          <FeatureSection></FeatureSection>
      </div>
    </>
  )
}

export default App