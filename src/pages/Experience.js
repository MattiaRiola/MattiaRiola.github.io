import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css"

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline >
        <VerticalTimelineElement>
          <h3 className="vertical-timeline-element-title">Software Engineer</h3>
        </VerticalTimelineElement>
      </VerticalTimeline>

    </div>
  )
}

export default Experience;