import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const CryptoMarketMaking = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="services" ref={ref} className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Crypto Market Making
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a global cryptcurrency premier providing algorithmic trades 
            while tring to make the virtual currency in the most efficient way.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Market Making for Crypto Projects */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Market Making for Crypto Projects
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Seamlessly boost liquidity, ensuring the investors can trust your process better.
              </p>
              <p className="text-gray-400 mb-8 text-sm">
                We invest in building long-term relationships and trust. We'll design capital solutions to accelerate the growth of your business and connect you to relevant opportunities.
              </p>
              
              <motion.button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn more →
              </motion.button>

              {/* 3D Illustration Placeholder */}
              <div className="mt-8 relative">
                <motion.div
                  className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center relative overflow-hidden"
                  animate={{ 
                    background: [
                      'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.2))',
                      'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(59, 130, 246, 0.2))'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* Floating shapes */}
                  <motion.div
                    className="absolute top-4 left-4 w-12 h-12 bg-blue-500/30 rounded-lg"
                    animate={{ 
                      rotate: [0, 360],
                      y: [0, -10, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute bottom-4 right-4 w-8 h-8 bg-purple-500/30 rounded-full"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      x: [0, 10, 0]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  />
                  <motion.div
                    className="absolute top-1/2 right-8 w-6 h-6 bg-green-500/30 rounded-full"
                    animate={{ 
                      y: [0, -20, 0],
                      opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                  
                  <div className="text-center">
                    <div className="text-4xl mb-2">🏗️</div>
                    <p className="text-white font-medium">Crypto Projects</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Market Making for Crypto Exchanges */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Market Making for Crypto Exchanges
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Attract high-volume traders providing trading experience and increasing 
                the engagement of your trading community.
              </p>
              <p className="text-gray-400 mb-8 text-sm">
                Our native end-to-end system provides detailed data and analytics 
                along with professional customer support which will help you optimize 
                client base business plan and liquidity strategies.
              </p>
              
              <motion.button
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn more →
              </motion.button>

              {/* 3D Illustration Placeholder */}
              <div className="mt-8 relative">
                <motion.div
                  className="w-full h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center relative overflow-hidden"
                  animate={{ 
                    background: [
                      'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(59, 130, 246, 0.2))',
                      'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.2))'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* Trading chart visualization */}
                  <motion.div
                    className="absolute inset-4 border border-white/20 rounded-lg p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {/* Chart bars */}
                    <div className="flex items-end justify-center space-x-2 h-20">
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="bg-gradient-to-t from-blue-500 to-purple-500 w-3 rounded-t"
                          style={{ height: `${20 + Math.random() * 40}px` }}
                          animate={{ 
                            height: [`${20 + Math.random() * 40}px`, `${20 + Math.random() * 40}px`]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            delay: i * 0.2,
                            ease: "easeInOut"
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                  
                  <div className="text-center">
                    <div className="text-4xl mb-2">📈</div>
                    <p className="text-white font-medium">Exchange Trading</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CryptoMarketMaking