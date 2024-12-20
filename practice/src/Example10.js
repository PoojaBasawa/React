import React, { useState } from 'react';
import './example10.css';

function Example10() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    confpassword: '',
    dob: '',
    gender: '',
    state: '',
    course: '',
    deliveryMode: '',
    comments: '',
  });

  const [passwordError, setPasswordError] = useState(false);
  const [formFieldsError, setFormFieldsError] = useState(false);
  const [submit, setSubmit] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confpassword) {
      setPasswordError(true);
    } else if (
      formData.name === '' ||
      formData.email === '' ||
      formData.phone === '' ||
      formData.password === '' ||
      formData.confpassword === '' ||
      formData.dob === '' ||
      formData.gender === '' ||
      formData.state === '' ||
      formData.course === '' ||
      formData.deliveryMode === '' ||
      formData.comments === ''
    ) {
      setFormFieldsError(true);
    } else {
      setSubmit(true);
      console.log(formData);
    }
  };

  return (
    <div className='container'>
      <h2>Welcome to Employee Registration Form</h2>
      <form onSubmit={handleSubmit} className="form">
        <fieldset>
          <legend>Personal Information</legend>
        <div>
          <label>Name</label><br></br>
          <input
            type='text'
            name='name'
            placeholder='Enter your name'
            value={formData.name}
            onChange={handleChange}
          />
</div>
<div>
          <label>Phone</label><br></br>
          <input
            type='number'
            name='phone'
            placeholder='Enter your phone number'
            value={formData.phone}
            onChange={handleChange}
          /></div>
        <div>
          <label>Email</label><br></br>
          <input
            type='email'
            name='email'
            placeholder='Enter your email'
            value={formData.email}
            onChange={handleChange}
          />
</div><div>
          <label>Password</label><br></br>
          <input
            type='password'
            name='password'
            placeholder='Enter your password'
            value={formData.password}
            onChange={handleChange}
          />
</div>
<div>
          <label>Confirm Password</label><br></br>
          <input
            type='password'
            name='confpassword'
            placeholder='Confirm your password'
            value={formData.confpassword}
            onChange={handleChange}
          /></div>
<div>
          <label>Date of Birth:</label><br></br>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          /></div>
<div>
          <label>Gender:</label><br></br>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            onChange={handleChange}
            checked={formData.gender === 'male'}
          />
          
          <label htmlFor="male">Male</label>

          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            onChange={handleChange}
            checked={formData.gender === 'female'}
          />
          
          <label htmlFor="female">Female</label>

          <input
            type="radio"
            id="other"
            name="gender"
            value="other"
            onChange={handleChange}
            checked={formData.gender === 'other'}
          />
          <label htmlFor="other">Other</label>
          </div><div>
          <label>State:</label><br />
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
          >
            <option value="">Select your state</option>
            <option value="Alabama">Alabama</option>
            <option value="Alaska">Alaska</option>
            <option value="Arizona">Arizona</option>
            <option value="California">California</option>
          </select></div>
        </fieldset>

        <fieldset>
          <legend>Course Information</legend>
          <div>
          <label>Select Course</label><br />
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
          >
            <option value="">Select a course</option>
            <option value="React">React</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
            <option value="Data Science">Data Science</option>
          </select></div>
          <div>
          <label>Delivery Mode</label><br />
          <input
            type='radio'
            id='online'
            name='deliveryMode'
            value='online'
            onChange={handleChange}
          />
          
          <label htmlFor='online'>Online</label>
          <input
            type='radio'
            id='offline'
            name='deliveryMode'
            value='offline'
            onChange={handleChange}
          />
          <label htmlFor='offline'>Offline</label>
          </div>
          <div>
          <label>Comments</label><br />
          <textarea
            name="comments"
            placeholder="Enter any comments or questions"
            value={formData.comments}
            onChange={handleChange}
          ></textarea></div>

          <button type="submit" id="btn">Register</button>
        </fieldset>

        {passwordError && <p className="error">Password doesn't match</p>}
        {formFieldsError && <p className="error">Please fill all the fields</p>}
        {submit && <p className="success">Form submitted successfully</p>}
      </form>
    </div>
  );
}

export default Example10;