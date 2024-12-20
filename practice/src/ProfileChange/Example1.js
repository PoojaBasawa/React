// import React from 'react'

// function Example1(){
//     return(
//         <>
//             <div style={{border:'2px solid red'}}>
//                 <center>
//                 <br/><br/><br/>
//                     <div style={{ border: '2px solid blue', padding: '0px 0px' }}>
//                         <h1>Upload Profile Picture</h1>
//                         <br/><br/><br/><br/>
//                         <img alt="img not displayed"></img>
//                         <br/><br/>
//                     </div>
//                     <br/><br/>
//                     <div style={{ border: '2px solid blue' }}>
//                         <h1>Choose the Image</h1>
//                         <button>Male</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button>Female</button>
//                 <br/><br/><br/><br/>
//                 <br/><br/>
//                         <img alt="img not displayed"></img>
//                         <br/><br/>
//                     </div>
//                     <br/><br/><br/>
//                 </center>
//             </div>
//         </>
//     )
// }

// export default Example1

import React, { useState } from 'react';

function Example1() {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

  return (
    <>
      <div style={{ border: '2px solid red' }}>
        <center>
          <br /><br /><br />
          <div style={{ border: '2px solid blue', padding: '0px 0px' }}>
            <h1>Upload Profile Picture</h1>
            <br /><br /><br /><br />
            <br /><br />
          </div>
          <br /><br />
          <div style={{ border: '2px solid blue' }}>
            <h1>Choose the Image</h1>
            <button onClick={() => handleGenderSelect('Male')}>Male</button>{' '}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => handleGenderSelect('Female')}>Female</button>
            <br /><br /><br /><br />
            <br /><br />
            <br /><br />
          </div>
          <br /><br /><br />
        </center>
      </div>
    </>
  );
}

export default Example1;