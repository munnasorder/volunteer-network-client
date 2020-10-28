import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EventDetails from './EventDetails';
import './event.css'

const Event = () => {
    const [event, setEvent] = useState([])
    useEffect(() => {
        fetch('https://evening-depths-86121.herokuapp.com/events')
        .then(res => res.json())
        .then(data => setEvent(data))
    },[])
    return (
        <div className="d-flex flex-wrap m-4">
        {
            event.length > 0
            ?
            event.map(data => <Link id="event" style={{textDecoration:'none', color: 'white'}} to={`/register/${data._id}`}><EventDetails data={data}></EventDetails> </Link>)
            :
            <h2>Prosassing...</h2>
        }
    </div>
    );
};

export default Event;