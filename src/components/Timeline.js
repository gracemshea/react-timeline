import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  // Fill in your code here
  const timelineEventComponents = props.events.map((event, index)=> {
    return <TimelineEvent
      person= {event.person}
      status= {event.status}
      timeStamp= {event.timeStamp}
      key={index}
      />
  });

   return (
    <section className="timeline">
      {timelineEventComponents}
    </section>
  )
}

export default Timeline;
