'use client'
import React from 'react'
import {motion} from 'framer-motion'

const TextAnimation = () => {
  return (
    <div className="h-1/2 lg:h-full mb-4 flex items-center justify-center text-4xl lg:text-6xl">
          <div className="text-white">
            {"Get in Touch!".split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            
          </div>
        </div>
  )
}

export default TextAnimation