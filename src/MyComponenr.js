import React from 'react';
import './MyComponent.css';

function MyComponent(props) {
  return (
    <div className="my-component">
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </div>
  );
}

export default MyComponent;
