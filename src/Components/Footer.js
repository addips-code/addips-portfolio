import Link from 'next/link'
import React from 'react'
import Layout from './Layout'

function Footer() {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg'>
        <Layout className='py-8 flex items-center justify-between'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex items-center'>
                <Link href='/' className='underline underline-offset-2'>Adeola Adeniji</Link>
            </div>
            <Link href='mailto:adeola670@gmail.com' className='underline underline-offset-2' target='_blank'>Say hello</Link>
        </Layout>
    </footer>
  )
}

export default Footer