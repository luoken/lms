import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { App } from '/imports/ui/App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Student } from '/imports/ui/Student';
import { Group } from '/imports/ui/Group';
import { AddStudent } from '/imports/ui/AddStudent';


Meteor.startup(() => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="students" element={<Student />}/>
        <Route path="students/new" element={<AddStudent />}/>
        <Route path="groups" element={<Group />}/>

      </Routes>
    </BrowserRouter>
    , document.getElementById('react-target'));
});
