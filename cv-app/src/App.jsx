import React, {useState} from 'react';
import "./assets/css/clean.css";
import "./assets/css/index.css";
import "./assets/css/example.css"
import "./assets/utiljs/onChangeHandlers.js";
import Collapsible from "react-collapsible";
import downloadCVHandler from "./assets/utiljs/downloadCVHandler.js";
import EducationForm from "./Components/EducationInfo.jsx";
import {sendEducationForm, sendWorkInfo} from "./assets/utiljs/sendEducationWorkInfo.js";
import PracticeInfo from "./Components/PracticeInfo.jsx";
import handleCreatePractice from "./Components/Practicelist.jsx";
import Practicelist from "./Components/Practicelist.jsx";


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

    return (<>
        <div className="app-form">
            <div className="input-wrapper">
                <div className="download-section section-wrapper">
                    <button onClick={()=>{
                        downloadCVHandler();
                    }}>Print my CV</button>
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
                    <EducationForm educationPlace={educationPlace} educationPlaceChange={educationLocationChange} degree={degree} educationStartDateChange={educationStartDateChange} educationEndDateChange={educationEndDateChange} educationLocationChange={educationLocationChange}></EducationForm>

                    <button  className="add-section-button">+ Education</button>
            </div>
                <div className="practice section-wrapper">
                    <h1>Practice</h1>
                    <PracticeInfo company={company} companyChange={companyChange} titleChange={titleChange} workStartDateChange={workStartDateChange} workEndDateChange={workEndDateChange} workLocationChange={workLocationChange} workDescriptionChange={workDescriptionChange} sendWorkInfo={sendWorkInfo}></PracticeInfo>
                    <Practicelist company={company} companyChange={companyChange} titleChange={titleChange} workStartDateChange={workStartDateChange} workEndDateChange={workEndDateChange} workLocationChange={workLocationChange} workDescriptionChange={workDescriptionChange} sendWorkInfo={sendWorkInfo}>

                    </Practicelist>

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
