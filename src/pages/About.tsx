// import React from 'react'
// import { useLocation } from 'react-router-dom'

// function About() {
//     React
//     const location = useLocation();
//     const { name, email, phone, employmentStatus } = location.state as {
//         name: string;
//         email: string;
//         phone: string;
//         employmentStatus: string;
//       };
//   return (
//     <div>
//             <h1>About Page</h1>
//       <p>Name: {name}</p>
//       <p>Email: {email}</p>
//       <p>Phone Number: {phone}</p>
//       <p>Employment Status: {employmentStatus}</p>

//     </div>
//   )
// }

// export default About


import React from 'react'

interface About {
    formData: {
      name: string;
      email: string;
      phoneNumber: string;
      employmentStatus: string;
    };
  }
  function About (formData :any) {
    React
  return (
    <div>
        <h1>About Page</h1>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Phone Number: {formData.phoneNumber}</p>
      <p>Employment Status: {formData.employmentStatus}</p>
    </div>
  )
}

export default About


