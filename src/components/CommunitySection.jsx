import React from 'react'
import CommunityStats from '../components/CommunityStats';
import WhyJoinACM from '../components/WhyJoinACM';

export default function CommunitySection() {
    return (
        <section className="bg-[url('./assets/StatsImg.png')] bg-cover bg-center p-5 md:px-10 lg:p-[120px] flex flex-col items-center justify-center">
            <CommunityStats />
            <WhyJoinACM />
        </section>
    )
}
