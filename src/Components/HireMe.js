import Link from 'next/link'
import React from 'react'
import { CircularText } from './Icons'

function HireMe() {
  return (
    <div className='left-4 bottom-4 flex items-center justify-center overflow-hidden absolute md:right-8 md:left-auto md:top-0 md:bottom-auto'>
        <div className='w-48 h-auto flex items-center justify-center relative md:w-24'>
            <CircularText className={"fill-dark animate-spin-slow dark:fill-light"}/>

            <Link href='mailto:adeola670@gmail.com' target='_blank' className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md bg-dark text-light border border-solid
             border-dark w-20 h-20 font-semibold rounded-full hover:bg-light hover:text-dark dark:bg-light dark:text-dark md:w-12 md:h-12 md:text-[10px]'>
                Hire Me
            </Link>
        </div>
    </div>
  )
}

export default HireMe