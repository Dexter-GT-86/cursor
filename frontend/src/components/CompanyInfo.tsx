import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface CompanyInfo {
  name: string
  description: string
  established: number
  achievements: string[]
}

const CompanyInfo = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [companyInfo, setCompanyInfo] = useState<CompanyInfo | null>(null)

  useEffect(() => {
    const fetchCompanyInfo = async () => {
      try {
        const response = await axios.get('/api/company-info')
        setCompanyInfo(response.data)
      } catch (error) {
        console.error('Failed to fetch company info:', error)
        // Fallback data
        setCompanyInfo({
          name: 'Gravity Team',
          description: 'We are a global cryptocurrency team based in EU. Our professionals have invested over 2 years in market intelligence.',
          established: 2019,
          achievements: [
            'High-quality volume',
            'Very reliable and trustworthy partner',
            'Uniquely active and indispensable part of market-making team'
          ]
        })
      }
    }

    fetchCompanyInfo()
  }, [])

  if (!companyInfo) return null

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-blue-500/10 to-transparent rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-purple-500/10 to-transparent rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            We are in a good company
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {companyInfo.description}
          </motion.p>
        </div>

        {/* Main Content */}
        <motion.div
          className="glass-effect rounded-3xl p-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.p
            className="text-lg text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Since {companyInfo.established}, {companyInfo.name} team has been an astounding 
            experience for us. They have provided us with one of the most consistent, professional and 
            ethical trading volume and has proven to be very reliable and trustworthy partner. We strongly 
            recommend them for market making requirements.
          </motion.p>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {companyInfo.achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="text-2xl mb-3">
                  {index === 0 && '📈'}
                  {index === 1 && '🤝'}
                  {index === 2 && '⭐'}
                </div>
                <p className="text-white font-medium">{achievement}</p>
              </motion.div>
            ))}
          </div>

          {/* Quote Attribution */}
          <motion.div
            className="border-t border-gray-700 pt-8"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <p className="text-gray-400 text-sm mb-2">- Partners since {companyInfo.established}</p>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                GT
              </div>
              <span className="text-gray-300 font-medium">{companyInfo.name}</span>
            </div>
          </motion.div>

          {/* Floating Decorative Elements */}
          <motion.div
            className="absolute -top-10 -left-10 w-20 h-20 border border-blue-500/20 rounded-full"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute -bottom-10 -right-10 w-16 h-16 border border-purple-500/20 rounded-lg"
            animate={{ 
              rotate: [360, 0],
              scale: [1.1, 1, 1.1]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default CompanyInfo