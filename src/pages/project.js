import AnimatedText from '@/Components/AnimatedText'
import { GithubIcon } from '@/Components/Icons'
import Layout from '@/Components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import addipsnews from '../../public/images/projects/addipsnews.png'
import airbnb from '../../public/images/projects/airbnb.png'
import snapchat from '../../public/images/projects/snapchat.png'
import Niger from '../../public/images/projects/Niger.png'
import aacei from '../../public/images/projects/aacei.png'
import { motion } from 'framer-motion'


const FramerImage = motion(Image);

const FeaturedProject = ({type, title, summary, img, link, github}) => {
    return (
        <article className='w-full flex items-center justify-between rounded-br-2xl
            rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative dark:bg-dark 
            dark:border-light lg:flex-col lg:p-8 sm:rounded-2xl xs:rounded-br-3xl xs:p-4' 
        >
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light xs:-right-2 sm:h-[102%] 
            xs:w-full xs:rounded-[1.5rem]"/>

           <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
                <FramerImage src={img} alt={title} className='w-full h-auto' 
                    whileHover ={{scale:1.05}}
                    transition ={{duration:0.2}}
                />
            </Link> 

            <div className='w-1/2 flex flex-col items-start pl-6 justify-between lg:w-full lg:pl-0 lg:pt-6'>

                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>

                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>

                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                </Link> 
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>

                <div className='mt-2 flex items-center'>
                <Link href={github} target='_blank' className='w-10 da'><GithubIcon/></Link>
                <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg 
                font-semibold dark:bg-light dark:text-dark sm:text-base sm:px-4'>Visit Projects</Link>
                </div>
            </div>
        </article>
    )   
}

const Projects = ({title, type, img, link, github}) => {

    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border
         border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'>

            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light 
            md:-right-2 md:w-[101%] sm:h-[102%] xs:rounded-[1.5rem]"/>

            <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className='w-full h-auto' priority={true} sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
                    whileHover ={{scale:1.05}}
                    transition ={{duration:0.2}}
                />
            </Link> 

            <div className='w-full flex flex-col items-start mt-4 justify-between'>

                <span className='text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base'>{type}</span>

                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>

                    <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
                </Link> 

                <div className='mt-2 flex items-center justify-between w-full'>
                <Link href={link} target='_blank' className='text-lg font-semibold underline md:text-base'>Visit</Link>

                <Link href={github} target='_blank' className='w-8 md:w-6'><GithubIcon/></Link>
                </div>
            </div>
        </article>
    )
}

function project() {
  return (
    <>
        <Head>
          <title>Adeola | Projects Page</title>
          <meta name="description" content="Adeola Profile"/>
      </Head>

        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text="Imagination Trumps Knowledge!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:text-4xl sm:mb-8'/>

                <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                    <div className='col-span-12'>
                        <FeaturedProject
                            title="Addips Newspage"
                            img={addipsnews}
                            summary='A feature-rich News Media website using NextJs, Tailwind CSS, 
                            TypeScript, React Router, Weather Api and GraphQl. 
                            It shows detail regarding almost all the News around some fixed country. 
                            You can easily check the category that you want to know about and see the latest around the countries specified.'
                            link='https://addips-newspage-adeola670-gmailcom.vercel.app'
                            github='https://github.com/addips-code/addips-newspage'
                            type='Featured Project'
                        /> 
                    </div>

                    <div className='col-span-6 sm:col-span-12'>
                        <Projects
                            title="Snapchat Clone"
                            img={snapchat}
                            summary='A frontend replica for snapchat that allows you to create a new snap chat 
                            with multiple users able to view your snap. Created using React Js'
                            link='https://snapchat-addips-clone.web.app/'
                            github='https://github.com/addips-code/snapchat-addips-clone'
                            type='Featured Project'
                        /> 
                    </div>

                    <div className='col-span-6 sm:col-span-12'>
                        <Projects
                            title="Niger State"
                            img={Niger}
                            summary='Niger State Elderly Home provides care for the elderly and those with special needs in our society.'
                            link='https://niger-elderly-home.org.ng/'
                            github='https://niger-elderly-home.org.ng/'
                            type='Featured Project'
                        /> 
                    </div>
                
                
                    <div className='col-span-12'>
                        <FeaturedProject
                            title="Airbnb Clone"
                            img={airbnb}
                            summary='A perfect frontend clone of the Airbnb website using NextJs and TypeScript. Did the styling using TailwindCSS'
                            link='https://addips-airbnb.vercel.app/'
                            github='https://github.com/addips-code/addips-airbnb'
                            type='Featured Project'
                        /> 
                    </div>

                    <div className='col-span-6 sm:col-span-12'>
                        <Projects
                            title="AACEI"
                            img={aacei}
                            summary='AACEi Nigeria Sectio. Built using WordPress.'
                            link='https://aaceinigeriasection.org.ng/'
                            github='https://aaceinigeriasection.org.ng/'
                            type='Featured Project'
                        /> 
                    </div>

                    <div className='col-span-6 sm:col-span-12'>
                        <Projects
                            title="Addips Newspage"
                            img={addipsnews}
                            summary='A feature-rich News Media website using NextJs, Tailwind CSS, TypeScript, React Router, Weather Api and GraphQl. 
                            It shows detail regarding almost all the News around some fixed country. You can easily check the category that you want to know about and see the latest around the countries specified.'
                            link='https://addips-newspage-adeola670-gmailcom.vercel.app'
                            github='https://github.com/addips-code/addips-newspage'
                            type='Featured Project'
                        /> 
                    </div>
                </div>
            </Layout>
        </main>
    </>
  )
}

export default project