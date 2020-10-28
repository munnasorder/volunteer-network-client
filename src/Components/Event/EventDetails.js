import React from 'react';
import './event.css'

const EventDetails = (props) => {
    const {title,image} = props.data;
    console.log(image);
    
    return (
        <div>
        <div style={{width: "12rem"}} className="card m-4 event-card">
            <img className="card-img-top" src={image} alt="" />

            <div className='bg-success'>
                <div className="card-body text-center" >
                    <p className="card-title text-white"><strong>{title}</strong></p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default EventDetails;