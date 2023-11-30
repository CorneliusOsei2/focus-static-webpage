import Image from 'next/image'


const execs = [
    {
        name: 'Jim Appiah',
        role: 'Chief Executive Officer',
        imageUrl: "https://res.cloudinary.com/djykqimfx/image/upload/v1693413853/focus/team/jim.jpeg.jpg",
        twitterUrl: '#',
        linkedinUrl: '#',
        instagramUrl: '#',
        bio: "Quis bibendum velit diam tellus sed ut. Faucibus posuere enim, vitae enim eget neque tortor. Metus lectus mattis id id."
    },
    {
        name: 'Daisy Awo Azagba',
        role: 'Human Resources, Head',
        imageUrl: "https://res.cloudinary.com/djykqimfx/image/upload/v1693413853/focus/team/awo.jpeg.jpg",
        twitterUrl: '#',
        linkedinUrl: '#',
        instagramUrl: '#',
        bio: "Quis bibendum velit diam tellus sed ut. Faucibus posuere enim, vitae enim eget neque tortor. Metus lectus mattis id id."
    },
    {
        name: 'Cornelius Boateng',
        role: 'Engineering, Lead',
        imageUrl: "https://res.cloudinary.com/djykqimfx/image/upload/v1693413854/focus/team/corn.png.png",
        twitterUrl: '#',
        linkedinUrl: '#',
        githubUrl: '#',
        bio: "Quis bibendum velit diam tellus sed ut. Faucibus posuere enim, vitae enim eget neque tortor. Metus lectus mattis id id."
    },
    {
        name: 'Bernard  Bannor',
        role: 'Chief Financial Officer',
        imageUrl: "https://res.cloudinary.com/djykqimfx/image/upload/v1693413852/focus/team/bannor.jpeg.jpg",
        twitterUrl: '#',
        linkedinUrl: '#',
        bio: "Quis bibendum velit diam tellus sed ut. Faucibus posuere enim, vitae enim eget neque tortor. Metus lectus mattis id id."
    },
    {
        name: 'Grace Mireku',
        role: 'Copywriter',
        imageUrl: "https://res.cloudinary.com/djykqimfx/image/upload/v1693413853/focus/team/grace.jpeg.jpg",
        twitterUrl: '#',
        linkedinUrl: '#',
        bio: "Quis bibendum velit diam tellus sed ut. Faucibus posuere enim, vitae enim eget neque tortor. Metus lectus mattis id id."
    },
    {
        name: 'Wisdom Okwen ',
        role: 'Software Developer Intern',
        imageUrl: "https://res.cloudinary.com/djykqimfx/image/upload/v1694114558/focus/team/IMG-20230513-WA0015_1_rkeobe.jpg",
        twitterUrl: '#',
        linkedinUrl: '#',
        bio: "Quis bibendum velit diam tellus sed ut. Faucibus posuere enim, vitae enim eget neque tortor. Metus lectus mattis id id."
    },
]

export function Team() {
    return (
        <div
            className="bg-green-100/10 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 sm:py-12" id='team'>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-3xl text-center font-bold tracking-tight text-green-700 sm:text-4xl">Meet our Leadership</h2>
                <ul
                    role="list"
                    className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-3 gap-y-10 md:grid-cols-3 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
                >
                    {execs.map((person) => (
                        <li key={person.name} className="flex mx-auto flex-row gap-6 xl:flex-row">
                            <img className="h-36  w-36 md:h-24 md:w-24 flex-none rounded-2xl object-cover" src={person.imageUrl} alt="" />
                            <div className="flex-auto py-auto">
                                <h3 className="text-sm font-semibold leading-8 tracking-tight text-amber-900">{person.name}</h3>
                                <p className="text-xs leading-7 text-slate-600">{person.role}</p>
                                {/* <p className="mt-6 text-base leading-7 text-gray-600">{person.bio}</p> */}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}