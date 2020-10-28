import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../Image/Group 1329.png'

const Register = () => {
    const { id } = useParams();
    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {displayName,email} = loggedInUser;
    const [customEvent, setCustomEvent] = useState({})
    const [item, setItem] = useState({})

    const handleFormSubmit = (e) => {
        fetch(`https://evening-depths-86121.herokuapp.com/addEvent`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(customEvent)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert("Your Event Add successfully!")
                }
                history.replace('/UserEvent')
            })
        e.preventDefault();
    }
    const handleOnChange = (e) => {
        const newEvent = { ...customEvent }
        if (e.target.name === 'name') {
            newEvent.name = e.target.value
        }
        if (e.target.name === 'email') {
            newEvent.email = e.target.value
        }
        if (e.target.name === 'title') {
            newEvent.title = e.target.value
        }
        if (e.target.name === 'date') {
            newEvent.date = e.target.value
        }
        setCustomEvent(newEvent)
        e.preventDefault()
    }
    
    useEffect(() => {
        fetch(`https://evening-depths-86121.herokuapp.com/searchEvent/${id}`)
            .then(res => res.json())
            .then(data => {
                setItem(data)
                const userEvent = {
                    name: displayName,
                    email: email,
                    title: data.title,
                    date: data.date,
                    eventId: id
                }
                setCustomEvent(userEvent);
            })
    }, [])
    
    return (
        <div className="container">
            <div className="login d-flex justify-content-center">
                <div className="row">
                    <div className="mt-5">
                        <Link to="/"><img src={logo} height="70" alt="" /></Link>
                    </div>
                </div>
            </div><br/>
            <div className="row d-flex justify-content-center">
                <div className="card w-50 mt-5">       
                    <div className="card-body px-lg-5">
                        <h4 className="mb-2">Register as a Volunteer</h4>
                        <form onSubmit={handleFormSubmit} className="text-center" action="">
                            <div className="md-form mt-3">
                                <input name="name" type="text " onBlur={handleOnChange} placeholder="Full Name" defaultValue={displayName} className="form-control mb-3" />
                            </div>
                            <div className="md-form">
                                <input name="email" type="email" onBlur={handleOnChange} placeholder="Email" defaultValue={email} className="form-control" />
                            </div>
                            <div className="md-form mt-3">
                                <input name="date" type="text" onBlur={handleOnChange} placeholder="mm-dd-yyy" defaultValue={item.date} className="form-control"  />
                            </div>
                            <div className="md-form mt-3">
                                <input name="description" type="text" onBlur={handleOnChange} placeholder="Description" defaultValue={item.description} className="form-control"  />
                            </div>
                            <div className="md-form mt-3">
                                <input name="title" type="text" onBlur={handleOnChange} placeholder="Title" defaultValue={item.title} className="form-control"  />
                            </div>
                            <button className="btn btn-success mt-3" type="submit">Registration</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;