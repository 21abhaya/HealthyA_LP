"use client"

import { motion } from "framer-motion"
import { FileSearch } from "lucide-react"
import React from "react"
import { EmptyStateProps } from "@/types/types"
import GotoHomeButton from "./GotoHomeButton"

export default function EmptyState({
  message,
  description,
  icon,
}: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={"flex flex-col items-center justify-center text-center px-4"}
    >
      <div className="bg-muted/40 p-6 rounded-full mb-1 shadow-sm">
        {icon || <FileSearch className="w-10 h-10 text-muted-foreground" />}
      </div>

      <h2 className="text-3xl font-semibold text-foreground">{message}</h2>

      {description && (
        <p className="text-md text-muted-foreground mt-4 max-w-sm">{description}</p>
      )}

      <GotoHomeButton />
    </motion.div>
  )
}
