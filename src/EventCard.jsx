import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/eventcard.css'
function EventCard({ event }) {
  return (
    
    <section className='cardContainer'>
      <div className="card">
        <h3>{event.title}</h3>
        <p>Seats Available : {event.availableSeats}</p>
        <p>{event.category} | {event.date}</p>
        <Link to={`/event/${event.id}`}>View Details</Link>
      </div>
    </section>
 
  );
}

export default EventCard;