import React from 'react';

const MyComponent = () => {

    return (
       <>
           <form className="practice section-wrapper">
               <h1>Practice</h1>
               <h2>Company</h2>
               <input  type="text" value="Freshcode"/>
               <h2>Title</h2>
               <input  type="text" value="Front-end developer"/>
               <div className="start-end-date">
                   <h2>Start date</h2>
                   <input  type="date"/>
                   <h2>End date</h2>
                   <input  type="date"/>
               </div>
               <h2>Location</h2>
               <input type="text" value="City, Country"/>
               <h2>Description</h2>
               <textarea
                   value="Decribe anything about your experience..."
                   name="" id="" cols="44" rows="5"></textarea>
               <div>
                   <button className="delete">Delete</button>
                   <div className="cancel-save-buttons">
                       <button>Cancel</button>
                       <button>Save</button>
                   </div>
               </div>
               <button className="add-section-button">+ Practice</button>
           </form>
       </>
    );
};

export default MyComponent;
