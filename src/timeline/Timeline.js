import React from 'react';
import "./Timeline.css";
import Suggestions from '../suggestions/Suggestions';

function Timeline() {
  return (
    <div className="timeline">
        <div className="timeline__left">Timeline</div>
        <div className="timeline__right">
            <Suggestions />
        </div>
    </div>
  )
}

export default Timeline;
