import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface Partner {
  id: number
  name: string
  logo: string
  category: string
}

const Partners = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [partners, setPartners] = useState<Partner[]>([])

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await axios.get('/api/partners')
        setPartners(response.data)
      } catch (error) {
        console.error('Failed to fetch partners:', error)
        // Fallback data with emoji representations
        setPartners([
          { id: 1, name: 'Binance', logo: '🟡', category: 'Exchange' },
          { id: 2, name: 'Coinbase', logo: '🔵', category: 'Exchange' },
          { id: 3, name: 'Bitcoin', logo: '₿', category: 'Cryptocurrency' },
          { id: 4, name: 'Ethereum', logo: '⟠', category: 'Cryptocurrency' }
        ])
      }
    }

    fetchPartners()
  }, [])

  return (
    <section ref={ref} className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-20 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-60 h-60 bg-purple-500/5 rounded-full blur-3xl"
          animate={{ 
            x: [0, -30, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Partners
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            & Friends
          </p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              className="glass-effect rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <motion.div
                className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                {partner.logo}
              </motion.div>
              <h3 className="text-white font-semibold text-lg mb-2">{partner.name}</h3>
              <p className="text-gray-400 text-sm">{partner.category}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="glass-effect rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            We are in a good company
          </h3>
          <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
            Our partnerships have delivered clear value to our projects and 
            which happily to work closely with the most promising brands.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl mb-3">🤝</div>
              <h4 className="text-white font-semibold mb-2">Trusted Partnerships</h4>
              <p className="text-gray-400 text-sm">Long-term collaborative relationships</p>
            </motion.div>
            
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl mb-3">🌐</div>
              <h4 className="text-white font-semibold mb-2">Global Network</h4>
              <p className="text-gray-400 text-sm">Worldwide presence and connections</p>
            </motion.div>
            
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="text-white font-semibold mb-2">Innovation Focus</h4>
              <p className="text-gray-400 text-sm">Cutting-edge technology solutions</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Partners