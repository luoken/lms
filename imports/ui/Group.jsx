import React, { useEffect, useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { StudentsCollection } from '../api/students';
import { Link } from 'react-router-dom';
import {useLocation} from "react-router-dom";

export const Group = () => {
  // let data = useLocation();
  // console.log(data)

  // const groups = data.state.groupState.groups;

  
  const getGroup = () => {
    const list = [];
    const groups = StudentsCollection.find({}, {fields: {'group':1}}).fetch();
    groups.filter(group => group.group !== "").map(group => list.push(group.group));
    const uniqueGroup = [...new Set(list)];

    return uniqueGroup;
  };

  const aggregateMembers = (uniqueGroup, list) => {
    uniqueGroup.map(group => {
      const students = StudentsCollection.find({group: `${group}`}, {fields: {'name':1}}).fetch();
      const studentNames = students.map(student => student.name);
      list.push({
        group, members: studentNames
      });
    })
  };

  const groups = useTracker(() => { 
    const listOfMembers = [];
    aggregateMembers(getGroup(), listOfMembers);
    return listOfMembers;
  });


  const [groupState, setGroupState] = useState([]);

  useEffect(() => {
    setGroupState(groups);
  }, [groupState])

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th style={{paddingRight: "10px"}}>Group</th>
            <th style={{paddingLeft: "10px"}}>Members</th>
          </tr>
        </thead>
        <tbody>
        {groupState.map(
            (group, index) => 
              <tr key={index}>
                <td style={{paddingRight: "10px"}}>{group.group}</td>
                <td>{group.members.join(", ")}</td>
              </tr>
          )}

        </tbody>
      </table>
      <Link to="/">Back</Link>
    </div>
  )
};