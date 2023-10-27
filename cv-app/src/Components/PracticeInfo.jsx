import React from 'react';
import {sendWorkInfo} from "../assets/utiljs/sendEducationWorkInfo.js";
import Collapsible from "react-collapsible";


const PracticeInfo = ({             company,
                                   companyChange,
                                   titleChange,
                                   workStartDateChange,
                                   workEndDateChange,
                                   workLocationChange,
                                   workDescriptionChange
                               }) => {
    return (
        <Collapsible
            triggerClassName="trigger-closed-style"
            triggerOpenedClassName="trigger-style"
            transitionTime={100}
            openedClassName="collapsible-wrapper-opened"
            className="collapsible-wrapper-closed"
            trigger={company}
        >
            <h2>Company</h2>
            <input onChange={companyChange} type="text" placeholder="Freshcode" />
            <h2>Title</h2>
            <input onChange={titleChange} type="text" placeholder="Front-end developer" />
            <div className="start-end-date">
                <h2>Start date</h2>
                <input onChange={workStartDateChange} type="date" />
                <h2>End date</h2>
                <input onChange={workEndDateChange} type="date" />
            </div>
            <h2>Location</h2>
            <input onChange={workLocationChange} type="text" placeholder="City, Country" />
            <h2>Description</h2>
            <textarea
                onChange={workDescriptionChange}
                placeholder="Describe anything about your experience..."
                name=""
                id=""
                cols="44"
                rows="5"
            ></textarea>
            <div>
                <button className="delete">Delete</button>
                <div className="cancel-save-buttons">
                    <button>Cancel</button>
                    <button onClick={sendWorkInfo}>Save</button>
                </div>
            </div>
        </Collapsible>
    );
};


export default PracticeInfo;
