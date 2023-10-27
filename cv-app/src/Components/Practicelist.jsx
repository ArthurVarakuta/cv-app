import PracticeInfo from "./PracticeInfo.jsx";
import React from "react";

function Practicelist({
                          company,
                          companyChange,
                          titleChange,
                          workStartDateChange,
                          workEndDateChange,
                          workLocationChange,
                          workDescriptionChange,
                          sendWorkInfo
                      }) {
    return (
        <ul className={"list"}>

            <button onClick={()=>{
                return <PracticeInfo key={company} company={company} companyChange={companyChange} titleChange={titleChange} workStartDateChange={workStartDateChange} workEndDateChange={workEndDateChange} workLocationChange={workLocationChange} workDescriptionChange={workDescriptionChange} sendWorkInfo={sendWorkInfo}></PracticeInfo>
            }} className="add-section-button">+ Practice</button>
        </ul>
    )

}
export default Practicelist;