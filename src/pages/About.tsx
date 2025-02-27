


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


