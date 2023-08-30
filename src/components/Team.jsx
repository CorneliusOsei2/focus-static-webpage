import Image from 'next/image'

import jimPicture from '@/images/team/jim.jpeg'
import awoPicture from '@/images/team/awo.jpeg'
import bannorPicture from '@/images/team/bannor.jpeg'
import gracePicture from '@/images/team/grace.jpeg'
import cornPicture from '@/images/team/corn.png'


const execs = [
  {
    name: 'Jim Appiah',
    role: 'Chief Executive Officer',
    imageUrl: jimPicture,
    twitterUrl: '#',
    linkedinUrl: '#',
    instagramUrl: '#'
  },
  {
    name: 'Daisy Awo Azagba',
    role: 'Human Resources, Head',
    imageUrl: awoPicture,
    twitterUrl: '#',
    linkedinUrl: '#',
    instagramUrl: '#'
  },
  {
    name: 'Cornelius Boateng',
    role: 'Engineering, Lead',
    imageUrl: cornPicture,
    twitterUrl: '#',
    linkedinUrl: '#',
    githubUrl: '#'
  },
  {
    name: 'Bernard  Bannor',
    role: 'Chief Financial Officer',
    imageUrl: bannorPicture,
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Grace Mireku',
    role: 'Copywriter',
    imageUrl: gracePicture,
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Daniel Amoateng ',
    role: 'Executive Member',
    imageUrl: jimPicture,
    twitterUrl: '#',
    linkedinUrl: '#',
  },
]

const team = [
  {
    name: 'Emmanuel Dodoo',
    role: 'Frontend Developer',
    imageUrl: jimPicture,
    twitterUrl: '#',
    linkedinUrl: '#',
    instagramUrl: '#'
  },
  {
    name: 'Rukaya Alidu',
    role: 'Marketting Intern, 2022',
    imageUrl: cornPicture,
    twitterUrl: '#',
    linkedinUrl: '#',
    githubUrl: '#'
  },
  {
    name: ' Okwen',
    role: 'Software Developer Intern',
    imageUrl: jimPicture,
    twitterUrl: '#',
    linkedinUrl: '#',
    instagramUrl: '#'
  },
  {
    name: 'Grace Mireku',
    role: 'Copywriter',
    imageUrl: gracePicture,
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Yaw Dankwa',
    role: 'Software Developer Intern',
    imageUrl: awoPicture,
    twitterUrl: '#',
    linkedinUrl: '#',
    instagramUrl: '#'
  },
  {
    name: 'Ankomah Kofi Junior ',
    role: 'Architecture Intern, 2021',
    imageUrl: jimPicture,
    twitterUrl: '#',
    linkedinUrl: '#',
  },
]

export function Team() {
  return (
    <div className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our team</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            We’re a dynamic group of individuals who are passionate about what we do.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-5 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
        >
          {execs.map((person) => (
            <li key={person.name}>
              <Image className="mx-auto h-50 w-56 rounded-full" src={person.imageUrl} alt="" />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
              <p className="text-sm leading-6 text-gray-600">{person.role}</p>
            </li>
          ))}
        </ul>

        {/* <h3 className="text-3xl font-bold tracking-tight mt-6 text-gray-900 sm:text-4xl">Meet some of our previous Interns!</h3> */}
        <div className="mx-auto mt-10 max-w-7xl px-6 lg:px-8">

          <ul
            role="list"
            className="mx-auto mt-5 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
          >
            {team.map((person) => (
              <li key={person.name}>
                <Image className="mx-auto h-50 w-56 rounded-full" src={person.imageUrl} alt="" />
                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                <p className="text-sm leading-6 text-gray-600">{person.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>


    </div >
  )
}
