'use client'

import clsx from 'clsx'
import { useState } from 'react'


const jobs = {
    "Agriculture": [
        { title: "Agriculture Scientist Intern", salary: 0.0, location: "", mode: "In-person", link: "https://forms.gle/RXD7EDsGCN9dq2cM7" },
        { title: "Agriculture Engineer Intern", salary: 0.0, location: "", mode: "", link: "https://forms.gle/RXD7EDsGCN9dq2cM7" },
    ],
    "Engineering": [
        { title: "Software Engineer Intern", salary: 0.0, location: "", mode: "Online", link: "https://forms.gle/RXD7EDsGCN9dq2cM7" },
        { title: "UI/UX Designer Intern", salary: 0.0, location: "", mode: "", link: "https://forms.gle/RXD7EDsGCN9dq2cM7" },
    ],
    "Marketting": [
        { title: "Digital Marketer Intern", salary: 0.0, location: "", mode: "Online", link: "https://forms.gle/RXD7EDsGCN9dq2cM7" },
        { title: "Social Media Manager Intern", salary: 0.0, location: "", mode: "", link: "https://forms.gle/RXD7EDsGCN9dq2cM7" },
    ],
    "Other": [
        { title: "Administrative Assistant Intern", salary: 0.0, location: "", mode: "Online", link: "https://forms.gle/RXD7EDsGCN9dq2cM7" },
    ]
}

export function Navigation({ group, setGroup }) {
    return (
        <div>
            <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">
                    Select a tab
                </label>
                <select
                    id="tabs"
                    name="tabs"
                    className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
                    defaultValue={Object.keys(jobs).find((job) => job)}
                    onChange={(e) => setGroup(e.target.value)}
                >
                    {Object.keys(jobs).map((job, index) => (
                        <option key={index}>{job}</option>
                    ))}
                </select>
            </div>
            <div className="hidden sm:block">
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                        {Object.keys(jobs).map((tab, index) => (
                            <button
                                key={index}
                                onClick={() => setGroup(tab)}
                                className={clsx(
                                    tab === group
                                        ? 'border-green-700 text-green-700'
                                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                    'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium'
                                )}
                            >
                                {tab}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    )
}


export function Careers() {
    const [group, setGroup] = useState("Agriculture");

    return (
        <div className='mt-12' id="careers">
            <h2 className="text-3xl  text-center font-bold tracking-tight text-green-700 sm:text-4xl">
                Careers.
            </h2>
            <Navigation group={group} setGroup={setGroup} />
            {
                <>
                    <thead>
                    </thead>
                    <tbody className="bg-white">
                        {jobs[group].map((job, index) => (
                            <tr key={index} className="even:bg-gray-50">
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                                    {job.name}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{job.title}</td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{job.location}</td>
                                {/* <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{job.salary}</td> */}
                                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                                    <a href={job.link} className="text-green-600 hover:text-green-900">
                                        Apply Here!
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </>
            }
        </div>
    )
}