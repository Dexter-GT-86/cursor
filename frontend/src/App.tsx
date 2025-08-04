import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutTeam from './components/AboutTeam'
import CryptoMarketMaking from './components/CryptoMarketMaking'
import Partners from './components/Partners'
import CompanyInfo from './components/CompanyInfo'
import JoinTeam from './components/JoinTeam'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingSpinner from './components/LoadingSpinner'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate app initialization
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <LoadingSpinner />
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      <Header />
      <main>
        <Hero />
        <AboutTeam />
        <CryptoMarketMaking />
        <Partners />
        <CompanyInfo />
        <JoinTeam />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App