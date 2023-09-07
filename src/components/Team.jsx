import Image from 'next/image'


const execs = [
  {
    name: 'Jim Appiah',
    role: 'Chief Executive Officer',
    imageUrl:  "https://res.cloudinary.com/djykqimfx/image/upload/v1693413853/focus/team/jim.jpeg.jpg",
    twitterUrl: '#',
    linkedinUrl: '#',
    instagramUrl: '#'
  },
  {
    name: 'Daisy Awo Azagba',
    role: 'Human Resources, Head',
    imageUrl: "https://res.cloudinary.com/djykqimfx/image/upload/v1693413853/focus/team/awo.jpeg.jpg",
    twitterUrl: '#',
    linkedinUrl: '#',
    instagramUrl: '#'
  },
  {
    name: 'Cornelius Boateng',
    role: 'Engineering, Lead',
    imageUrl: "https://res.cloudinary.com/djykqimfx/image/upload/v1693413854/focus/team/corn.png.png",
    twitterUrl: '#',
    linkedinUrl: '#',
    githubUrl: '#'
  },
  {
    name: 'Bernard  Bannor',
    role: 'Chief Financial Officer',
    imageUrl: "https://res.cloudinary.com/djykqimfx/image/upload/v1693413852/focus/team/bannor.jpeg.jpg",
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Grace Mireku',
    role: 'Copywriter',
    imageUrl: "https://res.cloudinary.com/djykqimfx/image/upload/v1693413853/focus/team/grace.jpeg.jpg",
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Wisdom Okwen ',
    role: 'Software Developer Intern',
    imageUrl: "https://res.cloudinary.com/djykqimfx/image/upload/v1694114558/focus/team/IMG-20230513-WA0015_1_rkeobe.jpg",
    twitterUrl: '#',
    linkedinUrl: '#',
  },
]

const team = [
  // {
  //   name: 'Emmanuel Dodoo',
  //   role: 'Frontend Developer',
  //   imageUrl: "https://res.cloudinary.com/djykqimfx/image/upload/v1693412491/focus/avatars/profile.jpeg.jpg",
  //   twitterUrl: '#',
  //   linkedinUrl: '#',
  //   instagramUrl: '#'
  // },
  // {
  //   name: 'Rukaya Alidu',
  //   role: 'Marketting Intern, 2022',
  //   imageUrl: "https://res.cloudinary.com/djykqimfx/image/upload/v1693412491/focus/avatars/profile.jpeg.jpg",
  //   twitterUrl: '#',
  //   linkedinUrl: '#',
  //   githubUrl: '#'
  // },
  // {
  //   name: 'Daniel Amoateng',
  //   role: 'Executive Member',
  //   imageUrl: "https://res.cloudinary.com/djykqimfx/image/upload/v1693412491/focus/avatars/profile.jpeg.jpg",
  //   twitterUrl: '#',
  //   linkedinUrl: '#',
  //   instagramUrl: '#'
  // },
  // {
  //   name: 'Grace Mireku',
  //   role: 'Copywriter',
  //   imageUrl: "https://res.cloudinary.com/djykqimfx/image/upload/v1693412491/focus/avatars/profile.jpeg.jpg",
  //   twitterUrl: '#',
  //   linkedinUrl: '#',
  // },
  // {
  //   name: 'Yaw Dankwa',
  //   role: 'Software Developer Intern',
  //   imageUrl: "https://res.cloudinary.com/djykqimfx/image/upload/v1693412491/focus/avatars/profile.jpeg.jpg",
  //   twitterUrl: '#',
  //   linkedinUrl: '#',
  //   instagramUrl: '#'
  // },
  // {
  //   name: 'Ankomah Kofi Junior ',
  //   role: 'Architecture Intern, 2021',
  //   imageUrl: "https://res.cloudinary.com/djykqimfx/image/upload/v1693412491/focus/avatars/profile.jpeg.jpg",
  //   twitterUrl: '#',
  //   linkedinUrl: '#',
  // },
]

export function Team() {
  return (
    <div className="bg-white py-32" id='team'>
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
              <Image className="mx-auto h-50 w-56 rounded-full" src={person.imageUrl} alt="" width={2245} height={1636}/>
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
                <Image className="mx-auto h-50 w-56 rounded-full" src={person.imageUrl} alt="" width={2245} height={1636}/>
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
