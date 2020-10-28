import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ShowUserEvent = (props) => {
    const events = props.data;
    const [evenData, setEvenData] = useState({});
    useEffect(() => {
        fetch(`https://evening-depths-86121.herokuapp.com/searchEvent/${events.eventId}`)
            .then(res => res.json())
            .then(data => {
                setEvenData(data)
            })
    }, [])

    return (
        <div className="card ml-5 mb-5" style={{width: "18rem"}}>
        <img src={evenData.image} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{evenData.title}</h5>
          <p className="card-text">{evenData.date}</p>
          <Link onClick={() => props.handleCancel(evenData._id)} to="#" className="btn btn-danger">Cancel</Link>
        </div>
      </div>
    );
};

export default ShowUserEvent;