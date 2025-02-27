


import React, { useState } from 'react'

function Home() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        employmentStatus: ''
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
  return (
    <div className='box'>
      
      <form>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder='Name'/>
        
       <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Email'/>
        
        <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder='PhoneNumber'/>
        
        <label >
          Employment Status:
          <select name="employmentStatus" value={formData.employmentStatus} onChange={handleChange} className='employ'>
            <option value="">Select</option>
            <option value="employed">Employed</option>
            <option value="unemployed">Unemployed</option>
            </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Home
