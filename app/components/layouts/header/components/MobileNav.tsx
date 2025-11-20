'use client'
import React, { useState, FC, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'
import { NavItem } from '../../../../lib/navData'

interface MobileNavProps {
  navItems: NavItem[]
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const MobileNav: FC<MobileNavProps> = ({ navItems, isOpen, setIsOpen }) => {
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    null
  )

  useEffect(() => {
    if (!isOpen) {
      // Add a delay to allow the exit animation to complete before resetting the state
      const timer = setTimeout(() => {
        setOpenMobileDropdown(null)
      }, 300) // Adjust delay to match your animation duration

      return () => clearTimeout(timer)
    }
  }, [isOpen])

  const mobileMenuVariants = {
    open: { y: 0, opacity: 1 },
    closed: { y: '-100%', opacity: 0 },
  }

  const mobileLinkVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: -10 },
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={mobileMenuVariants}
          initial="closed"
          animate="open"
          exit="closed"
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="lg:hidden fixed top-0 left-0 w-full h-screen bg-white z-[90] pt-20 overflow-y-auto"
        >
          <motion.ul
            className="px-6 py-4"
            variants={{
              open: { transition: { staggerChildren: 0.07 } },
              closed: {
                transition: { staggerChildren: 0.05, staggerDirection: -1 },
              },
            }}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {navItems.map(item => (
              <motion.li
                key={item.label}
                className="py-2 border-b border-slate-100"
                variants={mobileLinkVariants}
              >
                {item.type === 'link' ? (
                  <Link
                    href={item.href}
                    className="block text-slate-700 hover:text-blue-600 py-2 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div>
                    <button
                      onClick={() =>
                        setOpenMobileDropdown(
                          openMobileDropdown === item.label ? null : item.label
                        )
                      }
                      className="w-full flex justify-between items-center text-slate-700 py-2 font-medium"
                    >
                      <span>{item.label}</span>
                      <FiChevronDown
                        className={`transition-transform ${
                          openMobileDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {openMobileDropdown === item.label && (
                        <motion.ul
                          className="pl-2 mt-2 space-y-1 overflow-hidden"
                          initial={{ height: 0 }}
                          animate={{ height: 'auto' }}
                          exit={{ height: 0 }}
                        >
                          {item.subItems.map(subItem => (
                            <li key={subItem.label}>
                              <Link
                                href={subItem.href}
                                className="group flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors"
                                onClick={() => setIsOpen(false)}
                              >
                                <subItem.icon className="w-5 h-5 text-slate-500 mt-1" />
                                <div>
                                  <p className="font-semibold text-slate-700">
                                    {subItem.label}
                                  </p>
                                  <p className="text-sm text-slate-500">
                                    {subItem.description}
                                  </p>
                                </div>
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </motion.li>
            ))}
            <motion.li className="mt-6" variants={mobileLinkVariants}>
              <Link
                href="https://https://demo.healthyayush.com/en/accounts/login/"
                target='_blank'
                className="block text-center w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-all"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </motion.li>
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MobileNav
