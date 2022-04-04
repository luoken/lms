import React from 'react';
import { Link } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <Link to="/students">Student</Link> | <Link to="/groups">Group</Link>
    </div>
  )
};
