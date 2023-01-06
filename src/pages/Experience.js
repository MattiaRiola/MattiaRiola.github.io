import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css"
import ExperienceCard from '../components/cards/ExperienceCard';

const experiences = [
  {
    title: "Software developer",
    company: "AizoOn",
    date: "10/2020 - Present",
    description: "Focus on Backend development in Java (Spring Framework using microservices approach) plus some devops activities like GitLab pipeline docker/docker-compose management",
    location: "Turin, Italy",
    iconType: "work",
    experienceImg: "coding.gif",
  },
  {
    title: "Master's Degree: Computer Engineering",
    company: "Polytechnic of Torino",
    date: "03/2020 - Present",
    description: "Experience in software development and maintenance thanks to laboratories and projects",
    location: "Turin, Italy",
    iconType: "school",
    experienceImg: "book.gif",
  },
  {
    title: "Bachelor's Degree: Computer Engineering",
    company: "Polytechnic of Torino",
    date: "09/2015 - 03/2020",
    description: "General engineering education with in depth study of IT field",
    location: "Turin, Italy",
    iconType: "school",
    experienceImg: "book.gif",
  },
  {
    title: "Secondary School Diploma: Electronic and Telecom.",
    company: "ITIS G. Armellini",
    date: "09/2009 - 07/2014",
    description: "Study of basic electronic components and telecommunication systems",
    location: "Rome, Italy",
    iconType: "school",
    experienceImg: "open-book.gif",
  },
  {
    title: "Electronic Technician",
    company: "ATAC S.p.A.",
    date: "04/2014 - 04/2014",
    description: "Maintenance of electronic devices and systems",
    location: "Rome, Italy",
    iconType: "work",
    experienceImg: "chip.gif",
  },
  {
    title: "Electronic / Energetic Technician",
    company: "Sunload S.r.l.",
    date: "09/2013 - 09/2013",
    description: "EU4GEA project: installation and production of photovoltaic panels and electric batteries for smartphones",
    location: "Berlin, Germany",
    iconType: "work",
    experienceImg: "solar-panel.gif",
  }
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