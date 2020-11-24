import React from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import ContentHeader from './ContentHeader.jsx';
import ContentBody from './ContentBody.jsx';

const ContentContainer = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 0px;
  padding-left: 10px;
`;

let ReviewContent = (props) => {
  return (
    <ContentContainer>
      <ContentHeader data={props.data} />
      <ContentBody data={props.data} />
    </ContentContainer>
  );
};

export default ReviewContent;