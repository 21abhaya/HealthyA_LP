'use client'
import { motion } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { PaginationProps } from '@/types/types'

export const Pagination: React.FC<PaginationProps> = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}) => {
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="mt-16 flex justify-center items-center space-x-2"
      aria-label="Pagination"
    >
      <button
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center px-4 py-2 text-sm font-medium text-slate-600 bg-white rounded-md border border-slate-300 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <FiChevronLeft className="mr-2" />
        Prev
      </button>

      {pageNumbers.map(number => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={`px-4 py-2 text-sm font-medium rounded-md border transition-colors ${
            currentPage === number
              ? 'bg-teal-600 text-white border-teal-600'
              : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-50'
          }`}
        >
          {number}
        </button>
      ))}

      <button
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === pageNumbers.length}
        className="flex items-center px-4 py-2 text-sm font-medium text-slate-600 bg-white rounded-md border border-slate-300 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
        <FiChevronRight className="ml-2" />
      </button>
    </motion.nav>
  )
}
