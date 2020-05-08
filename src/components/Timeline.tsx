/* eslint-disable react/jsx-key */
import 'react-vertical-timeline-component/style.min.css';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import React from 'react';
import styled from '@emotion/styled';

const data = [
  {
    position: 'Web Developer',
    where: 'Castle Studio',
    when: '2015 - 2017',
    description:
      'With two friends and me, we created a team under the name of Castle Studio while we was doing our carrer at the university where we developed and maintained the correct functionality of several websites and desktop applications.',
  },
  {
    position: 'Jr. Software Engineer',
    where: 'GBH',
    when: '2017 - 2018',
    description:
      'Produce and improve existing code for several projects while assisting the Technical Lead with some design and technical decisions that improve our software development experience and product delivery by 37%.',
  },
  {
    position: 'Mid. Software Engineer',
    where: 'GBH',
    when: '2018 - 2020',
    description:
      'Produce and improve code for several projects. The responsibilities range from creating project initials structure, taking both low-level and high-level architecture decisions, and mentoring new Software Engineers.',
  },
];

const TimelineElementTitle = styled.h3`
  color: #ffff;
`;
const TimelineElementSub = styled.h4`
  color: #ffff;
  margin: 0;
`;

const TimelineCard = ({ position, where, when, description }) => (
  <VerticalTimelineElement
    contentStyle={{
      backgroundColor: 'transparent',
      color: '#fff',
      border: '1px solid #fff',
    }}
    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
    date={when}
    iconStyle={{
      background: 'transparent',
      color: 'transparent',
    }}
  >
    <TimelineElementTitle>{position}</TimelineElementTitle>
    <TimelineElementSub>{where}</TimelineElementSub>
    <p>{description}</p>
  </VerticalTimelineElement>
);

export const Timeline = () => (
  <VerticalTimeline className="vertical-timeline-custom-line">
    {data.map((j) => (
      <TimelineCard {...j} />
    ))}
  </VerticalTimeline>
);
