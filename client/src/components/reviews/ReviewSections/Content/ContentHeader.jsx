import React from 'react';
import styled from 'styled-components';
import Stars from '../../Stars.jsx';
import Moment from 'react-moment';
import { IconContext } from 'react-icons';
import { BsDot } from 'react-icons/bs';

const ContentHeaderContainer = styled.div`
  margin: 0px;
  padding: 10px;
`;

const ReviewTimeContainer = styled.span`
  padding:
  font-size: 16px;
  font-family: Arial;
`;

const ContentTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 4.5px;
`;

const ContentRecommended = styled.div`
  margin: 0;
  padding: 0;
`;

let ContentHeader = (props) => {
  return (
    <ContentHeaderContainer>
      <Stars rating={props.data.overallRating} color={'#515151'}/>
      <ReviewTimeContainer>
        <IconContext.Provider value={{ size: '.5rem', color: '#515151', style: { verticalAlign: 'middle' }}}> <BsDot /></IconContext.Provider>
        <Moment fromNow>{props.data.timeCreated}</Moment>
      </ReviewTimeContainer>
      <ContentTitle>{props.data.title}</ContentTitle>
    </ContentHeaderContainer>
  );
};

export default ContentHeader;