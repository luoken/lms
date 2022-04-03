import React, {useState} from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { StudentsCollection } from '../api/students';
import { Link } from 'react-router-dom';

export const Student = () => {  
  const students = useTracker(() => {
    return StudentsCollection.find().fetch();
  });

  return (
    <div>
      <Link to="/students/new">New Student</Link>
      <table>
        <thead>
          <tr>
            <th style={{paddingRight: "5px"}}>Student</th>
            <th style={{paddingRight: "5px"}}>Age</th>
            <th style={{paddingRight: "5px"}}>Parent</th>
            <th style={{paddingRight: "5px"}}>Email</th>
            <th style={{paddingLeft: "5px"}}>Group</th>
          </tr>
        </thead>
        <tbody>
          {students.map(
            student => 
              <tr key={student._id}>
                <td>{student.name}</td>
                <td>{new Date().getFullYear() - student.birthYear}</td>
                <td>{student.parent}</td>
                <td>{student.email}</td>
                <td>{student.group}</td>
              </tr>
          )}

        </tbody>
      </table>
      <Link to="/">Back</Link>
    </div>
  );
};
