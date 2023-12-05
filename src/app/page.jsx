import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import { Businesses } from '@/components/Businesses'
import { Team } from '@/components/Team'
import { JFarm } from '@/components/JFarm'
import { Careers } from '@/components/Careers'


function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}


function Photos() {
  let rotations = ['rotate-2', 'rotate-2', '-rotate-2', 'rotate-2', 'rotate-2']
  return (
    <div className="sm:py-32 mb-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] h-44 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function Home() {
  const other = "Our vision is to create a transformative impact on agriculture, entrepreneurship,\
   and technology across Africa by 2030."

  const vision = "We aim to be a beacon of innovation and excellence, \
  leading the way in sustainable agriculture, animal husbandry, and scientific research across Africa. We\
   envision a continent where communities thrive through self-sufficiency in food production,\
   where youth find fulfilling employment opportunities, and where cutting-edge technologies and scientific \
   advancements contribute to a resilient and secure food supply."

  return (
    <>
      <Container className="mt-9 text-sm">
        <div
          className=" py-9 text-center px-auto mx-auto flex flex-col justify-center shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 bg-green-100/10"
        >
          <h1 className="text-4xl   font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Solving  {' '}
            <span className="relative whitespace-nowrap text-green-800">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute left-0 top-2/3 h-[0.58em] w-full fill-green-300/70"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
              </svg>
              <span className="relative">food insecurity</span>
            </span>{' '}
            in Africa.
          </h1>
          <div className="flex px-9">
            <div className="mt-6 text-base text-zinc-600 dark:text-zinc-400 w-1/2">
              <h3 className='font-semibold text-green-700 text-lg'>Mission</h3>
              <p className='text-start'>{vision} </p>
            </div>
            <div className="mt-6 text-base text-zinc-600 dark:text-zinc-400 w-1/2 pl-3">
              <h3 className='font-semibold text-green-700 text-lg'>Project 2030 </h3>
              <p className='text-start'>{other} </p>
            </div>
          </div>


          <div className="mt-6 flex gap-6 mx-auto">
            <SocialLink
              href="https://twitter.com"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://instagram.com"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://linkedin.com"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Businesses />
      <Container className="mt-24 md:mt-28">
        <Photos />
        <JFarm />
        <Photos />
        <Team />
        <Careers />
      </Container>

    </>
  )
}
