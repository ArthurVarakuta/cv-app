import {useState} from 'react';
import "./assets/css/clean.css";
import "./assets/css/index.css";
import "./assets/css/example.css"
import {useForm} from "react-hook-form";
import DownloadCV from "./Components/DownloadCV.jsx";


function App() {
const {register,watch}=useForm();

    const name =watch("name");
    const surname =watch("surname");
    const email =watch("email");
    const phone =watch("phone");
    const address =watch("address");

    const educationPlace =watch("educationPlace");
    const degree =watch("degree");
    const learning_startData =watch("learning_startData");
    const learning_endData =watch("learning_endData");
    const learn_city =watch("learn_city");

    const company =watch("company");
    const title =watch("title");
    const work_startDate =watch("work_startDate");
    const work_endDate =watch("work_endDate");
    const work_city =watch("work_city");

    return (<>
        <div className="app-form">
            <div className="input-wrapper">
                <div className="download-section section-wrapper">
                    <DownloadCV></DownloadCV>
                </div>
            <form className="general-info section-wrapper">
                <h1>Personal Details</h1>
                <h2>Name</h2>
                <input {...register ("name")} type="text" value="John"/>
                <h2>Surname</h2>
                <input {...register ("surname")} type="text" value="Doe"/>
                <h2>E-mail</h2>
                <input {...register ("email")} type="email" value="email@gmail.com"/>
                <h2>Phone number</h2>
                <input {...register ("phone")} type="text" value="+111 11 111 11 11"/>
                <h2>Address</h2>
                <input {...register ("address")} type="text"
                       value="Street, house number, apartment number"/>
            </form>
            <form className="education section-wrapper">
                <h1>Education</h1>
                <h2>Place of education</h2>
                <input {...register ("educationPlace")} type="text" value="University of London"/>
                <h2>Degree*</h2>
                <input {...register ("degree")} type="text" value="Bachelor"/>
                <div className="start-end-date">
                    <h2>Start date</h2>
                    <input {...register ("learning_startData")} type="date"/>
                    <h2>End date</h2>
                    <input {...register ("learning_endData")} type="date"/>
                </div>
                <h2>Location</h2>
                <input {...register ("learn_city")} type="text" value="City, Country"/>
                <div>
                    <button className="delete">Delete</button>
                    <div className="cancel-save-buttons">
                        <button>Cancel</button>
                        <button>Save</button>
                    </div>
                </div>
                <button className="add-section-button">+ Education</button>
            </form>


            <form className="practice section-wrapper">
                <h1>Practice</h1>
                <h2>Company</h2>
                <input {...register ("company")} type="text" value="Freshcode"/>
                <h2>Title</h2>
                <input {...register ("title")} type="text" value="Front-end developer"/>
                <div className="start-end-date">
                    <h2>Start date</h2>
                    <input {...register ("work_startDate")} type="date"/>
                    <h2>End date</h2>
                    <input {...register ("work_endDate")} type="date"/>
                </div>
                <h2>Location</h2>
                <input {...register ("work_city")} type="text" value="City, Country"/>
                <h2>Description</h2>
                <textarea
                    value="Decribe anything about your experience..."
                    name="" id="" cols="44" rows="5"></textarea>
                <div>
                    <button className="delete">Delete</button>
                    <div className="cancel-save-buttons">
                        <button>Cancel</button>
                        <button>Save</button>
                    </div>
                </div>
                <button className="add-section-button">+ Practice</button>
            </form>
        </div>

        <form className="example" id="cv">
            <header className="header">
                <h1>General info</h1>
                <h3>{name} {surname}</h3>
                <div className="horizontal-info-section">
                    <span className="material-symbols-outlined">mail</span><span>{email}</span>
                    <span className="material-symbols-outlined">phone_iphone  </span><span>{phone}</span>
                    <span className="material-symbols-outlined">home</span><span>{address}</span>
                </div>
            </header>
            <section className="education-example">
            <h1 className="cv-title">Education</h1>
                <div className="stat-container">
            <span className="cv-highlight">{educationPlace}</span>
            <span>{degree}</span>
            <span>{learning_startData}</span>
            <span>{learning_endData===""&&learning_endData!=="дд:мм:гггг"?"Today":learning_endData}</span>
            <span>{learn_city}</span>
                </div>
    </section>
            <section className="work">
            <h1 className="cv-title">Work practice</h1>
                <div className="stat-container">
            <span className="cv-highlight">{company}</span>
            <span>{title}</span>
            <span>{work_startDate}</span>
            <span>{work_endDate===""&&work_startDate!==""?"Today":work_endDate}</span>
            <span>{work_city}</span>
                    </div>
            </section>
        </form>
        </div>
    </>)
}

export default App
