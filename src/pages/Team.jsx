import React from 'react'
import Navbar from '../components/Navbar'
import TeamHeroSection from '../components/TeamHeroSection'
import FooterSection from '../components/FooterSection'
import TeamMembersSection from '../components/TeamMembersSection'

export default function Team() {

    const TeamMembersData = [
        { id: 0, profileURL: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww', name: 'Marcus W.', currentPosition: 'President', exPositions: "EX-Graphics Lead, Ex Team Registration Lead, EX-Graphics Lead, Ex Team Registration Lead", socialLinks: { twitter: 'https://twitter.com', linkedin: 'https://linkedin.com', facebook: 'https://facebook.com' } },
        { id: 1, profileURL: 'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww', name: 'Jessy K.', currentPosition: 'President', exPositions: "EX-Graphics Lead, Ex Team Registration Lead, EX-Graphics Lead, Ex Team Registration Lead", socialLinks: { twitter: 'https://twitter.com', linkedin: 'https://linkedin.com', facebook: 'https://facebook.com' } },
        { id: 2, profileURL: 'https://media.istockphoto.com/id/2004891062/photo/happy-mid-aged-business-woman-manager-handshaking-greeting-client-in-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=vERE_avkACCKj3dCQBvd0Ywjx_VWqMEYR887kJ5HPT0=', name: 'Marina J.', currentPosition: 'President', exPositions: "EX-Graphics Lead, Ex Team Registration Lead, EX-Graphics Lead, Ex Team Registration Lead", socialLinks: { twitter: 'https://twitter.com', linkedin: 'https://linkedin.com', facebook: 'https://facebook.com' } },
        { id: 0, profileURL: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww', name: 'Marcus W.', currentPosition: 'President', exPositions: "EX-Graphics Lead, Ex Team Registration Lead, EX-Graphics Lead, Ex Team Registration Lead", socialLinks: { twitter: 'https://twitter.com', linkedin: 'https://linkedin.com', facebook: 'https://facebook.com' } },
        { id: 1, profileURL: 'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww', name: 'Jessy K.', currentPosition: 'President', exPositions: "EX-Graphics Lead, Ex Team Registration Lead, EX-Graphics Lead, Ex Team Registration Lead", socialLinks: { twitter: 'https://twitter.com', linkedin: 'https://linkedin.com', facebook: 'https://facebook.com' } },
        { id: 2, profileURL: 'https://media.istockphoto.com/id/2004891062/photo/happy-mid-aged-business-woman-manager-handshaking-greeting-client-in-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=vERE_avkACCKj3dCQBvd0Ywjx_VWqMEYR887kJ5HPT0=', name: 'Marina J.', currentPosition: 'President', exPositions: "EX-Graphics Lead, Ex Team Registration Lead, EX-Graphics Lead, Ex Team Registration Lead", socialLinks: { twitter: 'https://twitter.com', linkedin: 'https://linkedin.com', facebook: 'https://facebook.com' } },
    ]

    return (
        <>
            {/* HERO SECTION */}
            <TeamHeroSection />

            {/* MEMBERS SECTION */}
            <TeamMembersSection TeamMembersData={TeamMembersData} />

            {/* FOOTER SECTION */}
            <FooterSection />

        </>
    )
}
