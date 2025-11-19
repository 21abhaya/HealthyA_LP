'use client'
import {
  FiBriefcase,
  FiCode,
  FiHome,
  FiMessageCircle,
  FiServer,
  FiSmartphone,
  FiTrendingUp,
  FiUsers,
} from 'react-icons/fi'
import { IconType } from 'react-icons'

// --- Data Structures ---
export interface MegaMenuSubItem {
  href: string
  label: string
  icon: IconType
  description: string
  isFeatured?: boolean
}

export interface NavItemBase {
  label: string
  href: string
}

export interface NavLinkItem extends NavItemBase {
  type: 'link'
}

export interface NavMegaItem extends NavItemBase {
  type: 'mega'
  subItems: MegaMenuSubItem[]
}

export type NavItem = NavLinkItem | NavMegaItem

// --- Navigation Data ---
export const navItemsData: NavItem[] = [
  { href: '/', label: 'Home', type: 'link' },
  { href: '/about', label: 'About Us', type: 'link' },
  {
    label: 'Solutions',
    href: '/hospital-product',
    type: 'mega',
    subItems: [
      {
        href: '/hospital-product/palika-care',
        label: 'Healthy Ayush',
        icon: FiHome,
        description: 'For municipal-level healthcare.',
      },
      {
        href: '/hospital-product/clinic-pro',
        label: 'Clinic Pro',
        icon: FiUsers,
        description: 'For solo doctors & small clinics.',
      },
      {
        href: '/hospital-product/clinic-care',
        label: 'Clinic Care',
        icon: FiBriefcase,
        description: 'For busy, high-tech polyclinics.',
      },
      {
        href: '/hospital-product/ajna-hos-standard',
        label: 'Ajna hOS Standard',
        icon: FiTrendingUp,
        description: 'Comprehensive hospital solution.',
      },
      {
        href: '/hospital-product/ajna-hos-enterprise',
        label: 'Ajna hOS Enterprise',
        icon: FiTrendingUp,
        description: 'For large-scale hospital networks.',
        isFeatured: true,
      },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    type: 'mega',
    subItems: [
      {
        href: '/services/custom-software-development',
        label: 'Custom Software Development',
        icon: FiCode,
        description: 'Tailored software solutions for your needs.',
        isFeatured: true,
      },
      {
        href: '/services/mobile-application-development',
        label: 'Mobile Application Development',
        icon: FiSmartphone,
        description: 'Engaging mobile apps for all platforms.',
      },
      {
        href: '/services/healthcare-technology',
        label: 'Healthcare Technology',
        icon: FiServer,
        description: 'Innovative tech for the healthcare sector.',
      },
      {
        href: '/services/consultation-services',
        label: 'Consultation Services',
        icon: FiMessageCircle,
        description: 'Expert advice to drive your business forward.',
      },
    ],
  },
  // {
  //   label: 'Resources',
  //   href: '/resources',
  //   type: 'mega',
  //   subItems: [
  //     {
  //       href: '/blog',
  //       label: 'Blog / Insights',
  //       icon: FiBookOpen,
  //       description: 'Latest news and industry analysis.',
  //     },
  //     {
  //       href: '/case-studies',
  //       label: 'Case Studies',
  //       icon: FiBriefcase,
  //       description: 'See our solutions in action.',
  //     },
  //     {
  //       href: '/whitepapers',
  //       label: 'Whitepapers',
  //       icon: FiMessageSquare,
  //       description: 'In-depth research and reports.',
  //     },
  //   ],
  // },
  { href: '/blog', label: 'Blog', type: 'link' },
  { href: '/careers', label: 'Careers', type: 'link' },
  // { href: '/contact', label: 'Contact Us', type: 'link' },
]
