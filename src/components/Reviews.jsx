'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import { useInView } from 'framer-motion'

import { Container } from '@/components/Container'

const reviews = [
  {
    body: 'The packaging is top-notch, ensuring the meat stays fresh. Highly recommend to all in Labadi!',
    author: 'Mr. Asare, Accra',
  },
  {
    body: 'The meat is tender, and the taste is incredible. \
    Plus, I appreciate their commitment to quality and hygiene.I no longer have to worry about the hassle of going to the market.',
    author: 'Mr. Osei, Drobonso',
  },
  {
    body: "Whether it's their juicy steaks or succulent chicken breasts, the meat is always of top- notch quality.\
    It's so versatile and easy to work with, making my cooking experience enjoyable. ",
    author: 'Ama (Cook and Food Blogger)',
  },
  {
    body: 'The meat is tender, and the taste is incredible. \
    Plus, I appreciate their commitment to quality and hygiene.I no longer have to worry about the hassle of going to the market.',
    author: 'Mr. Osei, Drobonso',
  }, {
    body: 'The meat is tender, and the taste is incredible. \
    Plus, I appreciate their commitment to quality and hygiene.I no longer have to worry about the hassle of going to the market.',
    author: 'Mr. Osei, Drobonso',
  },
  {
    body: 'The meat is tender, and the taste is incredible. \
    Plus, I appreciate their commitment to quality and hygiene.I no longer have to worry about the hassle of going to the market.',
    author: 'Mr. Osei, Drobonso',
  },


]


function Review({ title, body, author, rating, className, ...props }) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ]
  }, [])

  return (
    <figure
      className={clsx(
        'animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-green-900/5',
        className,
      )}
      style={{ animationDelay }}
      {...props}
    >
      <blockquote className="text-gray-900">
        <p className="mt-1 text-xs ">{body}</p>
      </blockquote>
      <figcaption className="mt-3 text-xs text-amber-950 font-semibold before:content-['–_']">
        {author}
      </figcaption>
    </figure>
  )
}

function splitArray(array, numParts) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

function ReviewColumn({ reviews, className, reviewClassName, msPerPixel = 0 }) {
  let columnRef = useRef(null)
  let [columnHeight, setColumnHeight] = useState(0)
  let duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    if (!columnRef.current) {
      return
    }

    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0)
    })

    resizeObserver.observe(columnRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={columnRef}
      className={clsx('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration }}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName?.(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  )
}

function ReviewGrid() {
  let containerRef = useRef(null)
  let isInView = useInView(containerRef, { once: true, amount: 0.4 })
  let columns = splitArray(reviews, 3)
  let column1 = columns[0]
  let column2 = columns[1]
  let column3 = splitArray(columns[2], 2)

  return (
    <div
      ref={containerRef}
      className="relative  -mx-4 mt-16 grid h-[36rem] max-h-[100vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...column1, ...column3.flat(), ...column2]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= column1.length + column3[0].length &&
                'md:hidden',
                reviewIndex >= column1.length && 'lg:hidden',
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...column2, ...column3[1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= column2.length ? 'lg:hidden' : ''
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={column3.flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      {/* <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50" /> */}
      {/* <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50" /> */}
    </div>
  )
}

export function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="pb-16 w-full pt-20 sm:pt-32"
    >
      <Container>
        <h2 className="text-center font-display font-semibold mt-6 -mb-9 text-3xl tracking-tight text-green-700 md:text-4xl">
          Hear from our Customers.
        </h2>

        <ReviewGrid />
      </Container>
    </section>
  )
}
