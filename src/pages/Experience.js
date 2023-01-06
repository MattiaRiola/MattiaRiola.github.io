import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css"
import ExperienceCard from '../components/cards/ExperienceCard';
import  experiences from '../data/ExperiencesData';


function Experience() {
  return (
      <VerticalTimeline 
        lineColor="black"
      >
        {experiences.map(experience =>
            <ExperienceCard experience={experience}/>
          )}
      </VerticalTimeline>
    
  )
}

export default Experience;