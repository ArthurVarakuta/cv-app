import React, {useState} from 'react';


const GeneralInfo = () => {
    function sendChildInfo({...functions}) {
        
    }

    const [name,setName]=useState("John");
    const [surname,setSurname]=useState("Doe");
    const [email,setEmail]=useState("email@gmail.com");
    const [phonenumber,setPhonenumber]=useState("+111 11 111 11 11");
    const [address,setAddress]=useState("Street, house number, apartment number");



    return (
        <>
            <form className="general-info section-wrapper">
                <h1>Personal Details</h1>
                <h2>Name</h2>
                <input value={name} type="text" placeholder="John"/>
                <h2>Surname</h2>
                <input value={surname}  type="text" placeholder="Doe"/>
                <h2>E-mail</h2>
                <input  value={email} type="email" placeholder="email@gmail.com"/>
                <h2>Phone number</h2>
                <input value={phonenumber}  type="text" placeholder="+111 11 111 11 11"/>
                <h2>Address</h2>
                <input value={address} type="text"
                       placeholder="Street, house number, apartment number"/>
            </form>
        </>
    );
};

export default GeneralInfo;
