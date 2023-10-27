import PracticeInfo from "../../Components/PracticeInfo.jsx";
import {sendWorkInfo} from "./sendEducationWorkInfo.js";
function handleCreatePractice() {
    return (
        <>
            <PracticeInfo company={company} companyChange={companyChange} titleChange={titleChange} workStartDateChange={workStartDateChange} workEndDateChange={workEndDateChange} workLocationChange={workLocationChange} workDescriptionChange={workDescriptionChange} sendWorkInfo={sendWorkInfo}></PracticeInfo>
        </>
    )

}
export default handleCreatePractice;