import React from 'react';
import { motion } from 'framer-motion';
import EventCard from './EventCard';

const eventsData = [
  { id: 1, size: 'large', title: 'Clay Sculpture Masterclass', date: '2024-03-15', image: '/assets/eventsImg.png', description: 'Join our intensive 3-day workshop exploring advanced sculpting techniques with master potters.' },
  { id: 6, size: 'large', title: 'Advanced Wheel Throwing', date: '2024-06-22', image: '/assets/eventsImg.png', description: 'Take your wheel throwing skills to the next level with expert instruction.' },
  { id: 2, size: 'medium', title: 'Wheel Throwing Basics', date: '2024-02-20', image: '/assets/eventsImg.png', description: 'Learn fundamental wheel throwing techniques in this beginner-friendly session.' },
  { id: 5, size: 'medium', title: 'Sgraffito & Carving', date: '2024-05-18', image: '/assets/eventsImg.png', description: 'Master the art of carving and sgraffito techniques to create intricate ceramic designs.' },
  { id: 3, size: 'small', title: 'Glazing Workshop', date: '2023-12-10', image: '/assets/eventsImg.png', description: 'Discover creative glazing techniques for unique ceramic finishes.' },
  { id: 4, size: 'small', title: 'Handbuilding Techniques', date: '2024-04-10', image: '/assets/eventsImg.png', description: 'Explore handbuilding techniques in ceramic art for unique creations.' },
  { id: 7, size: 'small', title: 'Slip Casting Workshop', date: '2024-07-05', image: '/assets/eventsImg.png', description: 'Learn slip casting techniques to produce precise and uniform ceramic pieces.' },
  { id: 8, size: 'small', title: 'Raku Firing Techniques', date: '2024-08-12', image: '/assets/eventsImg.png', description: 'Discover the unique and exciting world of Raku firing in this workshop.' }
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