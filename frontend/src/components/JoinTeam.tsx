import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const JoinTeam = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-full blur-3xl"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Join
            <br />
            <span className="gradient-text">Gravity Team</span>
          </motion.h2>

          <motion.div
            className="glass-effect rounded-3xl p-12 backdrop-blur-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p
              className="text-xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Join our community of developers, pioneers and disruptors who want to challenge the status quo and create innovative blockchain applications.
            </motion.p>

            <motion.p
              className="text-lg text-gray-400 mb-12 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              As an extension to the online - Gravity Tech, We are a global dynamic team of high-caliber financial and technology experts. We have a deep understanding of digital assets and professional experience in developing blockchain applications.
            </motion.p>

            {/* Benefits Grid */}
            <motion.div
              className="grid md:grid-cols-3 gap-8 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-center">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  🚀
                </motion.div>
                <h3 className="text-white font-semibold mb-2">Innovation</h3>
                <p className="text-gray-400 text-sm">Work on cutting-edge blockchain technology</p>
              </div>

              <div className="text-center">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  🌍
                </motion.div>
                <h3 className="text-white font-semibold mb-2">Global Impact</h3>
                <p className="text-gray-400 text-sm">Shape the future of digital finance</p>
              </div>

              <div className="text-center">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-pink-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  🎯
                </motion.div>
                <h3 className="text-white font-semibold mb-2">Excellence</h3>
                <p className="text-gray-400 text-sm">Join a team of industry experts</p>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <motion.button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 animate-pulse-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn more about joining us →
              </motion.button>

              <motion.div
                className="text-gray-400 text-sm"
                whileHover={{ scale: 1.05 }}
              >
                <span className="block">Ready to make an impact?</span>
                <span className="text-blue-400">careers@gravityteam.io</span>
              </motion.div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              className="absolute top-8 left-8 w-4 h-4 bg-blue-500/40 rounded-full"
              animate={{ 
                y: [0, -20, 0],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-16 right-12 w-3 h-3 bg-purple-500/40 rounded-full"
              animate={{ 
                y: [0, 15, 0],
                opacity: [0.6, 0.3, 0.6]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <motion.div
              className="absolute bottom-12 left-16 w-5 h-5 bg-pink-500/40 rounded-full"
              animate={{ 
                x: [0, 10, 0],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default JoinTeam