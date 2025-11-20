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
import Logos from '../../../../public/assets/images/healthy_ayush_logo.png'
import Ajna_Lab_Logo from '../../../../public/assets/images/logo.png'
import Link from 'next/link'

const footerSectionsData = [
  {
    title: 'Healthy Ayush',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Features', href: '/#features' },
      { label: 'Benefits', href: '/#benefits' },
      { label: 'FAQ', href: '/#faq' },
      { label: 'Request a Demo', href: '/#demo' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'Our Company', href: 'https://ajnalab.com/', target: '_blank' },
      { label: 'Our Services', href: 'https://ajnalab.com/services', target: '_blank' },
      { label: 'Ajna In Healthcare', href: 'https://ajnalab.com/services/healthcare-technology', target: '_blank' },
      { label: 'Ajna hOS', href: 'https://ajnalab.com/hospital-product/ajna-hos-enterprise', target: '_blank' },
      { label: 'Careers', href: 'https://ajnalab.com/careers', target: '_blank' },
    ],
  },
  {
    title: 'hOS',
    links: [
      { label: 'Healthy Ayush', href: '/' },
      { label: 'Clinic Pro', href: 'https://ajnalab.com/hospital-product/clinic-pro', target: '_blank' },
      { label: 'Clinic Care', href: 'https://ajnalab.com/hospital-product/clinic-care', target: '_blank' },
      { label: 'hOS Standard Edition', href: 'https://ajnalab.com/hospital-product/ajna-hos-standard' },
      { label: 'hOS Enterprise Edition', href: 'https://ajnalab.com/hospital-product/ajna-hos-enterprise' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: 'https://ajnalab.com/privacy-policy', target: '_blank' },
      { label: 'Terms of Service', href: 'https://ajnalab.com/terms-of-service', target: '_blank' },
      { label: 'GDPR', href: 'https://ajnalab.com/gdpr', target: '_blank' },
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="xl:grid xl:grid-cols-3 xl:gap-12">
          <div className="space-y-8 xl:col-span-1 mb-10 xl:mb-0 text-center xl:text-left">
            <div className="flex flex-col items-center xl:items-start gap-3 w-full">
              <Link
                href="/"
                className="inline-block focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-md"
              >
                <Image
                  className="h-16 w-auto mx-auto xl:mx-0"
                  src={Logos}
                  alt="Healthy Ayush Logo"
                />
              </Link>
              <div className="flex items-center gap-2 xl:ml-20">
                <p className="text-gray-600 text-sm font-medium">
                  By
                </p>
                <Link
                  href="https://ajnalab.com/"
                  target='_blank'
                >
                <Image
                    className="h-12 w-auto mx-auto xl:mx-0"
                    src={Ajna_Lab_Logo}
                    alt="Ajna Lab Logo"
                  />
                </Link>
              </div>
              {/* <p className="text-gray-600 text-center mt-4 xl:text-left">
                Healthy Ayush is a complete healthcare management system that enables 
                local governments to deliver accessible, efficient, <br />and data-driven healthcare 
                for their citizens.
              </p> */}
              <div className="flex justify-center mt-4 xl:justify-start space-x-5">
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
                        target={link.target ? link.target : '_self'}
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
            © {currentYear} Healthy Ayush. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
