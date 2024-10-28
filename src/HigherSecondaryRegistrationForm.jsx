import React, { useState } from 'react';
import './HigherSecondaryRegistrationForm.css'

const HigherSecondaryRegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    phone: '',
    dob: '',
    course: '',
  });

  const [errors, setErrors] = useState({});

  const courses = ['Biology Science', 'Commerce', 'Humanities','Computer Science'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); 
  };

  const validatePhoneNumber = (phone) => {
    const regex = /^\d{10}$/; 
    return regex.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validatePhoneNumber(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; 
    }

    
    console.log('Form Data:', formData);
    alert('Succesfully registered')
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      address: '',
      email: '',
      phone: '',
      dob: '',
      course: '',
    });
   
  };

  return (
    <div className='container'>
      <h1 className='head'>
        Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div className='fill'>
          <label>First Name:</label>
          <input 
            type="text" 
            name="firstName" 
            value={formData.firstName} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className='fill'>
          <label>Last Name:</label>
          <input 
            type="text" 
            name="lastName" 
            value={formData.lastName} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className='fill'>
          <label>Address:</label>
          <input 
            type="text" 
            name="address" 
            value={formData.address} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className='fill'>
          <label>Email:</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className='fill'>
          <label>Phone Number:</label>
          <input 
            type="tel" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
            required 
          />
          {errors.phone && <span style={{ color: 'red' }}>{errors.phone}</span>}
        </div>
        <div className='fill'>
          <label>Date of Birth:</label>
          <input 
            type="date" 
            name="dob" 
            value={formData.dob} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className='fill'>
          <label>Course:</label>
          <select name="course" value={formData.course} onChange={handleChange} required>
            <option value="">Select a course</option>
            {courses.map((course, index) => (
              <option key={index} value={course}>{course}</option>
            ))}
          </select>
        </div>
        <div>
          <button className='btn' type="submit">Register</button>
          <button className='btn-reset' type="button" onClick={handleReset}>Reset</button>
        </div>
      </form>
    </div>
  );
};

export default HigherSecondaryRegistrationForm;
