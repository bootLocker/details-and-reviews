import React from 'react';
import styled, { css } from 'styled-components';
import Stars from './reviews/Stars.jsx';

const Bar = styled.div`
    margin: auto;
    border-bottom: 1px solid #dddddd;
    border-width: thin;
`;

const TabButton = styled.button`
  background: white;
  border: none;
  margin: 0;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  border-bottom : ${props => props.isSelected === props.value? 'solid red' : 'none' };

  &:hover {
    border-bottom: solid red;
  }

  &:focus {
    background: #dddddd;
    outline: 0;
  }
`;

const TabLabel = styled.h2`
  font-size: 18px;
  border: 0;
  margin: 0;
  padding: 0;
`;

let TabsBar = (props) => {
  let tabs = [['details', 'Details'], ['sizeAndFit', 'Size & Fit'], ['reviews', 'Reviews'], ['qa', 'Q&A']];

  let tabComponents = tabs.map(tab => {
    return (
      <TabButton
        value={tab[0]}
        isSelected={props.selectedTab}
        onClick={props.changeView}>
        {tab[0] === 'reviews' ? <TabLabel> {tab[1]} <Stars reviews={props.reviews} /> ({props.reviews.length}) </TabLabel> : <TabLabel> {tab[1]} </TabLabel>}
      </TabButton>
    );
  });
  return (
    <Bar>
      {tabComponents}
    </Bar>
  );
};

export default TabsBar;