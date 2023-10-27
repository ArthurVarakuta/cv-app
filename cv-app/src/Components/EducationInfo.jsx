import React from "react";
import Collapsible from "react-collapsible";
const EducationForm = ({
                           educationPlace,
                           educationPlaceChange,
                           degreeChange,
                           educationStartDateChange,
                           educationEndDateChange,
                           educationLocationChange,
                           sendEducationForm
                       }) => {
    return (
        <Collapsible
            triggerClassName="trigger-closed-style"
            triggerOpenedClassName="trigger-style"
            transitionTime={100}
            openedClassName="collapsible-wrapper-opened"
            className="collapsible-wrapper-closed"
            trigger={educationPlace}
        >
            <h2>Place of education</h2>
            <input
                onChange={educationPlaceChange}
                type="text"
                placeholder="University of London"
            />
            <h2>Degree*</h2>
            <input
                onChange={degreeChange}
                type="text"
                placeholder="Bachelor"
            />
            <div className="start-end-date">
                <h2>Start date</h2>
                <input
                    onChange={educationStartDateChange}
                    type="date"
                />
                <h2>End date</h2>
                <input
                    onChange={educationEndDateChange}
                    type="date"
                />
            </div>
            <h2>Location</h2>
            <input
                onChange={educationLocationChange}
                type="text"
                placeholder="City, Country"
            />
            <div>
                <button className="delete">Delete</button>
                <div className="cancel-save-buttons">
                    <button>Cancel</button>
                    <button onClick={sendEducationForm}>Save</button>
                </div>
            </div>
        </Collapsible>
    );
};

export default EducationForm;