import React, { useState, useEffect } from 'react';
import eventsData from '../events.json';
import EventCard from './EventCard';
import './CSS/eventlist.css'
function EventList() {
  const [events, setEvents] = useState([]);
  const [category, setCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setEvents(eventsData); 
  }, []);

  const filteredEvents = events.filter((event) =>
    (category === '' || event.category === category) &&
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className='searchContainer'>
      <input
        placeholder="Search events"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="Music">Music</option>
        <option value="Tech">Tech</option>
        <option value="Dance">Dance</option>
      </select>
      </div>
      <div>
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

export default EventList;