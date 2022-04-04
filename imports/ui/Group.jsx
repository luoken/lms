import React, { useEffect, useState, useRef  } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { StudentsCollection } from '../api/students';
import { Link } from 'react-router-dom';

export const Group = () => {
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


  const mountedRef = useRef();
  const [groupState, setGroupState] = useState([]);
  const [isAddGroup, setIsAddGroup] = useState(true);
  const [groupName, setGroupName] = useState("");

  useEffect(() => {
    if(mountedRef.current == []){
      console.log("current", mountedRef.current);
      setGroupState(groups)
    }
  }, [groupState])

  useEffect(() => {
    mountedRef.current = groups;
    setGroupState(groups);
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    setGroupState([...groupState, {group: groupName, members: []}]);
    setGroupName("");
    setIsAddGroup(!isAddGroup);
  };


  const handleOnClick = (e) => {
    e.preventDefault();

    setIsAddGroup(!isAddGroup);
  }

    if(!isAddGroup){
      return (
        <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
            <input value={groupName} placeholder='Name' onChange={(e) => setGroupName(e.target.value)} />
  
            <button type="submit">Add</button>
        </div>
      </form>
      )

    }
    else {
      return (
        <div>
        <button onClick={handleOnClick}>Add Group</button>
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

    }

  
};