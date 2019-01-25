import React from 'react';

const Counter = (props) => {
  return (
    <div>
      <p>{props.id}</p>
      <button onClick={props.onDeleteCounter(props.id)}>Delete</button>
      <button onClick={props.onCountClick(props.id)}>clicks: {props.counts}</button>
    </div>
  )
}

export default Counter;