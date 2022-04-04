import React, { useState } from 'react';
import { StudentsCollection } from '../api/students';
import { useNavigate } from 'react-router-dom';

export const AddStudent = () => {
    const [name, setName] = useState("");
    const [birthYear, setBirthYear] = useState("");
    const [parentName, setParentName] = useState("");
    const [parentEmail, setParentEmail] = useState("");
    const [group, setGroup] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();

      StudentsCollection.insert({
          name,
          birthYear,
          parent: parentName,
          email: parentEmail,
          group
      })

      setName("");
      setBirthYear("");
      setParentName("");
      setParentEmail("");
      setGroup("");
      navigate("/students", {replace: true});
    };

    return (
        <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type='text'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Birth Year: </label>
          <input 
            type='text' 
            placeholder='Birth Year'
            value={birthYear}
            onChange={(e) => setBirthYear(e.target.value)}
          />
        </div>


        <div>
          <label>Parent Name: </label>
          <input
            type='text'
            placeholder='Parent Name' 
            value={parentName}
            onChange={(e) => setParentName(e.target.value)}/>
        </div>


        <div>
          <label>Parent Email: </label>
          <input 
            type='text'
            placeholder='Parent Email'
            value={parentEmail}
            onChange={(e) => setParentEmail(e.target.value)}/>
        </div>


        <div>
          <label>Group: </label>
          <input 
            type='text'
            placeholder='Group'
            value={group}
            onChange={(e) => setGroup(e.target.value)}
            />
        </div>

        <button type="submit">Submit</button>


    </form>
    )

};