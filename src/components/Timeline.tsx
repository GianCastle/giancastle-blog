/* eslint-disable react/jsx-key */
import 'react-vertical-timeline-component/style.min.css';

import React, { FC } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import styled from '@emotion/styled';

const data = [
  {
    position: 'Cofounder - Web Developer Manager',
    where: 'Castle Studio',
    when: '2015 - 2017',
    description: [
      'Cofounder of a devshop with over 5 customers in industries like retail and health.',
      'Helped 5 companies ship and market their products by implementing e-commerce in and WordPress solutions.',
      'Created 2  custom Windows Desktop applications that helped companies maintain constant control of their inputs and capital.',
    ],
  },
  {
    position: 'Software Engineer',
    where: 'GBH',
    when: '2017 - 2018',
    description: [
      'Produced and improve existing code for over 4 projects with short deadlines',
      'Assisted Technical Leads with some design and technical decisions that creates an impact to product delivery by 37 %.',
      'Mentored 2 newcomers Software Engineers that created an impact on the company in a period of 15 days',
    ],
  },
  {
    position: 'Mid-Senior Software Engineer',
    where: 'GBH',
    when: '2018 - 2020',
    description: [
      'Modernized +4 apps by moving from legacy technologies to state-of-the-art frontend frameworks.',
      'Improved onboarding time in 3x by creating React custom starters with the industry’s best practices.',
      'Builded over 6 highly reliable Wordpress Sites using modern frontend tooling.',
      'Improved product delivery time in +35% by enhancing the architecture of our React apps.',
      'Develop and succesfully deployed 2 NodeJS and 1 Laravel APIs to AWS and Heroku.',
      'Mentored 3 new software engineers.',
    ],
  },
  {
    position: 'React Native Developer',
    where: 'Freelance ',
    when: '2020',
    description: [
      'Develop new mobile application on Android and IOS for small businesses.',
      'Building reusable components and front-end libraries for future use',
      'Took initiative in learning react native and went on to successfully develop various features under minimal supervision.',
    ],
  },
];

const TimelineElementTitle = styled.h3`
  color: #ffff;
`;
const TimelineElementSub = styled.h4`
  color: #ffff;
  margin: 0;
`;

type TimeLinedescriptionItemsProps = {
  description: string[];
};

type TimeLineCardProps = {
  position: string;
  where: string;
  when: string;
  description: string[];
};

const TimeLineDescriptionItems: FC<TimeLinedescriptionItemsProps> = ({ description }) => (
  <ul>
    {description.map(bullePoint => (
      <li>{bullePoint}</li>
    ))}
  </ul>
);

const TimelineCard: FC<TimeLineCardProps> = ({ position, where, when, description }) => (
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
    {Array.isArray(description) ? (
      <TimeLineDescriptionItems description={description} />
    ) : (
      <p>{description}</p>
    )}
  </VerticalTimelineElement>
);

export const Timeline = () => (
  <VerticalTimeline className="vertical-timeline-custom-line">
    {data.map(jobs => (
      <TimelineCard {...jobs} />
    ))}
  </VerticalTimeline>
);
