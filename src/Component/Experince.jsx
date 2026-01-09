import React from 'react';
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import WorkIcon from '@mui/icons-material/Work';

export default function Experince() {
  return (
    <div name="Experience" className=" min-h-screen text-white py-10">
      {/* Header */}
      <div className=" flex justify-center mb-8">
        <h1 className="text-4xl font-bold border-b-2 border-blue-400 pb-2">The Experience</h1>
      </div>

      {/* Timeline */}
      <div className="px-5">
        <VerticalTimeline lineColor="#3B82F6">
          {/* Freelancer Experience */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(55, 65, 81)', color: '#fff', borderRadius: '8px', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)' }}
            contentArrowStyle={{ borderRight: '7px solid rgb(55, 65, 81)' }}
            date="09/08/2024 - present"
            iconStyle={{ background: '#3B82F6', color: '#fff' }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title text-2xl font-semibold">Freelancer</h3>
            <h4 className="vertical-timeline-element-subtitle text-lg italic text-gray-300">Remote</h4>
            <p className="text-gray-200 mt-2">
              Worked on various freelance projects, focusing on web development, UI/UX design, and client-side interactions.
            </p>
          </VerticalTimelineElement>

          {/* Web Developer Intern Experience */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="07/06/2024 - 08/08/2024"
            contentStyle={{ background: 'rgb(55, 65, 81)', color: '#fff', borderRadius: '8px', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)' }}
            contentArrowStyle={{ borderRight: '7px solid rgb(55, 65, 81)' }}
            iconStyle={{ background: '#3B82F6', color: '#fff' }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title text-2xl font-semibold">Web Developer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle text-lg italic text-gray-300">Remote</h4>
            <p className="text-gray-200 mt-2">
              Focused on frontend development with WordPress, improving website aesthetics, and optimizing user interactions.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}
