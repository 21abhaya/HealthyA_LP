'use client'

import { motion, Variants } from 'framer-motion'
import { FiHome, FiArrowRight } from 'react-icons/fi'
import Link from 'next/link'

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
}

export default function GotoHomeButton() {
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      className="text-center py-24"
    >
      <Link href="/">
        <motion.button
          whileHover={{
            scale: 1.05,
            y: -2,
            boxShadow: '0px 12px 24px rgba(79, 70, 229, 0.2)',
          }}
          whileTap={{ scale: 0.98, y: 0 }}
          className="group inline-flex items-center mt-8 px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition-all duration-300"
        >
          <FiHome className="mr-2 h-5 w-5" />
          Go Back To Home
          <FiArrowRight className="ml-2 h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
        </motion.button>
      </Link>
    </motion.div>
  )
}
