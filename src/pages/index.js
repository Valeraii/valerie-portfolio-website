import Head from 'next/head'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import Image from 'next/image'
import AnimatedText from '@/components/AnimatedText'
import profilePic from "../../public/images/profile/2.png"
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
          <Layout className='pt-0 md:pt-16 sm:pt-8'>
            <div className="flex items-center justify-between w-full lg:flex-col">
              <div className='flex items-center justify-center w-1/2 md:w-[80%]'>
                {/* when priority is true, image will be considered high priority and preload. Lazy loading automatically disabled */}
                {/* sizes: provides information about how wide the image will be at different breakpoints */}
                <Image src={profilePic} alt="Val" className='w-[80%] h-auto lg:hidden md:inline-block md:w-[80%] md:pb-4' priority sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw' />
              </div>
              <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
                <AnimatedText text="Bringing Ideas to Life with the Power of Coding and Creative Design" className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'/>
                <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                  As a skilled full-stack developer, my passion lies in turning ideas into cutting edge web applications that stand out. 
                  Check out my latest projects showcasing my expertise in React.js and web development.
                </p>

                {/* Resume and contact buttons */}
                <div className="flex items-center self-start mt-2 lg:self-center">
                  <Link href="/resume.pdf" target={"_blank"}
                    className="flex items-center bg-dark text-light p-2.5 px=-6 rounded-lg text-lg font-semibold 
                      hover:bg-light hover:text-dark 
                      border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark 
                      hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                      md:p-2 md:px-4 md:text-base"
                      download={true}>
                      Resume <LinkArrow className='w-6 ml-1'/>
                    </Link>
                  <Link href="mailto:valerietan000@gmail.com"
                    className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                    >Contact </Link>
                </div>

              </div>
            </div>
          </Layout>
          <HireMe />
      </main>
    </>
  )
}
