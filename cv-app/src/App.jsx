import React, {useState} from 'react';
import "./assets/css/clean.css";
import "./assets/css/index.css";
import "./assets/css/example.css"
import DownloadCV from "./Components/DownloadCV.jsx";
import "../src/assets/onChangeHandlers.js";
import Collapsible from "react-collapsible";

function App() {

    const [name,setName]=useState("John");
    const [surname,setSurname]=useState("Doe");
    const [email,setEmail]=useState("email@gmail.com");
    const [phonenumber,setPhonenumber]=useState("+111 11 111 11 11");
    const [address,setAddress]=useState("Street, house number, apartment number");

    const [educationPlace, setEducationPlace]=useState("University of London");
    const [degree, setDegree]=useState("Bachelor");
    const [educationStartDate, setEducationStartDate]=useState("12-10-2020");
    const [educationEndDate, setEducationEndDate]=useState("12-10-2023");
    const [educationLocation, setEducationLocation]=useState("UK, Whales");

    const [company, setCompany]=useState("Freshcode");
    const [title, setTitle]=useState("Front-end web developer");
    const [workStartDate, setWorkStartDate]=useState("12-10-2020");
    const [workEndDate, setWorkEndDate]=useState("12-10-2023");
    const [workLocation, setWorkLocation]=useState("UK, London");
    const [workDescription, setWorkDescription]=useState("Cool!");


    let nameChange=(e)=>{
        const newValue= e.target.value;
        setName(newValue);
    }
    let surnameChange=(e)=>{
        const newValue= e.target.value;
        setSurname(newValue);
    }
    let emailChange=(e)=>{
        const newValue= e.target.value;
        setEmail(newValue);
    }
    let phonenumberChange=(e)=>{
        const newValue= e.target.value;
        setPhonenumber(newValue);
    }
    let addressChange=(e)=>{
        const newValue= e.target.value;
        setAddress(newValue);
    }


    let educationPlaceChange=(e)=>{
        const newValue= e.target.value;
        setEducationPlace(newValue);
    }
    let degreeChange=(e)=>{
        const newValue= e.target.value;
        setDegree(newValue);
    }
    let educationStartDateChange=(e)=>{
        const newValue= e.target.value;
        setEducationStartDate(newValue);
    }
    let educationEndDateChange=(e)=>{
        const newValue= e.target.value;
        setEducationEndDate(newValue);
    }
    let educationLocationChange=(e)=>{
        const newValue= e.target.value;
        setEducationLocation(newValue);
    }


    let companyChange=(e)=>{
        const newValue= e.target.value;
        setCompany(newValue);
    }
    let titleChange=(e)=>{
        const newValue= e.target.value;
        setTitle(newValue);
    }
    let workStartDateChange=(e)=>{
        const newValue= e.target.value;
        setWorkStartDate(newValue);
    }
    let workEndDateChange=(e)=>{
        const newValue= e.target.value;
        setWorkEndDate(newValue);
    }
    let workLocationChange=(e)=>{
        const newValue= e.target.value;
        setWorkLocation(newValue);
    }
    let workDescriptionChange=(e)=>{
        const newValue= e.target.value;
        setWorkDescription(newValue);
    }




function sendEducationForm() {
    let educationInfo = {
        educationPlace: {educationPlace},
        degree: {degree},
        educationStartDate: {educationStartDate},
        educationEndDate: {educationEndDate},
        educationLocation: {educationLocation}
    }
    console.log(educationInfo)

}
function sendWorkInfo() {
    let workInfo = {
        company: {company},
        title: {title},
        workStartDate: {workStartDate},
        workEndDate: {workEndDate},
        workLocation: {workLocation},
        workDescription: {workDescription}
    }
    console.log(workInfo)
}



    return (<>
        <div className="app-form">
            <div className="input-wrapper">
                <div className="download-section section-wrapper">
                    <DownloadCV></DownloadCV>
                </div>
                <div className="general-info section-wrapper">
                    <h1>Personal Details</h1>
                    <h2>Name</h2>
                    <input onChange={nameChange} type="text" placeholder="John"/>
                    <h2>Surname</h2>
                    <input onChange={surnameChange}  type="text" placeholder="Doe"/>
                    <h2>E-mail</h2>
                    <input onChange={emailChange}  type="email" placeholder="email@gmail.com"/>
                    <h2>Phone number</h2>
                    <input onChange={phonenumberChange}  type="text" placeholder="+111 11 111 11 11"/>
                    <h2>Address</h2>
                    <input onChange={addressChange} type="text"
                           placeholder="Street, house number, apartment number"/>
                </div>
                <div className="education section-wrapper">
                    <h1>Education</h1>
                    <Collapsible triggerClassName="trigger-closed-style" triggerOpenedClassName="trigger-style" transitionTime={100} openedClassName='collapsible-wrapper-opened' className="collapsible-wrapper-closed" trigger={educationPlace}>
                        <h2>Place of education</h2>
                        <input onChange={educationPlaceChange}  type="text" placeholder="University of London"/>
                        <h2>Degree*</h2>
                        <input onChange={degreeChange} type="text" placeholder="Bachelor"/>
                        <div className="start-end-date">
                            <h2>Start date</h2>
                            <input onChange={educationStartDateChange}  type="date"/>
                            <h2>End date</h2>
                            <input  onChange={educationEndDateChange} type="date"/>
                        </div>
                        <h2>Location</h2>
                        <input onChange={educationLocationChange}  type="text" placeholder="City, Country"/>
                        <div>
                            <button className="delete">Delete</button>
                            <div className="cancel-save-buttons">
                                <button>Cancel</button>
                                <button onClick={()=>sendEducationForm()}>Save</button>
                            </div>
                        </div>
                    </Collapsible>
                    <button  className="add-section-button">+ Education</button>
            </div>
                <div className="practice section-wrapper">
                    <h1>Practice</h1>
                    <Collapsible triggerClassName="trigger-closed-style" triggerOpenedClassName="trigger-style" transitionTime={100} openedClassName='collapsible-wrapper-opened' className="collapsible-wrapper-closed"  trigger={company}>
                        <h2>Company</h2>
                        <input onChange={companyChange} type="text" placeholder="Freshcode"/>
                        <h2>Title</h2>
                        <input onChange={titleChange} type="text" placeholder="Front-end developer"/>
                        <div className="start-end-date">
                            <h2>Start date</h2>
                            <input onChange={workStartDateChange}  type="date"/>
                            <h2>End date</h2>
                            <input onChange={workEndDateChange} type="date"/>
                        </div>
                        <h2>Location</h2>
                        <input onChange={workLocationChange} type="text" placeholder="City, Country"/>
                        <h2>Description</h2>
                        <textarea onChange={workDescriptionChange}
                                  placeholder="Decribe anything about your experience..."
                                  name="" id="" cols="44" rows="5"></textarea>
                        <div>
                            <button className="delete">Delete</button>
                            <div className="cancel-save-buttons">
                                <button>Cancel</button>
                                <button onClick={()=>sendWorkInfo()}>Save</button>
                            </div>
                        </div>
                    </Collapsible>
                    <button className="add-section-button">+ Practice</button>
                </div>
        </div>
        <div className="example" id="cv">
            <header className="header">
                <h1>General info</h1>
                <h3>{name} {surname}</h3>
                <div className="horizontal-info-section">
                    <span className="material-symbols-outlined">mail</span><span>{email}</span>
                    <span className="material-symbols-outlined">phone_iphone  </span><span>{phonenumber}</span>
                    <span className="material-symbols-outlined">home</span><span>{address}</span>
                </div>
            </header>
            <section className="education-example">
            <h1 className="cv-title">Education</h1>
                <div className="stat-container">
            <span className="cv-highlight">{educationPlace}</span>
            <span>{degree}</span>
            <span>{educationStartDate}</span>
            <span>{educationEndDate}</span>
            <span>{educationLocation}</span>
                </div>
        </section>
            <section className="work">
            <h1 className="cv-title">Work practice</h1>
            <div className="stat-container">
            <span className="cv-highlight">{company}</span>
            <span>{title}</span>
            <span>{workStartDate}</span>
            <span>{workEndDate}</span>
            <span>{workLocation}</span>
            <span>{workDescription}</span>
            </div>
            </section>
        </div>
        </div>
    </>)
}
export default App
