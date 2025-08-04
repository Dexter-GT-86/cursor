import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-black/80 border-t border-gray-800">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-blue-500/5 to-transparent rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-2xl font-bold text-white mb-4"
              whileHover={{ scale: 1.05 }}
            >
              GRAVITY
            </motion.h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Global cryptocurrency market making team providing algorithmic trading solutions 
              and liquidity services for digital assets.
            </p>
            <div className="flex space-x-4">
              <motion.div
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center cursor-pointer"
                whileHover={{ scale: 1.1, backgroundColor: '#1d4ed8' }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-blue-400">📘</span>
              </motion.div>
              <motion.div
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center cursor-pointer"
                whileHover={{ scale: 1.1, backgroundColor: '#1d4ed8' }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-blue-400">🐦</span>
              </motion.div>
              <motion.div
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center cursor-pointer"
                whileHover={{ scale: 1.1, backgroundColor: '#7c3aed' }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-purple-400">💼</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                'Market Making',
                'Liquidity Provision',
                'Algorithmic Trading',
                'Risk Management',
                'Trading Infrastructure'
              ].map((service, index) => (
                <motion.li
                  key={service}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {[
                'About Us',
                'Our Team',
                'Careers',
                'Partners',
                'News & Updates'
              ].map((item, index) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <motion.div
                className="flex items-start space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-blue-400 mt-1">📧</span>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a 
                    href="mailto:contact@gravityteam.io" 
                    className="text-white hover:text-blue-400 transition-colors duration-300"
                  >
                    contact@gravityteam.io
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-purple-400 mt-1">🌍</span>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white">European Union</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-green-400 mt-1">⏰</span>
                <div>
                  <p className="text-gray-400 text-sm">Support</p>
                  <p className="text-white">24/7 Available</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-800 mt-16 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © {currentYear} Gravity Team. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                  whileHover={{ y: -2 }}
                >
                  Privacy Policy
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                  whileHover={{ y: -2 }}
                >
                  Terms of Service
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                  whileHover={{ y: -2 }}
                >
                  Legal Notice
                </motion.a>
              </div>
            </div>

            {/* Back to Top Button */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-gray-800 hover:bg-blue-600 text-white p-3 rounded-full transition-colors duration-300"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </motion.button>
          </div>
        </motion.div>

        {/* Floating Decorative Elements */}
        <motion.div
          className="absolute top-10 right-10 w-4 h-4 bg-blue-500/20 rounded-full"
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-3 h-3 bg-purple-500/20 rounded-full"
          animate={{ 
            x: [0, 15, 0],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>
    </footer>
  )
}

export default Footer