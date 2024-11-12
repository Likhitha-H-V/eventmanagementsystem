import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import eventsData from '../events.json';
import { AuthContext } from '../src/authContext.jsx';
import './CSS/eventdetails.css'

function EventDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const event = eventsData.find((event) => event.id === parseInt(id));
  const [availableSeats, setAvailableSeats] = useState(event.availableSeats);

  const handleBooking = () => {
    if (!user) {
      navigate('/login');
      return;
    }
    if (availableSeats > 0) {
      setAvailableSeats(availableSeats - 1);
    } else {
      alert('Event is fully booked.'); 
    }
  };

  return (
    <div className='eventDetails'>
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <p>Category: {event.category}</p>
      <p>Date: {event.date}</p>
      <p>Available Seats: {availableSeats}</p>
      <p>Price: ₹{event.price}</p>
      <button onClick={handleBooking} disabled={availableSeats === 0}>
        Book Ticket
      </button>
    </div>
  );
}

export default EventDetail;