import { useId } from 'react'

import { Container } from '@/components/Container'

const businesses = [
  {
    name: 'Jadaad Farms',
    description:
      "Our journey begins with animal rearing, where we strive to make Ghana self-sufficient in meat production. \
      With a keen focus on goats and sheep, two of West Africa's most beloved meats, we aim to enhance production,\
       create affordability, and establish a thriving market for high - quality meat.",
    icon: DeviceArrowIcon,
    link: "#jfarms"
  },
  {
    name: 'Data Analytics',
    description:
      "We recognize the transformative power of data analytics and digital marketing in shaping the future of \
     agriculture and business in Africa. Our dedicated analytics firm collaborates seamlessly with both small and\
      large enterprises in Ghana, providing cutting-edge solutions for data management and analysis, empowering \
      businesses to make informed decisions and unlock new opportunities for growth",
    icon: DeviceClockIcon,
    link: "#jfarms"
  },
  {
    name: 'Training and Bootcamps',
    description:
      "Unleash your coding potential with our \"Introduction to Programming\" course. Over the course of 12 weeks, \
      participants will dive into the fundamentals of programming languages, logical problem-solving, and algorithmic thinking. \
     This course is designed to provide a solid foundation for individuals aspiring to embark on a programming journey.",
    icon: DeviceListIcon,
    link: "#jfarms"
  },
]

function DeviceArrowIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#737373"
      />
      <path
        d="M12 25l8-8m0 0h-6m6 0v6"
        stroke="#171717"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
    </svg>
  )
}


function DeviceClockIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v10h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h5v2H9a4 4 0 01-4-4V4z"
        fill="#737373"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 32a8 8 0 100-16 8 8 0 000 16zm1-8.414V19h-2v5.414l4 4L28.414 27 25 23.586z"
        fill="#171717"
      />
    </svg>
  )
}

function DeviceListIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#737373"
      />
      <circle cx={11} cy={14} r={2} fill="#171717" />
      <circle cx={11} cy={20} r={2} fill="#171717" />
      <circle cx={11} cy={26} r={2} fill="#171717" />
      <path
        d="M16 14h6M16 20h6M16 26h6"
        stroke="#737373"
        strokeWidth={2}
        strokeLinecap="square"
      />
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
    </svg>
  )
}



export function Businesses() {
  return (
    <section
      id="businesses"
      aria-label="Businesses for building a portfolio"
      className="mt-9 md:-mb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl md:-mb-6 text-center font-bold tracking-tight text-green-700 sm:text-4xl">
            Our Ventures.
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto  grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {businesses.map((business) => (
            <a
              href={business.link}
              key={business.name}
              className="rounded-2xl border border-gray-200 p-8"
            >
              <business.icon className="h-8 w-8" />
              <h3 className="mt-6 font-semibold text-gray-900">
                {business.name}
              </h3>
              <p className="mt-2 text-gray-700">{business.description}</p>
            </a>
          ))}
        </ul>
      </Container>
    </section>
  )
}
