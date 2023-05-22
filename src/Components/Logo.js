import React from "react";
import Link from "next/link";
import { motion } from "framer-motion"

function Logo() {
  return (
    <div className='flex items-center justify-center mt-2'>
      <Link href='/'>
        <motion.a
          className='w-16 h-16 bg-dark dark:border-light border border-solid border-transparent text-light rounded-full flex items-center justify-center font-bold text-2xl'
          whileHover={{ backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
          transition:{duration:1, repeat: Infinity}
          }}
          key="logo"
        >
          AD
        </motion.a>
      </Link>
    </div>
  )
}

export default Logo
