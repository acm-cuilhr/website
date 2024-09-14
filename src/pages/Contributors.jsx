import React from 'react'
import Navbar from '../components/Navbar'
import FooterSection from '../components/FooterSection'
import ContributorsHeroSection from '../components/ContributorsHeroSection'
import ContributorSection from '../components/ContributorSection'

export default function Contributors() {
    return (
        <>
            {/* HERO SECTION */}
            <ContributorsHeroSection />

            {/* CONTRIBUTORS SECTION */}
            <ContributorSection />

            {/* FOOTER SECTION */}
            <FooterSection />
        </>
    )
}
