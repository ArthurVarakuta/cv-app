import React from 'react';


const EducationInfo = () => {

    return (
        <>
            <form className="education section-wrapper">
                <h1>Education</h1>
                <h2>Place of education</h2>
                <input  type="text" value="University of London"/>
                <h2>Degree*</h2>
                <input type="text" value="Bachelor"/>
                <div className="start-end-date">
                    <h2>Start date</h2>
                    <input  type="date"/>
                    <h2>End date</h2>
                    <input  type="date"/>
                </div>
                <h2>Location</h2>
                <input  type="text" value="City, Country"/>
                <div>
                    <button className="delete">Delete</button>
                    <div className="cancel-save-buttons">
                        <button>Cancel</button>
                        <button>Save</button>
                    </div>
                </div>
                <button className="add-section-button">+ Education</button>
            </form>
        </>
    );
};

export default EducationInfo;
