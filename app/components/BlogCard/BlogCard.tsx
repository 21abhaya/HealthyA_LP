import { motion } from 'framer-motion'
import { FiArrowRight, FiClock } from 'react-icons/fi'
import { itemVariants } from '@/app/components/AccordionItem/AccordionItemComponent'
import Image from 'next/image'
import Link from 'next/link';
import { Post } from '@/types/types';
import { FaFolderOpen } from 'react-icons/fa';

export const BlogCard = ({ post }: { post: Post }) => (
  <motion.div
    variants={itemVariants}
    className="bg-white rounded-2xl shadow-lg overflow-hidden group border border-transparent hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
  >
    <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
      <Image
        width={500}
        height={500}
        src={post.image}
        alt={post.title}
        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </Link>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-gray-900 mb-3">
        <Link
          href={`/blog/${post.slug}`}
          className="hover:text-indigo-600 transition-colors"
        // state = {{ ref: "detailpage", id: post.id }}
        >
          {post.title}
        </Link>
      </h3>
      <p className="text-gray-600 line-clamp-3 mb-4 flex-grow">
        <span dangerouslySetInnerHTML={{ __html: post.short_description }}></span>
      </p>
      <div className="flex items-center text-sm text-gray-500 pt-4 border-t border-gray-100">
        <FaFolderOpen className="mr-2 text-teal-600" /> {post.category.category_name || "Uncategorized"}
        <span className="mx-2">|</span>
        <FiClock className="mr-2 text-teal-600" /> {post.readTime || "5 min read"}
      </div>
      <div className="mt-6">
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center font-semibold text-indigo-600 hover:text-indigo-800 transition-colors group-hover:text-indigo-700"
        >
          Read Full Post
          <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  </motion.div>
)

