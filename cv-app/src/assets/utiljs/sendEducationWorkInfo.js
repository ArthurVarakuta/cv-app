// legacy!!!
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
export {sendEducationForm, sendWorkInfo};