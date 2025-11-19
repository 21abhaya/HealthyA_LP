'use client'
import React, { useState, useEffect, FC } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiMenu, FiX } from 'react-icons/fi'
import Image from 'next/image'
import Logos from '../../../../public/assets/images/logo.png'
import { navItemsData } from '../../../lib/navData'
import DesktopNav from './components/DesktopNav'
import MobileNav from './components/MobileNav'

const Header: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-100 transition-all duration-300 ${
          isScrolled ? 'pt-0' : 'pt-4'
        }`}
      >
        <div
          className={`mx-auto transition-all duration-300 ease-in-out ${
            isScrolled
              ? 'w-full rounded-none bg-white/80 backdrop-blur-lg shadow-md'
              : 'w-11/12 lg:w-[80%] rounded-full bg-white/60 backdrop-blur-xl shadow-lg'
          }`}
        >
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
            <Link href="/" className="shrink-0">
              <Image src={Logos} width={48} height={48} alt="Ajna Lab Logo" />
            </Link>

            <DesktopNav navItems={navItemsData} />

            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-700 p-2"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      <MobileNav
        navItems={navItemsData}
        isOpen={isMobileMenuOpen}
        setIsOpen={setIsMobileMenuOpen}
      />
    </>
  )
}

export default Header
