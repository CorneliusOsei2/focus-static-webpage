'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { Reviews } from './Reviews'

const features = [
    {
        title: 'Goat World',
        description:
            "We take pride in our diverse selection of goat breeds, including the popular Boer, Saanen\
      Nubian and Alpine breeds.\
      Whether you are a farmer or hobbyist, we have goats that suit your specific needs.",
        image: "https://res.cloudinary.com/djykqimfx/image/upload/v1693413404/focus/products/goats.jpeg.jpg",
    },
    {
        title: 'Pig Paradise',
        description:
            "We offer variety of pig  breeds : Duroc, Yorkshire,\
      Hampshire, and Landrace. \
      Our state-of-the-art facilities ensure the pigs are raised in a clean and comfortable environment.",
        image: "https://res.cloudinary.com/djykqimfx/image/upload/v1693413405/focus/products/pigs.jpeg.jpg",
    },
    {
        title: 'Poultry',
        description:
            "Here, we celebrate all things poultry! Whether you are in the business of egg production or meat\
      processing, we have got you!\
      We have a house of  broilers, layers and heritage breeds.\
      We take great pride in their genetics, robustness and resistance to infections. ",
        image: "https://res.cloudinary.com/djykqimfx/image/upload/v1693413404/focus/products/poultry.jpeg.jpg",
    },
]

export function JFarm() {
    let [tabOrientation, setTabOrientation] = useState('horizontal')

    useEffect(() => {
        let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

        function onMediaQueryChange({ matches }) {
            setTabOrientation(matches ? 'vertical' : 'horizontal')
        }

        onMediaQueryChange(lgMediaQuery)
        lgMediaQuery.addEventListener('change', onMediaQueryChange)

        return () => {
            lgMediaQuery.removeEventListener('change', onMediaQueryChange)
        }
    }, [])

    return (
        <section
            id="jfarms"
            aria-label="Features for running your books"
            className="relative w-full overflow-hidden  shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 bg-green-100/10"
        >
            <Container className="relative">
                <div className="w-full md:mx-auto md:text-center xl:max-w-none">
                    <h4 className="font-display font-semibold mt-6 -mb-12 tracking-tight text-green-700 text-2xl">
                        Jadaad Farms
                    </h4>
                </div>
                <Tab.Group
                    as="div"
                    className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
                    vertical={tabOrientation === 'vertical'}
                >
                    {({ selectedIndex }) => (
                        <>
                            <div className="flex overflow-x-auto  pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                                <Tab.List className="relative z-10 flex gap-x-4 whitespace-nowrap sm:mx-auto  lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                                    {features.map((feature, featureIndex) => (
                                        <div
                                            key={feature.title}
                                            className={clsx(
                                                'group relative rounded-full mt-3 py-1 lg:rounded-l-xl lg:rounded-r-none ',
                                                selectedIndex === featureIndex
                                                    ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                                                    : 'hover:bg-white/10 lg:hover:bg-white/5',
                                            )}
                                        >
                                            <h3>
                                                <Tab
                                                    className={clsx(
                                                        'font-display font-bold font-mono  outline-none',
                                                        selectedIndex === featureIndex
                                                            ? 'text-green-600 '
                                                            : ' hover:text-green-700 text-slate-700',
                                                    )}
                                                >
                                                    <span className="absolute font-bold  inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                                                    {feature.title}
                                                </Tab>
                                            </h3>
                                            <p
                                                className={clsx(
                                                    'mt-2 hidden text-xs lg:block text-slate-700',
                                                )}
                                            >
                                                {feature.description}
                                            </p>
                                        </div>
                                    ))}
                                </Tab.List>
                            </div>
                            <Tab.Panels className="lg:col-span-7">
                                {features.map((feature) => (
                                    <Tab.Panel key={feature.title} unmount={false}>
                                        <div className="relative sm:px-6 lg:hidden">
                                            <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                                            <p className="relative mx-auto max-w-2xl text-base text-slate-700 sm:text-center">
                                                {feature.description}
                                            </p>
                                        </div>
                                        <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-green-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                                            <Image
                                                className="w-1/2"
                                                src={feature.image}
                                                width={2245}
                                                height={500}
                                                alt=""
                                                priority
                                                sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                                            />
                                        </div>
                                    </Tab.Panel>
                                ))}
                            </Tab.Panels>
                        </>
                    )}
                </Tab.Group>

                <Reviews />

            </Container>
        </section>
    )
}