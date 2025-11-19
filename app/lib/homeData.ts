import {
  FiAward,
  FiCompass,
  FiHeart,
  FiUsers,
  FiCpu,
  FiLayers,
  FiShield,
} from 'react-icons/fi'

import type { IconType } from 'react-icons'

import Testimo1 from '@/public/assets/images/testimonials1.png'
import Testimo2 from '@/public/assets/images/testimonials2.png'
import Testimo3 from '@/public/assets/images/testimonials3.png'
import { StaticImageData } from 'next/image'

interface ValueTheme {
  icon: IconType
  title: string
  text: string
  theme: {
    borderColor: string
    textColor: string
    bgColor: string
  }
}

interface Value {
  icon: IconType
  title: string
  description: string
  theme?: string
}

interface Testimonial {
  quote: string
  author: string
  title: string
  avatar: StaticImageData
}

interface Client {
  name: string
  logo: string
}

interface Gallery {
  src: string
  alt: string
  category?: string
  caption?: string
}

export const valueThemes: ValueTheme[] = [
  {
    icon: FiAward,
    title: 'Proven Expertise',
    text: 'Years of experience building robust EMR, HMIS, and complex enterprise-grade systems for leading institutions.',
    theme: {
      borderColor: 'border-green-500',
      textColor: 'text-green-500',
      bgColor: 'bg-green-50',
    },
  },
  {
    icon: FiCompass,
    title: 'Vision-Driven',
    text: 'Guided by our HAT (Health, Agriculture, Technology) philosophy for sustainable and impactful innovation.',
    theme: {
      borderColor: 'border-yellow-500',
      textColor: 'text-yellow-500',
      bgColor: 'bg-yellow-50',
    },
  },
  {
    icon: FiUsers,
    title: 'Trusted Partnerships',
    text: 'We are committed to serving reputed institutions with the utmost integrity, building relationships that last.',
    theme: {
      borderColor: 'border-blue-500',
      textColor: 'text-blue-500',
      bgColor: 'bg-blue-50',
    },
  },
  {
    icon: FiHeart,
    title: 'Human-Centered',
    text: 'Our technology is meticulously designed to empower people and enhance workflows, not to overwhelm them.',
    theme: {
      borderColor: 'border-red-500',
      textColor: 'text-red-500',
      bgColor: 'bg-red-50',
    },
  },
]

export const values: Value[] = [
  {
    icon: FiCpu,
    title: 'Innovation with Intuition',
    description:
      'We build forward-thinking technology that is not only powerful and intuitive but also deeply aligned with the real needs of industries, institutions, and people who use it.',
  },
  {
    icon: FiLayers,
    title: 'Simplicity with Scale',
    description:
      'Our solutions are designed to be simple and easy to use, yet robust enough to scale with the ambitions of a single clinic or a nationwide hospital network.',
  },
  {
    icon: FiShield,
    title: 'Impact with Integrity',
    description:
      'We are committed to making a real-world impact while operating with complete transparency, ensuring our partners and users can trust us implicitly.',
  },
]

export const testimonials: Testimonial[] = [
  {
    quote:
      'With OPDpay, managing appointments has never been easier. Its intuitive scheduling and timely notifications save both me and my patients valuable time. What truly sets it apart is the analytical dashboard—it helps me track trends, optimize my practice, and make better decisions. OPDpay feels like it was built with healthcare professionals in mind, and it’s a solution ready for both local and global needs.',
    author: 'Prerana Dahal',
    title: 'Psychologist',
    avatar: Testimo3,
  },
  {
    quote:
      'Clinic Care has been a game-changer for our polyclinic. The platform is intuitive for every staff member, from reception to specialists, and its powerful features have streamlined operations like never before. We’ve cut down on administrative tasks and can now dedicate more time to patient care - something every busy clinic truly needs.',
    author: 'Dr. Ashish Dhakal',
    title: 'Psychiatrist',
    avatar: Testimo1,
  },
  {
    quote:
      'As a solo practitioner, I needed a solution that was simple, reliable, and built with doctors in mind. Clinic Pro delivers exactly that. It reduces paperwork, keeps everything organized, and lets me focus on what truly matters - my patients. I can confidently say it’s the best fit for small practices, not just in Nepal but globally.',
    author: 'Dr. Kundan Raj Pandey',
    title: 'Teaching Hospital',
    avatar: Testimo2,
  },
]

export const clients: Client[] = [
  {
    name: 'Client 1',
    logo: 'https://nami.edu.np/images/logo.png',
  },
  { name: 'Client 2', logo: 'https://www.maatrinepal.com/matri-logo.svg' },
  {
    name: 'Client 3',
    logo: 'https://presidential.edu.np/file-manager/photos/1/logo.svg',
  },
  { name: 'Client 4', logo: 'https://ajnalab.com/images/logo.png' },
  {
    name: 'Client 5',
    logo: 'https://nah.gov.np/static/media/nar_logo.df563ea2e902c565f0ea.webp',
  },
  {
    name: 'Client 6',
    logo: 'https://dicesms.asia/static/frontend/assets/images/logo/dice_logo.png',
  },
  {
    name: 'Client 7',
    logo: 'https://budsmontessorischool.edu.np/static/assets/img/logo/logo.svg',
  },
]

export const gallery: Gallery[] = [
  {
    src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800',
    alt: 'Team meeting with laptops',
  },
  {
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
    alt: 'Team collaborating around a whiteboard',
  },
  {
    src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800',
    alt: 'People in a conference room',
  },
  {
    src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800',
    alt: 'Two colleagues discussing work',
  },
  {
    src: 'https://images.unsplash.com/photo-1587560699334-cc426240169f?w=800',
    alt: 'Celebrating a team success',
  },
  {
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800',
    alt: 'Team members looking at a laptop',
  },
]
