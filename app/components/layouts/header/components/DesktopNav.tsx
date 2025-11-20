'use client'
import React, { useState, FC } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'
import { NavItem, MegaMenuSubItem } from '../../../../lib/navData'
import { usePathname } from 'next/navigation'

const MegaMenu: FC<{
  subItems: MegaMenuSubItem[]
  onLinkClick: () => void
}> = ({ subItems, onLinkClick }) => {
  const featuredItem = subItems.find(item => item.isFeatured)
  const regularItems = subItems.filter(item => !item.isFeatured)

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="absolute left-1/2 -translate-x-1/2 mt-4 w-screen max-w-4xl z-110"
    >
      <div className="bg-white shadow-2xl rounded-lg border border-slate-200/80 overflow-hidden">
        <div className="grid grid-cols-12">
          {featuredItem && (
            <div className="col-span-5 bg-slate-50 p-6">
              <h3 className="text-sm font-semibold text-slate-500 tracking-wider uppercase mb-4">
                Featured
              </h3>
              <Link
                href={featuredItem.href}
                onClick={onLinkClick}
                className="group flex flex-col justify-between h-full p-4 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <div>
                  <div className="bg-blue-100 text-blue-600 rounded-md p-3 inline-block">
                    <featuredItem.icon className="w-6 h-6" />
                  </div>
                  <p className="font-semibold text-slate-800 group-hover:text-blue-600 mt-4 text-lg">
                    {featuredItem.label}
                  </p>
                  <p className="text-sm text-slate-500 mt-1">
                    {featuredItem.description}
                  </p>
                </div>
                <span className="text-sm font-semibold text-blue-600 mt-6 group-hover:underline">
                  Learn More &rarr;
                </span>
              </Link>
            </div>
          )}
          <motion.ul
            className={`${featuredItem ? 'col-span-7' : 'col-span-12'}
              p-6 grid grid-cols-2 gap-x-8 gap-y-4`}
            variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
            initial="hidden"
            animate="visible"
          >
            {regularItems.map(subItem => (
              <motion.li
                key={subItem.label}
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <Link
                  href={subItem.href}
                  onClick={onLinkClick}
                  className="group flex items-start gap-4 p-2 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <div className="bg-slate-100 text-slate-600 rounded-md p-2 mt-1">
                    <subItem.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 group-hover:text-blue-600">
                      {subItem.label}
                    </p>
                    <p className="text-sm text-slate-500">
                      {subItem.description}
                    </p>
                  </div>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </motion.div>
  )
}

interface DesktopNavProps {
  navItems: NavItem[]
}

const DesktopNav: FC<DesktopNavProps> = ({ navItems }) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const hoverTimeoutRef = React.useRef<NodeJS.Timeout | null>(null)
  const pathname = usePathname()

  const isActive = (item: NavItem) => {
    if (item.href === '/') return pathname === '/'
    if (item.type === 'mega') {
      return item.subItems.some(sub => pathname.startsWith(sub.href))
    }
    return pathname.startsWith(item.href)
  }

  const handleMouseEnter = (itemLabel: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    setHoveredItem(itemLabel)
  }

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredItem(null)
    }, 150)
  }

  return (
    <>
      <ul className="hidden lg:flex items-center space-x-2">
        {navItems.map(item => (
          <li
            key={item.label}
            className="relative"
            onMouseEnter={() => handleMouseEnter(item.label)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href={item.href}
              className={`flex items-center gap-1 rounded-md px-4 py-2 transition-colors ${
                isActive(item)
                  ? 'text-blue-600'
                  : 'text-slate-700 hover:text-blue-600'
              }`}
            >
              <span
                className={isActive(item) ? 'font-semibold' : 'font-medium'}
              >
                {item.label}
              </span>
              {item.type === 'mega' && (
                <FiChevronDown
                  className={`transition-transform duration-300 ${
                    hoveredItem === item.label ? 'rotate-180' : ''
                  }
                    }`}
                />
              )}
            </Link>

            {isActive(item) && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                layoutId="underline"
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 25,
                }}
              />
            )}

            <AnimatePresence>
              {item.type === 'mega' && hoveredItem === item.label && (
                <MegaMenu
                  subItems={item.subItems}
                  onLinkClick={() => setHoveredItem(null)}
                />
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
      <div className="hidden lg:flex items-center">
        <motion.a
          href="https://https://demo.healthyayush.com/en/accounts/login/.com/contact"
          target='_blank'
          className="bg-blue-600 text-white font-semibold py-2 px-5 rounded-lg shadow-md hover:bg-blue-700 transition-all"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          Get Started
        </motion.a>
      </div>
    </>
  )
}

export default DesktopNav
