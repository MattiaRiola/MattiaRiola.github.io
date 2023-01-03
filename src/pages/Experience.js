import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css"
import ExperienceCard from '../components/cards/ExperienceCard';

const experiences = [
  {
    title: "Software developer",
    company: "AizoOn",
    date: "2020 - Present",
    description: "Backend development in Java (Spring Framework using microservices approach) and some devops activities like GitLab pipeline docker/docker-compose management",
    location: "Turin, Italy",
    iconType: "work",
    experienceImg: "coding.gif",
  },
  {
    title: "Master's Degree in Computer Engineering (software)",
    company: "Polytechnic of Torino",
    date: "2020 - Present",
    description: "Experience in software development and maintenance thanks to laboratories and projects",
    location: "Turin, Italy",
    iconType: "school",
    experienceImg: "study.gif",
  },
  {
    title: "TODO",
    company: "Google",
    date: "2021 - Present",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.",
    location: "Mountain View, CA",
    iconType: "school",
  },
  {
    title: "TODO",
    company: "Google",
    date: "2021 - Present",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.",
    location: "Mountain View, CA",
    iconType: "school",
  },


];

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