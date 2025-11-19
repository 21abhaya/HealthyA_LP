"use client"

import { motion } from "framer-motion"
import { SearchX } from "lucide-react"
import Link from "next/link"

export default function NotFound({type}: {type?: string}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center justify-center text-center py-24 px-4 mt-5"
    >
      <div className="bg-muted/30 p-6 rounded-full mb-6 shadow-sm">
        <SearchX className="w-12 h-12 text-muted-foreground" />
      </div>

      <h1 className="text-3xl font-bold text-foreground">
        404 — Post Not Found
      </h1>

      <p className="mt-3 text-muted-foreground max-w-md">
        The {`${type}`} you’re looking for doesn’t seem to exist or may have been removed.
      </p>

        <Link href="/">
      <motion.div
        
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="mt-8 inline-block bg-primary text-primary-foreground font-medium px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition-all"
        >
        Go Back Home
      </motion.div>
          </Link>
    </motion.div>
  )
}
