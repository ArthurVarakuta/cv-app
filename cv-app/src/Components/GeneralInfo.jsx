import React from 'react';

const GeneralInfo = ({
                         nameChange,
                         surnameChange,
                         emailChange,
                         phonenumberChange,
                         addressChange
                     }) => {
    return (
        <>
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
        </>
    );
};

export default GeneralInfo;
