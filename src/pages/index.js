import Head from 'next/head'
import Layout from '@/Components/Layout'
import Image from 'next/image'
import ProfilePic from '../../public/images/profile/adeola.png'
import AnimatedText from '@/Components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/Components/Icons'
import HireMe from '@/Components/HireMe'
import LightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout className='pt-0'>
            <div className='flex items-center w-full justify-between'>
              <div className='w-1/2'>
                <Image src={ProfilePic} alt='Adeola' className='w-full h-auto'/>
              </div>

              <div className='w-1/2 flex flex-col items-center self-center'>
                <AnimatedText text='Turning Vision And Design Into Reality With Code.' className='!text-left !text-6xl'/>

                <p className='my-4 text-base font-medium'>As a skilled frontend developer, I am dedicated to turning ideas into innovative web applications. 
                Explore my latest projects, showcasing my expertise in React.js/TypeScript and web development.</p>

                <div className='flex items-center self-start mt-2'>
                  <Link href='/adeola_CV.pdf' target='_blank' 
                    className='flex bg-dark text-light items-center hover:text-dark hover:bg-light 
                    p-2.5 px-6 rounded-lg text-lg font-semibold border-2 border-solid border-transparent hover:border-dark' download={true}>
                    Resume <LinkArrow className={'w-6 ml-1'}/>
                  </Link>

                  <Link href='mailto:adeola670@gmail.com' target='_blank'
                    className='font-medium text-dark underline ml-4 text-lg capitalize'
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
        </Layout>
        <HireMe/>
        <div className='absolute right-8 bottom-8 inline-block w-24'>
          <Image src={LightBulb} alt='Adeola' className='w-full h-auto'></Image>
        </div>
      </main>
    </>
  )
}