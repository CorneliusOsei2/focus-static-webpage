'use client'

import clsx from 'clsx'
import { useState } from 'react'


const tabs = [
    'Agriculture',
    'Engineering',
    'Marketting',
    'Other',
]

const jobs = {
    "Agriculture": [
        { title: "", salary: 0.0, location: "", mode: "In-person", link: "" },
        { title: "", salary: 0.0, location: "", mode: "", link: "" },
    ],
    "Engineering": [
        { title: "", salary: 0.0, location: "", mode: "Online", link: "" },
        { title: "", salary: 0.0, location: "", mode: "", link: "" },
    ],
    "Marketting": [
        { title: "", salary: 0.0, location: "", mode: "Online", link: "" },
        { title: "", salary: 0.0, location: "", mode: "", link: "" },
    ],
    "Other": [
        { title: "", salary: 0.0, location: "", mode: "Online", link: "" },
        { title: "", salary: 0.0, location: "", mode: "", link: "" },
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
                    defaultValue={tabs.find((tab) => tab)}
                    onChange={(tab) => setGroup(tab)}
                >
                    {tabs.map((tab, index) => (
                        <option key={index}>{tab}</option>
                    ))}
                </select>
            </div>
            <div className="hidden sm:block">
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                        {tabs.map((tab, index) => (
                            <button
                                key={index}
                                onClick={() => setGroup(tab)}
                                className={clsx(
                                    tab === group
                                        ? 'border-green-500 text-green-600'
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
        <div className='mt-12'>
            <h2 className="text-3xl  text-center font-bold tracking-tight text-green-700 sm:text-4xl">
                Careers.
            </h2>
            <Navigation group={group} setGroup={setGroup} />
            <section>
                <ul>
                    {
                        jobs[group].map((job, index) => (
                            <li key={index}>
                                <span>{job.title}</span>
                                <span>{job.salary}</span>
                                <span>{job.location}</span>
                                <span>{job.mlode}</span>
                            </li>
                        ))
                    }
                </ul>

            </section>

        </div>
    )
}