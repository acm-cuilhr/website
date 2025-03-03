import React from 'react';
import { motion } from 'framer-motion';
import EventCard from './EventCard';

const eventsData = [
  { id: 1, size: 'large', title: 'Web-e-thon: TechnoVerse 2.0', date: '2024-03-15', image: '/assets/events/Webathon1.jpeg', description: 'A web development challenge to test creativity and coding skills.' },
  { id: 6, size: 'large', title: 'Coding Spree: TechnoVerse 3.0', date: '2024-06-22', image: '/assets/events/CodingSpree.jpeg', description: 'A fast-paced coding competition to challenge logic and problem-solving skills.' },
  { id: 2, size: 'medium', title: 'Scavenger Hunt: TechnoVerse 3.0', date: '2024-02-20', image: '/assets/events/ScavengerHunt.jpeg', description: 'Solve clues, race against time, and uncover hidden secrets around campus.' },
  { id: 3, size: 'medium', title: 'Orientation Fall 24', date: '2023-12-10', image: '/assets/events/Orientation.jpeg', description: 'A welcoming session to introduce new members to ACM and its opportunities.' },
  { id: 5, size: 'small', title: 'Prize Distribution Ceremony', date: '2024-05-18', image: '/assets/events/PriceDistribution.jpeg', description: 'Recognizing and celebrating the champions of TechnoVerse.' },
  { id: 4, size: 'small', title: 'Registration Week Fall 24', date: '2024-04-10', image: '/assets/events/Registration.jpeg', description: ' Kickstart your ACM journey by signing up during the registration drive.' },
  { id: 7, size: 'small', title: 'Notion Template Design', date: '2024-07-05', image: '/assets/events/Notion.jpeg', description: 'Show off your productivity skills by designing efficient Notion templates.' },
  { id: 8, size: 'small', title: 'FIFA & Tekken Tournament', date: '2024-08-12', image: '/assets/events/Fifa.jpeg', description: 'Compete against the best in thrilling FIFA and Tekken battles.' }
];

export default function EventsGrid() {
  return (
    <section className="bg-gray-900 py-16 px-5 md:px-10 lg:px-[120px]">
      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[300px] gap-6">
          {eventsData.map((event) => (
            <div 
              key={event.id}
              className={`
                ${event.size === 'large' ? 'md:col-span-2 lg:col-span-2 row-span-2' : ''}
                ${event.size === 'medium' ? 'md:col-span-2 lg:col-span-2' : ''}
                ${event.size === 'small' ? 'md:col-span-1 lg:col-span-1' : ''}
              `}
            >
              <EventCard event={event} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}