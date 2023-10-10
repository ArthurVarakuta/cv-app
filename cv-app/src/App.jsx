import {useState} from 'react';
import "./assets/css/clean.css";
import "./assets/css/index.css";

function App() {

    return (<>
        <div className="app-form">
            <section className="general-info section-wrapper">
                <h1>Personal Details</h1>
                <h2>Name</h2>
                <input type="text" placeholder="John"/>
                <h2>Surname</h2>
                <input type="text" placeholder="Doe"/>
                <h2>E-mail</h2>
                <input type="email" placeholder="email@gmail.com"/>
                <h2>Phone number</h2>
                <input type="text" placeholder="+111 11 111 11 11"/>
                <h2>Address</h2>
                <input type="text"
                       placeholder="Street, house number, apartment number"/>
            </section>
            <section className="education section-wrapper">
                <h1>Education</h1>
                <h2>Place of education</h2>
                <input type="text" placeholder="University of London"/>
                <h2>Degree*</h2>
                <input type="text" placeholder="Bachelor"/>
                <div className="start-end-date">
                    <h2>Start date</h2>
                    <input type="date"/>
                    <h2>End date</h2>
                    <input type="date"/>
                </div>
                <h2>Location</h2>
                <input type="text" placeholder="City, Country"/>
                <div>
                    <button className="delete">Delete</button>
                    <div className="cancel-save-buttons">
                        <button>Cancel</button>
                        <button>Save</button>
                    </div>
                </div>
                <button className="add-section-button">+ Education</button>
            </section>


            <section className="practice section-wrapper">
                <h1>Practice</h1>
                <h2>Company</h2>
                <input type="text" placeholder="Freshcode"/>
                <h2>Title</h2>
                <input type="text" placeholder="Front-end developer"/>
                <div className="start-end-date">
                    <h2>Start date</h2>
                    <input type="date"/>
                    <h2>End date</h2>
                    <input type="date"/>
                </div>
                <h2>Location</h2>
                <input type="text" placeholder="City, Country"/>
                <h2>Description</h2>
                <textarea
                    placeholder="Decribe anything about your experience..."
                    name="" id="" cols="44" rows="5"></textarea>
                <div>
                    <button className="delete">Delete</button>
                    <div className="cancel-save-buttons">
                        <button>Cancel</button>
                        <button>Save</button>
                    </div>
                </div>
                <button className="add-section-button">+ Practice</button>
            </section>
        </div>
        <div className="example">
            <header>
                <h1></h1>
                <span></span>
                <span></span>
                <span></span>
            </header>


            <h1></h1>
            <span></span>
            <span></span>
            <span></span>
            <span></span>

            <h1></h1>
            <span></span>
            <span></span>
            <span></span>
            <span></span>

            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </>)
}

export default App
