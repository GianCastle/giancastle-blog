/* eslint-disable react/jsx-key */
import 'react-vertical-timeline-component/style.min.css';

import React, { FC } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import styled from '@emotion/styled';
import { timelineData } from '../website-config';

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
    {timelineData.map(jobs => (
      <TimelineCard {...jobs} />
    ))}
  </VerticalTimeline>
);
