'use client'
import React, { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Users, Clipboard, Activity, Server } from 'lucide-react'
import Image from 'next/image'

interface Solutions {
  id: number
  title: string
  description: string
  image: string
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  logo: {
    name: string
    icon: React.ReactElement
  }
}

const solutions: Solutions[] = [
  {
    id: 1,
    title: 'Healthy Ayush',
    description:
      'Empower local governments with data-driven insights, citizen health records, and seamless coordination across health posts.',
    image: '/assets/images/Health_Ayush_2.png',
    Icon: Users,
    logo: {
      name: 'Healthy Ayush',
      icon: <Users className="w-8 h-8 text-white" />,
    },
  },
  {
    id: 2,
    title: 'Clinic Pro',
    description:
      'An all-in-one tool for solo doctors. Manage appointments, prescriptions, and billing effortlessly to focus on care, not paperwork.',
    image: '/assets/images/clinic_pro_home.png',
    Icon: Clipboard,
    logo: {
      name: 'Clinic Pro',
      icon: <Clipboard className="w-8 h-8 text-white" />,
    },
  },
  {
    id: 3,
    title: 'Ajna hOS SE',
    description:
      'Built for high-tech polyclinics managing multiple doctors and high patient volume. Streamlined workflows keep care efficient and patients satisfied.',
    image: '/assets/images/Ajna_hOS_standard.png',
    Icon: Activity,
    logo: {
      name: 'Ajna hOS SE',
      icon: <Activity className="w-8 h-8 text-white" />,
    },
  },
  {
    id: 4,
    title: 'Ajna hOS EE',
    description:
      'Bring every hospital department together in one seamless system from OPD to IPD. Features role-based access, secure records, and real-time analytics.',
    image: '/assets/images/Ajna_hOS_enterprise_home.png',
    Icon: Server,
    logo: {
      name: 'Ajna hOS EE',
      icon: <Server className="w-8 h-8 text-white" />,
    },
  },
]

const SolutionsSection = () => {
  const scrollRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end end'],
  })

  useEffect(() => {
    return scrollYProgress.on('change', latest => {
      const index = Math.min(
        Math.floor(latest * solutions.length),
        solutions.length - 1
      )
      setActiveIndex(index)
    })
  }, [scrollYProgress])

  const scrollbarY = useTransform(scrollYProgress, [0, 1], ['0%', '80%'])

  return (
    <div className="bg-indigo-700/2 text-white font-sans py-24 sm:py-32">
      <div className="container md:w-[80%] mx-auto px-6">
        <h3 className="text-4xl md:text-5xl text-black font-bold text-center">
          Our Suite of
          <br /> Healthcare Solutions
        </h3>

        <div ref={scrollRef} className="hidden lg:flex mt-24 relative">
          <div className="w-20 shrink-0 relative">
            <div className="sticky top-40 h-[500px]">
              <div className="w-1 h-full bg-slate-700/50 rounded-full" />
              <motion.div
                className="w-1 h-1/5 bg-red-500/50 rounded-full"
                style={{ top: scrollbarY, position: 'absolute' }}
              />
            </div>
          </div>

          <div className="w-1/3 shrink-0 pr-12">
            {solutions.map((solution, index) => (
              <div key={index} className="h-[500px] flex items-center">
                <motion.div
                  initial={{ opacity: 0.2 }}
                  animate={{ opacity: activeIndex === index ? 1 : 0.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <h4 className="text-5xl text-[#1f88e6] font-bold">
                    {solution.title}
                  </h4>
                  <p className="text-teal-800 mt-4 leading-relaxed text-xl">
                    {solution.description}
                  </p>
                  {/* <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="mt-6 bg-teal-700 hover:bg-indigo-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md inline-flex items-center"
                  >
                    Book A Demo <FiArrowRight className="ml-2" />
                  </motion.button> */}
                </motion.div>
              </div>
            ))}
          </div>

          <div className="w-1/2 grow relative">
            <div className="sticky top-40 h-[500px]">
              <AnimatePresence>
                {solutions.map(
                  (solution, index) =>
                    activeIndex === index && (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className="absolute inset-0 w-full h-full"
                      >
                        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-800">
                          <Image
                            width={1000}
                            height={1000}
                            src={solution.image}
                            alt={solution.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-4 left-4 bg-slate-900/50 backdrop-blur-sm p-2 rounded-lg flex items-center gap-3">
                            {solution.logo.icon}
                            <span className="font-semibold">
                              {solution.logo.name}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="lg:hidden mt-16 space-y-12">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-full rounded-lg overflow-hidden mb-6">
                <Image
                  width={1000}
                  height={1000}
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 left-2 bg-slate-900/50 backdrop-blur-sm p-2 rounded-lg flex items-center gap-2">
                  {React.cloneElement(solution.logo.icon, {
                    // className: 'w-6 h-6 text-white',
                  })}
                  <span className="font-semibold text-sm">
                    {solution.logo.name}
                  </span>
                </div>
              </div>
              <h4 className="text-xl font-bold">{solution.title}</h4>
              <p className="text-slate-300 mt-2 text-sm leading-relaxed">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SolutionsSection
