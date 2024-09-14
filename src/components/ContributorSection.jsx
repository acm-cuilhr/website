import React, { useEffect, useState } from 'react'
import ContributorCard from './ContributorCard'

export default function ContributorSection() {

    // FUNCTIONS

    async function fetchContributors() {
        try {
            const response = await fetch('https://api.github.com/repos/acm-cuilhr/website/contributors')
            const data = await response.json()
            setContributorsData(data)
        } catch (error) {
            console.log(error)
        }
    }

    // VARIABLES 

    const [ContributorsData, setContributorsData] = useState([])

    // CODE

    useEffect(() => {
        fetchContributors()
    }, [])

    // RETURN

    return (
        <section className='flex justify-center items-center px-5 py-10 md:px-10 md:py-[80px] lg:px-[120px] lg:py-[120px]'>
            <div className="w-full xl:w-[1300px] flex flex-wrap flex-row gap-6 items-center justify-center">
                {
                    ContributorsData.map((contributor, index) => {
                        return <ContributorCard key={contributor.id} contributor={contributor} />
                    })
                }
            </div>
        </section>
    )
}
