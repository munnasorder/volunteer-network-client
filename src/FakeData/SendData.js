import React from 'react';
import volunteerData from './fakeData.json'

const SendData = () => {
    const sendData = () => {
        fetch('https://evening-depths-86121.herokuapp.com/addData',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(volunteerData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <div>
            <button onClick={sendData}>Send Data</button>
        </div>
    );
};

export default SendData;