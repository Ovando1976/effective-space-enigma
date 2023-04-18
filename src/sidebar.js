import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/tasks">Tasks</Link></li>
          <li><Link to="/forms-contracts">Forms & Contracts</Link></li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
