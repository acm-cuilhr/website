import React from 'react'
import CommunityStats from '../components/CommunityStats';
import WhyJoinACM from '../components/WhyJoinACM';

export default function CommunitySection() {
    return (
        <section className="bg-[url('/assets/StatsImg.png')] bg-cover bg-center px-5 py-10 md:px-10 md:py-[100px] lg:px-[120px] lg:py-[120px] flex flex-col items-center justify-center">
            <CommunityStats />
            <WhyJoinACM />
        </section>
    )
}
