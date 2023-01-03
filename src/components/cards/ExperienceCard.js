import React from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import colors from "../../styles/Colors"
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import CodeIcon from '@material-ui/icons/Code';

function ExperienceCard(props) {
    var experience = props.experience;
  return (
    <VerticalTimelineElement 
          contentStyle={{background:colors.secondary,color:'black'}}
          contentArrowStyle={{ borderRight: '7px solid'+colors.secondary }}
          date={experience.date}
          dateClassName="vertical-timeline-element-date"
          iconStyle={{ background: colors.secondaryDark, color: '#EEE' }}
          icon={icon(experience.iconType)}
        >
          <div>
            <img src={process.env.PUBLIC_URL + '/resources/icons/coding.gif'}  height="64" width="64"></img>
            <h3 className="vertical-timeline-element-title">{experience.title}</h3>
            <p className="vertical-timeline-element-description">{experience.description}</p>
          </div>

    </VerticalTimelineElement>
  )
}

function icon(iconType){
  switch (iconType) {
    case "school":
      return <SchoolIcon />
    case "coding":
      return <CodeIcon />
    case "work":
      return <WorkIcon/>
    default:
      return <SchoolIcon />
  }
}

export default ExperienceCard