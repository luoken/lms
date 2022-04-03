import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTracker } from 'meteor/react-meteor-data';
import { StudentsCollection } from '../api/students';


export const App = () => {
  // const getGroup = () => {
  //   const list = [];
  //   const groups = StudentsCollection.find({}, {fields: {'group':1}}).fetch();
  //   groups.filter(group => group.group !== "").map(group => list.push(group.group));
  //   const uniqueGroup = [...new Set(list)];

  //   return uniqueGroup;
  // };

  // const aggregateMembers = (uniqueGroup, list) => {
  //   uniqueGroup.map(group => {
  //     const students = StudentsCollection.find({group: `${group}`}, {fields: {'name':1}}).fetch();
  //     const studentNames = students.map(student => student.name);
  //     list.push({
  //       group, members: studentNames
  //     });
  //   })
  // };

  // const groups = useTracker(() => { 
  //   const listOfMembers = [];
  //   aggregateMembers(getGroup(), listOfMembers);
  //   return listOfMembers;
  // });


  // const [groupState, setGroupState] = useState([]);

  // useEffect(() => {
  //   setGroupState(groups);
  //   console.log(groupState)
  // }, [])

  return (
    <div>
      <Link to="/students">Student</Link> | <Link to="/groups">Group</Link>
    </div>
  )
};
