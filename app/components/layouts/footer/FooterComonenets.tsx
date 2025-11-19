'use client'
import React from 'react'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from 'react-icons/fa'
import Image from 'next/image'
import Logos from '../../../../public/assets/images/logo.png'
import Link from 'next/link'

const footerSectionsData = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact Us', href: '/contact' },
      // { label: 'Book a meeting', href: '/book-a-demo' },
      { label: 'Request a Demo', href: '/book-a-demo' },
      { label: 'Careers', href: '/careers' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Custom Software Development', href: '/services/custom-software-development' },
      { label: 'Healthcare Technology', href: '/services/healthcare-technology' },
      { label: 'Mobile Application Development', href: '/services/mobile-application-development' },
      { label: 'Consultation Services', href: '/services/consultation-services' },
    ],
  },
  {
    title: 'hOS',
    links: [
      { label: 'Healthy Ayush', href: '/hospital-product/palika-care' },
      { label: 'Clinic Pro', href: '/hospital-product/clinic-pro' },
      { label: 'Clinic Care', href: '/hospital-product/clinic-care' },
      { label: 'hOS Standard Edition', href: '/hospital-product/ajna-hos-standard' },
      { label: 'hOS Enterprise Edition', href: '/hospital-product/ajna-hos-enterprise' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms-of-service' },
      { label: 'GDPR', href: '/gdpr' },
    ],
  },
]

const socialLinksData = [
  { label: 'Facebook', icon: FaFacebookF, href: '#' },
  { label: 'Twitter', icon: FaTwitter, href: '#' },
  { label: 'LinkedIn', icon: FaLinkedinIn, href: '#' },
  { label: 'Instagram', icon: FaInstagram, href: '#' },
  { label: 'Youtube', icon: FaYoutube, href: '#' },
]

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-gray-200 font-sans">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="xl:grid xl:grid-cols-3 xl:gap-12">
          <div className="space-y-8 xl:col-span-1 mb-10 xl:mb-0 text-center xl:text-left">
            <Link
              href="/"
              className="inline-block focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-md"
            >
              <Image
                className="h-16 w-auto mx-auto xl:mx-0"
                src={Logos}
                alt="Ajna Lab Technology Logo"
              />
            </Link>
            <p className="text-gray-600 text-base leading-relaxed max-w-xs mx-auto xl:mx-0">
              Inner Vision. Outer Impact.
            </p>
            <div className="flex justify-center xl:justify-start space-x-5">
              {socialLinksData.map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-indigo-600 transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 rounded-full p-2"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 xl:col-span-2">
            {footerSectionsData.map(section => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-5">
                  {section.title}
                </h3>
                <ul role="list" className="space-y-4">
                  {section.links.map(link => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-base text-gray-600 hover:text-indigo-600 hover:underline focus:outline-none focus:underline focus:text-indigo-700 transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 lg:mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            © {currentYear} Ajna Lab Pvt. Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
