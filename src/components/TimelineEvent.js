import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  // Fill in your code here
  return(
    <section>
      <h2> {props.person}</h2>
      <p> {props.status}</p>
      <p> <Timestamp
        time= {props.timeStamp}
        /></p>
    </section>
  );
}	

export default TimelineEvent;
