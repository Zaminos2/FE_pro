import React, { useState } from 'react';

function Form() {
  const [user, setUser] = useState({});
  const [userData, setUserData] = useState({});

  function handleInputChange(event) {
    const fieldName = event.target.name;
    const value = event.target.value;

    setUserData((prevUserData) => ({
      ...prevUserData,
      [fieldName]: value,
    }));
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    if (!userData.name || !userData.email || !userData.password) {
      alert('Please fill in all fields.');
      return;
    }

    const usersFromLocalStorage = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = usersFromLocalStorage.find((u) => u.email === userData.email);

    if (existingUser) {
      alert('User with this email already exists.');
      return;
    }

    usersFromLocalStorage.push(userData);
    localStorage.setItem('users', JSON.stringify(usersFromLocalStorage));

    setUser(userData);
    setUserData({});
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={userData.name || ''}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userData.email || ''}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userData.password || ''}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Form;
