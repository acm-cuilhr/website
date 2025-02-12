import React from 'react';
import EventsGrid from '../components/EventsGrid';
import HeaderSection from '../components/EventHeader';
import FooterSection from '../components/FooterSection';

export default function Events() {
    return (
        <>
            <HeaderSection />
            <EventsGrid />
            <FooterSection />
        </>
    );
}