import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface TeamStats {
  funding: { value: string; description: string }
  marketShare: { value: string; description: string }
  trading: { value: string; description: string }
  experience: { value: string; description: string }
  established: { value: string; description: string }
  employees: { value: string; description: string }
  clients: { value: string; description: string }
  trading_volume: { value: string; description: string }
}

const AboutTeam = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [stats, setStats] = useState<TeamStats | null>(null)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get('/api/team-stats')
        setStats(response.data)
      } catch (error) {
        console.error('Failed to fetch team stats:', error)
        // Fallback data
        setStats({
          funding: { value: '>$100 billion', description: 'Notional cumulative volume' },
          marketShare: { value: '0.8%', description: 'ETH and BTC options average daily volume' },
          trading: { value: '>30', description: 'Actively supported trading pairs' },
          experience: { value: '25+', description: 'Combined years of traditional market experience' },
          established: { value: '2017', description: 'Year crypto market' },
          employees: { value: '1,200+', description: 'Team employees' },
          clients: { value: '24/7', description: 'Clients' },
          trading_volume: { value: '5 billion+', description: 'Index that we track' }
        })
      }
    }

    fetchStats()
  }, [])

  const statsArray = stats ? [
    stats.funding,
    stats.marketShare,
    stats.trading,
    stats.experience,
    stats.established,
    stats.employees,
    stats.clients,
    stats.trading_volume
  ] : []

  return (
    <section id="about" ref={ref} className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Gravity Team
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We are a global cryptocurrency team based in EU. Our team consists of mathematical traders, 
            quantitative researchers, engineers and technology experts whose professional backgrounds and 
            expertise spans across industries. We are engaged across global markets, trading platforms, 
            data providers and counterparties.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {statsArray.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center glass-effect rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Our Expertise</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-300">Quantitative Trading Strategies</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-300">Market Making and Liquidity Provision</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-300">Risk Management Systems</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-300">High-Frequency Trading Infrastructure</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <motion.div
              className="w-full h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center"
              animate={{ 
                background: [
                  'linear-gradient(to bottom right, rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.2))',
                  'linear-gradient(to bottom right, rgba(168, 85, 247, 0.2), rgba(59, 130, 246, 0.2))',
                  'linear-gradient(to bottom right, rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.2))'
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-center">
                <div className="text-6xl mb-4">📊</div>
                <p className="text-white font-semibold">Advanced Analytics</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutTeam