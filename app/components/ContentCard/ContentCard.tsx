'use client'

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ContentCardProps {
  title?: string;
  lastUpdated?: string;
  children: ReactNode;
}

export default function ContentCard({ title, lastUpdated, children }: ContentCardProps) {
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center px-4 py-24 mt-25 font-sans text-slate-800">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-7xl bg-white shadow-md rounded-4xl p-6 sm:p-10 md:p-16 border border-slate-200"
      >
        {title && (
          <header className="border-b border-slate-200 pb-6 mb-10">
            <h1 className="text-4xl font-bold text-slate-900">{title}</h1>
            {lastUpdated && (
              <p className="text-sm text-slate-500 mt-2">
                Last updated: <strong>{lastUpdated}</strong>
              </p>
            )}
          </header>
        )}

        <section className="space-y-8 leading-relaxed">
          {children}
        </section>
      </motion.div>
    </div>
  );
}
