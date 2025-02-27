


import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

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

      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        navigate('/about', { state: { formData } }); // Pass data to About page
      };
    
  return (
    <div className='box'>
      
      <form onSubmit={handleSubmit}>
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
