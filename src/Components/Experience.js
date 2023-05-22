import {motion, useScroll} from 'framer-motion'
import { useRef } from 'react'
import ExpIcon from './ExpIcon'

const Details = ({position, company, companyLink, time, work, address}) => {
    const first = useRef(null)
    return <li ref={first} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
       
        <ExpIcon reference={first}/>
        <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:'spring'}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a href={companyLink} target="_blank" className='text-primary 
            dark:text-primaryDark capitalize'>@{company}</a></h3>

            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>{time} | {address}</span>

            <p className='w-full font-medium md:text-sm'>{work}</p>
        </motion.div>
    </li>
}

function Experience() {
    const ref = useRef()
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ['start end', 'center start']
    })
  return (
    <>
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl md:mb-16 xs:text-4xl'>
                Experience
            </h2>

            <div ref={ref} className='w-[75%] lg:w-[90%] md:w-full mx-auto relative'>

                <motion.div style={{scaleY: scrollYProgress}} className='absolute h-full left-9 top-0 w-[4px] bg-dark origin-top dark:bg-light 
                md:w-[2px] md:left-[30px] xs:left-[20px]'/>

                <ul className='w-full flex flex-col justify-between items-start ml-4 xs:ml-2 '>
                    <Details 
                        position='Web Developer' company='WandeHospital'
                        time='March 2020 - May 2020' address='Ogun State, NG'
                        work='Utilized HTML, CSS, and JavaScript to create a responsive design that works seamlessly across desktop and mobile devices.
                        Ensured accessibility for users with disabilities by implementing features such as alternative text for images, 
                        keyboard navigation, and ARIA labels.
                        Collaborated with the hospital marketing team to understand their branding guidelines and incorporated them into the 
                        design of the landing page.'
                    />

                    <Details 
                        position='Frontend Developer' company='LerifStores'
                        time='December 2021 - February 2022' address='Kaduna State, NG'
                        work='Collaborated with UI/UX designers to ensure seamless user experience and design consistency throughout the site.
                        Optimized website performance by implementing best practices in web development and utilizing tools 
                        like Google Lighthouse and GTmetrix.
                        Implemented accessibility features such as alternative text for images, keyboard navigation, and 
                        ARIA labels to ensure the website was accessible to users with disabilities.
                        Integrated third-party APIs for payment processing, inventory management, and shipping tracking.'
                    />

                    <Details 
                        position='Web Developer' company='AACEI Nigeria Section' companyLink='www.aaceinigeriasection.org'
                        time='October 2022 - December 2022' address='FCT Abuja, NG'
                        work='Developed and implemented responsive website design to ensure optimal viewing across all devices.
                        Created and maintained web pages using HTML, CSS, and JavaScript.'
                    />

                    <Details 
                        position='Web Developer' company='Sanmikindpe' companyLink='www.sanmiakindipe.com'
                        time='January 2023 - February 2023' address='FCT Abuja, NG'
                        work='Designed and implemented user interface elements using modern front-end frameworks such as React.
                        Improved website load times by optimizing images and leveraging lazy loading.
                        Utilized modern development tools like Git, NPM, and Webpack to streamline development workflow and improve collaboration.'
                    />
                </ul>
            </div>
        </div>
    </>
  )
}

export default Experience