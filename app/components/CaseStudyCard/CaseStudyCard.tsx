import { motion, Variants } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import { stripHtml } from '../stripHtml'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import { CaseStudy } from '@/types/types'


const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
}

const CaseStudyCard = ({ study }: { study: CaseStudy }) => {
    return (
        <motion.div
            key={study.id}
            variants={itemVariants}
            className="bg-white rounded-2xl border border-slate-200/80 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
        >
            <div className="p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                    <Image
                        width={100}
                        height={100}
                        src={study.image}
                        alt={`${study.slug} logo`}
                        className="h-10 w-auto"
                    />
                    {/* <span className="text-lg font-semibold text-slate-800">
                      {study.client}
                    </span> */}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-teal-700 mb-4">
                    {study.title}
                </h2>
                <p className="text-slate-600 leading-relaxed max-w-3xl mb-8">
                    {stripHtml(study.short_description)}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-slate-200 pt-8">
                    {/* {study.metrics.map((metric, index) => (
                      <div key={index}>
                        <p className="text-3xl font-extrabold text-teal-600">
                          {metric.value}
                        </p>
                        <p className="text-sm text-slate-500">{metric.label}</p>
                      </div>
                    ))} */}
                </div>
                <div className="mt-8">
                    <Link
                        href={`/case-studies/${study.slug}/`}
                        className="font-semibold text-teal-600 hover:text-teal-800 inline-flex items-center group"
                    >
                        Read Full Study
                        <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default CaseStudyCard