import AnimatedText from '@/Components/AnimatedText'
import { GithubIcon } from '@/Components/Icons'
import Layout from '@/Components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import addipsnews from '../../public/images/projects/addipsnews.png'
import airbnb from '../../public/images/projects/airbnb.png'


const FeaturedProject = ({type, title, summary, img, link, github}) => {
    return (
        <article className='w-full flex items-center justify-between 
            rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12' 
        >
           <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt={title} className='w-full h-auto'/>
            </Link> 

            <div className='w-1/2 flex flex-col items-start pl-6 justify-between'>
                <span className='text-primary font-medium text-xl'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
                </Link> 
                <p className='my-2 font-medium text-dark'>{summary}</p>

                <div className='mt-2 flex items-center'>
                <Link href={github} target='_blank' className='w-10'><GithubIcon/></Link>
                <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'>visit projects</Link>
                </div>
            </div>
        </article>
    )   
}

const Projects = ({title, type, img, link, github}) => {

    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative'>
            <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt={title} className='w-full h-auto'/>
            </Link> 

            <div className='w-full flex flex-col items-start mt-4 justify-between'>

                <span className='text-primary font-medium text-xl'>{type}</span>

                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>

                    <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
                </Link> 

                <div className='mt-2 flex items-center justify-between w-full'>
                <Link href={link} target='_blank' className='text-lg font-semibold underline'>Visit</Link>

                <Link href={github} target='_blank' className='w-8'><GithubIcon/></Link>
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

        <main className='w-full mb-16 flex flex-col items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText text="Imagination Trumps Knowledge!" className='mb-16'/>

                <div className='grid grid-cols-12 gap-24'>
                    <div className='col-span-12'>
                        <FeaturedProject
                            title="Addips Newspage"
                            img={addipsnews}
                            summary='A feature-rich News Media website using NextJs, Tailwind CSS, TypeScript, React Router, Weather Api and GraphQl. 
                            It shows detail regarding almost all the News around some fixed country. You can easily check the category that you want to know about and see the latest around the countries specified.'
                            link='https://addips-newspage-adeola670-gmailcom.vercel.app'
                            github='https://github.com/addips-code/addips-newspage'
                            type='Featured Project'
                        /> 
                    </div>

                    <div className='col-span-6'>
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

                    <div className='col-span-6'>
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
                
                
                    <div className='col-span-12'>
                        <FeaturedProject
                            title="Addips Newspage"
                            img={airbnb}
                            summary='A feature-rich News Media website using NextJs, Tailwind CSS, TypeScript, React Router, Weather Api and GraphQl. 
                            It shows detail regarding almost all the News around some fixed country. You can easily check the category that you want to know about and see the latest around the countries specified.'
                            link='https://addips-airbnb.vercel.app/'
                            github='https://github.com/addips-code/airbnb'
                            type='Featured Project'
                        /> 
                    </div>

                    <div className='col-span-6'>
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

                    <div className='col-span-6'>
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