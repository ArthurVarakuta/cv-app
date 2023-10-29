import PracticeInfo from "./PracticeInfo.jsx";
import React, {useState} from "react";
import {sendWorkInfo} from "../assets/utiljs/sendEducationWorkInfo.js";

function Practicelist({
                          company,
                          companyChange,
                          titleChange,
                          workStartDateChange,
                          workEndDateChange,
                          workLocationChange,
                          workDescriptionChange
                      }) {

    const [practiceInfoList, setPracticeInfoList] = useState([]);
    const handleAddPracticeInfo = () => {
        setPracticeInfoList([...practiceInfoList,{}])
        console.log(practiceInfoList)
    }
    return (
        <ul className={"list"}>
            {practiceInfoList.map(() => {
                return <PracticeInfo key={crypto.randomUUID()} company={company} companyChange={companyChange} titleChange={titleChange} workStartDateChange={workStartDateChange} workEndDateChange={workEndDateChange} workLocationChange={workLocationChange} workDescriptionChange={workDescriptionChange} sendWorkInfo={sendWorkInfo}></PracticeInfo>
            })}
            <button onClick={handleAddPracticeInfo} className="add-section-button">+ Practice</button>
        </ul>
    )

}
export default Practicelist;


