import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const EventCard = ({ event }) => {
  const eventDate = new Date(event.date);
  const isPastEvent = eventDate < new Date();
  const navigate = useNavigate();

  const formattedDate = eventDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <motion.div
      className="w-full h-full rounded-2xl overflow-hidden group relative"
      initial={{ scale: 0.7, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", duration: 1 }}
      whileHover={{ scale: 1.02 }}
      onClick={() =>
        navigate(`/events/details`, {
          state: { event },
        })
      }
    >
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-full object-cover absolute inset-0 z-0"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent z-10" />

      <div className="relative z-20 h-full flex flex-col justify-end p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 bg-gradient-to-r from-[#E64467] to-[#7E5CC5] rounded-full text-sm text-white">
            {formattedDate}
          </span>
        </div>

        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#F9C0CF] to-[#56B4F0] mb-2">
          {event.title}
        </h3>
        <p className="text-gray-300 line-clamp-3">{event.description}</p>
      </div>
    </motion.div>
  );
};

export default EventCard;
