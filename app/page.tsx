'use client'

import React, { useState, FC } from 'react'
import { motion, AnimatePresence, Variants, useReducedMotion } from 'framer-motion'
import {
  FiArrowRight,
  FiStar,
  FiChevronLeft,
  FiChevronRight,
} from 'react-icons/fi'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import SolutionsSection from './components/layouts/SolutionsComponent'

import {
  valueThemes,
  values,
  testimonials,
  clients,
} from '../app/lib/homeData'
import MainImg from '@/public/assets/images/generated-image.png'
import AboutImg from '@/public/assets/images/about-hero1.png'
import underline from '@/public/assets/images/one.png'
import CurveLine from '@/public/assets/images/curve-blue.png'

import Image from 'next/image'

import JsonLd from './components/JsonLd'

import {
  ValueTheme,
  Value,
  Client,
  ValueCardProps
} from '@/types/types'
import Link from 'next/link'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100 },
  },
}

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 120, duration: 0.8 },
  },
}

const ValueCard: FC<ValueCardProps> = ({
  number,
  title,
  text,
  theme,
  icon: Icon,
}) => (
  <div className="relative w-full max-w-xs mx-auto">
    {/* Number Badge */}
    <div className="absolute -top-5 left-4 z-10">
      <div
        className={`w-10 h-10 rounded-full border-4 flex items-center justify-center text-sm font-semibold ${theme.borderColor} ${theme.bgColor} ${theme.textColor}`}
      >
        {number}
      </div>
    </div>

    <div
      className={`relative w-full min-h-[290px] rounded-xl shadow-md bg-white pt-8 pb-4 px-4 border-t-4 ${theme.borderColor}`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 flex-shrink-0">
            <Icon className="w-3 h-3" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">
            {title}
          </h3>
        </div>

        <p className="text- text-gray-700 leading-relaxed ">{text}</p>
      </div>
    </div>
  </div>
)

const HomePage: FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const shouldReduceMotion = useReducedMotion()

    const heroAnimationVariants = shouldReduceMotion ? {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  } : {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 2, delay: 0.5 } }
  }

  return (
    <>
      <JsonLd />
      <div className="bg-gray-100 text-gray-700 font-inter">
        {/* Hero Section */}
        <div className="relative min-h-screen bg-slate-900 text-white overflow-hidden flex items-center justify-center">
          <div
            className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)',
            backgroundSize: '2rem 2rem',
          }}
        />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(67,56,202,0.15),transparent_80%)]"></div>
        <div className="w-full lg:w-[80%] mx-auto px-6 py-24 relative z-10">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="text-center lg:text-left">
              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tighter"
              >
                Inner Vision.{' '}
                <span className="text-teal-400">Outer Impact.</span>
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                At Ajna Lab, we integrate{' '}
                <span className="font-semibold text-[#0a6fbb]">
                  Health, Agriculture, and Technology (HAT)
                </span>{' '}
                into human-centric digital ecosystems. Our solutions empower
                communities, strengthen institutions, and shape a smarter,
                sustainable future — in Nepal and beyond.
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <Link href="/hospital-product">
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                      boxShadow: '0 10px 20px rgba(20, 184, 166, 0.25)',
                    }}
                    whileTap={{ scale: 0.98, y: 0 }}
                    className="w-full sm:w-auto bg-teal-500 text-slate-900 font-bold py-3 px-8 rounded-lg hover:bg-teal-400 transition-all duration-300 flex items-center justify-center shadow-lg text-base"
                  >
                    Explore Solutions <FiArrowRight className="ml-2" />
                  </motion.div>
                </Link>
                <Link href="/book-a-demo">
                  <motion.div
                    whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98, y: 0 }}
                    className="w-full sm:w-auto bg-transparent ring-1 ring-slate-700 text-slate-300 font-semibold py-3 px-8 rounded-lg hover:bg-slate-800 hover:text-white transition-colors text-base"
                  >
                    Book a Demo
                  </motion.div>
                </Link>
              </motion.div>
            </div>
            <motion.div
              className="mt-16 lg:mt-6 flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 3, delay: 0.5, ease: 'easeOut' }}
            >
              <div className="relative w-full max-w-xl">
                <motion.div
                  className="absolute inset-[-10px] bg-[conic-gradient(from_90deg_at_50%_50%,#2ED573_0%,#1E90FF_50%,#2ED573_100%)] rounded-full blur-3xl opacity-40"
                  animate={shouldReduceMotion ? {} : { rotate: 360 }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
                <motion.div
                  animate={{ y: [-10, 10] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    ease: 'easeInOut',
                  }}
                >
                  <Image
                    width={600}
                    height={450}
                    src={MainImg}
                    alt="Doctor working on Hospital Management Software"
                    className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
                    priority
                    quality={80}
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-slate-50 py-24 sm:py-32 overflow-hidden">
        <div className="w-full lg:w-[80%] mx-auto px-6">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div
              className="relative flex justify-center items-center"
              variants={imageVariants}
            >
              <div className="hidden lg:block absolute w-full h-full bg-gradient-to-tr from-indigo-200 to-teal-100 rounded-3xl blur-3xl opacity-60"></div>
              <motion.div
                className="relative"
                whileHover={shouldReduceMotion ? {} :{
                  scale: 1.05,
                  transition: { type: 'spring', stiffness: 200 },
                }}
              >
                <Image
                  width={700}
                  height={450}
                  src={AboutImg}
                  alt="Ajna Lab Logo"
                  className="relative z-10 md:w-[600px] w-full  object-fill max-w-sm mx-auto rounded-lg"
                  priority={false}
                  loading="lazy"
                  quality={75}
                />
              </motion.div>
            </motion.div>
            <div className="text-center lg:text-left">
              <motion.span
                variants={itemVariants}
                className="inline-block text-sm font-semibold text-[#0f648e] bg-indigo-50 px-3 py-1 rounded-full mb-4"
              >
                Our Story
              </motion.span>
              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl font-extrabold text-teal-900 tracking-tighter"
              >
                Innovation Driven by{' '}
                <span className="text-[#1f88e6]">Intuition</span>
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="mt-6 text-lg text-slate-600 leading-relaxed"
              >
                {`Ajna Lab’s journey is just beginning, driven by bold steps and a vision for smarter innovation. Starting with digital health, Ajna hOS is evolving into an adaptive system that redefines how clinics, hospitals, and networks operate—moving beyond tools to create seamless ecosystems that anticipate needs and make complexity effortless.`}
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="mt-4 text-lg text-slate-600 leading-relaxed"
              >
                {`Guided by our HAT Model—Health, Agriculture, and Technology—we aim to break boundaries and uplift communities by building scalable, sustainable digital solutions. As we move forward, we remain committed to connecting vital sectors, delivering human-centric technologies, and shaping progress that not only serves the present but unlocks future potential—creating impact in Nepal and beyond.`}
              </motion.p>
              <motion.div variants={itemVariants} className="mt-8">
                <Link href="/about">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98, y: 0 }}
                    className="inline-flex items-center gap-2 text-base font-semibold text-teal-600 hover:text-teal-800/80 transition-colors"
                  >
                    Learn More About Our Mission <FiArrowRight />
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Why Ajna Lab? */}
      <div className="py-10 sm:py-16 md:py-20 bg-white">
        <div className="my-4 sm:my-8 md:my-12">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-teal-800 text-center">
            Why{' '}
            <span
              className={`relative inline-block font-bold text-[#1f88e6] before:content-[''] before:absolute before:-bottom-16 sm:before:-bottom-20 md:before:-bottom-28 lg:before:-bottom-40 before:left-0 before:w-full before:h-[100px] sm:before:h-[150px] md:before:h-[200px] lg:before:h-[300px] before:bg-[url(${underline})] before:bg-contain before:bg-no-repeat before:bg-center`}
            >
              Ajna Lab
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl py-6 font-medium text-gray-600 text-center">
            From Ideas to Impact
          </p>
        </div>
        <div className="w-11/12 lg:w-4/5 xl:w-[80%] my-8 md:my-12 mx-auto relative px-2 sm:px-4">
          <div className="absolute inset-0 flex justify-center items-center">
            <Image
              width={800}
              height={600}
              src={CurveLine}
              alt="Arrow line"
              className="object-contain hidden lg:block w-full max-w-5xl"
            />
          </div>
          <motion.div
            className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-y-20 lg:gap-10 relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {valueThemes.map((value: ValueTheme, index: number) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="w-full"
              >
                <ValueCard
                  number={`0${index + 1}`}
                  title={value.title}
                  text={value.text}
                  theme={value.theme}
                  icon={value.icon}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <SolutionsSection />

      {/* Work Beyond Healthcare */}
      <div className="bg-slate-200 py-24 sm:py-32 overflow-hidden">
        <div className="w-full lg:w-[80%] mx-auto px-6">
          <motion.div
            className="md:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-extrabold text-teal-900 tracking-tighter">
                Our Work Beyond Healthcare
              </h2>
              <blockquote className="mt-6 border-l-4 border-slate-300 pl-6">
                <p className="text-lg text-slate-600 leading-relaxed">
                  “Alongside healthcare, we continue to partner with
                  institutions to build learning platforms, consultancy systems,
                  and enterprise-grade web and mobile applications. Innovation
                  is in our DNA.”
                </p>
              </blockquote>
            </motion.div>
            <motion.div className="w-full mt-8 md:mt-0" variants={itemVariants}>
              <Swiper
                modules={[Autoplay]}
                loop={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                spaceBetween={40}
                breakpoints={{
                  320: { slidesPerView: 2 },
                  640: { slidesPerView: 3 },
                  1024: { slidesPerView: 4 },
                }}
              >
                {clients.map((client: Client, index: number) => (
                  <SwiperSlide key={index}>
                    <div className="flex justify-center items-center h-24">
                      <Image
                        width={800}
                        height={600}
                        src={client.logo}
                        alt={client.name}
                        className="h-[100px] w-[100px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
                        loading="lazy"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Vision & Values */}
      <div className="bg-slate-50 py-24 sm:py-32">
        <div className="w-full lg:w-[80%] mx-auto px-6">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-extrabold text-teal-900 tracking-tighter mb-6"
            >
              Our Vision & Values
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 mb-16 md:px-15 leading-relaxed"
            >
              “The road is long, but our vision is clear. We are committed to
              building technology that serves people, institutions, and
              society.”
            </motion.p>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {values.map((value: Value, index: number) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow:
                    '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
                }}
                className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-lg border-t-4 border-t-indigo-500 text-center"
              >
                <div className="inline-flex items-center justify-center bg-indigo-50 text-indigo-600 rounded-lg w-16 h-16 mb-6">
                  <value.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-slate-100 py-24 sm:py-32">
        <div className="w-full lg:w-[80%] mx-auto px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-extrabold text-teal-900 tracking-tighter mb-4"
            >
              What Our Clients Say
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 mb-16 leading-relaxed"
            >
              {`We're proud to have earned the trust of leading healthcare
              providers. Here's what they have to say about their experience
              with Ajna Lab.`}
            </motion.p>
          </motion.div>
          <motion.div
            className="relative max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              loop={true}
              autoplay={{ delay: 6000, disableOnInteraction: false }}
              navigation={{
                nextEl: '.testimonial-swiper-button-next',
                prevEl: '.testimonial-swiper-button-prev',
              }}
              pagination={{
                el: '.testimonial-swiper-pagination',
                clickable: true,
              }}
              slidesPerView={1}
              spaceBetween={30}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white rounded-2xl border border-slate-200/80 shadow-lg p-8 md:p-12 relative overflow-hidden">
                    <FiStar className="absolute top-8 left-8 text-7xl text-slate-100/80 z-0" />
                    <div className="relative z-10 flex flex-col items-center text-center">
                      {/* Stars */}
                      <div className="flex text-yellow-400 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <FiStar key={i} className="w-5 h-5 fill-current" />
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="text-lg md:text-xl text-slate-600 italic flex-grow mb-8 leading-relaxed">
                        “{testimonial.quote}”
                      </p>

                      {/* Author */}
                      <div className="flex items-center mt-auto">
                        <Image
                          width={800}
                          height={600}
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          className="w-16 h-16 rounded-full object-cover mr-5 border-2 border-slate-200"
                          loading="lazy"
                        />
                        <div>
                          <p className="font-bold text-lg text-slate-900">
                            {testimonial.author}
                          </p>
                          <p className="text-base text-slate-500">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="testimonial-swiper-button-prev absolute top-1/2 -translate-y-1/2 -left-4 md:-left-16 cursor-pointer p-3 bg-white rounded-full shadow-md hover:bg-slate-100 transition-colors z-20">
              <FiChevronLeft className="w-6 h-6 text-slate-600" />
            </div>
            <div className="testimonial-swiper-button-next absolute top-1/2 -translate-y-1/2 -right-4 md:-right-16 cursor-pointer p-3 bg-white rounded-full shadow-md hover:bg-slate-100 transition-colors z-20">
              <FiChevronRight className="w-6 h-6 text-slate-600" />
            </div>
            <div className="testimonial-swiper-pagination !relative !bottom-0 mt-8 flex justify-center"></div>
          </motion.div>
          <div className="mt-12 text-center">
            <Link href="/testimonials">
              <motion.div
                className="w-full sm:w-auto inline-flex items-center justify-center text-base font-semibold text-[#1f88e6]/80 transition-all duration-300 hover:text-[#1f88e6] hover:scale-105"
              >
                View More Testimonials
                <FiArrowRight className="ml-2 h-5 w-5" />
              </motion.div>
            </Link>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      {/* <div className="bg-white py-24 sm:py-32">
        <div className="w-full lg:w-[80%] mx-auto px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-extrabold text-teal-900 tracking-tighter mb-4"
            >
              Our Memories
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 mb-16 leading-relaxed"
            >
              A glimpse into our journey, our team, and the moments that define
              us.
            </motion.p>
          </motion.div>
          <motion.div
            className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {gallery.map((image: GalleryImage, index: number) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="overflow-hidden rounded-lg shadow-lg cursor-pointer break-inside-avoid"
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  boxShadow:
                    '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
                }}
                onClick={() => setSelectedImage(image.src)}
              >
                <Image
                  width={800}
                  height={600}
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-12 text-center">
            <Link href="/gallery">
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  boxShadow: '0 10px 20px rgba(79, 70, 229, 0.25)',
                }}
                whileTap={{ scale: 0.98, y: 0 }}
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-[#1f88e6]/90 px-8 py-3 text-base font-semibold text-white shadow-lg hover:bg-[#1f88e6] transition-all duration-300"
              >
                View More Gallery
                <FiArrowRight className="ml-2 h-5 w-5" />
              </motion.div>
            </Link>
          </div>
        </div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                className="relative"
              >
                <Image
                  width={800}
                  height={600}
                  src={selectedImage}
                  alt="Selected view"
                  className="max-w-[95vw] max-h-[90vh] lg:max-w-7xl rounded-lg shadow-2xl"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div> */}

      {/* Final CTA Section */}
      <div className="relative bg-slate-900 py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-700/10 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        <div className="w-full lg:w-[80%] mx-auto px-6 text-center relative z-10">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter"
            >
              Ready to See with the Third Eye?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg text-slate-300 max-w-3xl mx-auto leading-8"
            >
              Discover how Ajna hOS can bring unparalleled clarity and
              efficiency to your institution. Schedule a personalized demo with
              our experts today.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/book-a-demo">
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    boxShadow: '0 10px 20px rgba(79, 70, 229, 0.25)',
                  }}
                  whileTap={{ scale: 0.98, y: 0 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-teal-600 px-8 py-3 text-base font-semibold text-white shadow-lg hover:bg-teal-700 transition-all duration-300"
                >
                  Request a Demo
                  <FiArrowRight className="ml-2 h-5 w-5" />
                </motion.div>
              </Link>
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98, y: 0 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-slate-800/80 px-8 py-3 text-base font-semibold text-slate-300 ring-1 ring-slate-700 hover:bg-slate-700 hover:text-white transition-colors"
                >
                  Contact Us
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
    </>
  )
}

export default HomePage
