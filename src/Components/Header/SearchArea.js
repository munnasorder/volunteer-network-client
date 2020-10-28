import React from 'react';
import Event from '../Event/Event';
import Header from './Header';
import './heder.css'

const SearchArea = () => {
    return (
        <div>
            <div className="background-img">
            <Header></Header>
            <div >
                <div className="heading h2 mt-4 text-center">
                    <label>I GROW BY HELPING PEOPLE IN NEED</label>
                </div>
                <div className="d-flex justify-content-center align=items-center">
                    <div className="input-group m-2 p-2 w-50">
                        <input className="form-control my-0 py-1" type="text" placeholder="Search...." aria-label="Search" />
                        <div className="input-group-append">
                            <span className="input-group-text bg-primary text-white"> Search </span>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <Event></Event>
                </div>
            </div>
        </div>
        </div>
    );
};

export default SearchArea;