import React from 'react';
import styled, { css } from 'styled-components';

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

function TabsBar(props) {
  return (
    <Bar>
      <TabButton
        value='details'
        isSelected={props.selectedTab}
        onClick={props.changeView}>
        <TabLabel>
          Details
        </TabLabel>
      </TabButton>
      <TabButton
        value='sizeAndFit'
        isSelected={props.selectedTab}
        onClick={props.changeView}>
        <TabLabel>
          Size & Fit
        </TabLabel>
      </TabButton>
      <TabButton
        value='reviews'
        isSelected={props.selectedTab}
        onClick={props.changeView}>
        <TabLabel>
          Reviews
        </TabLabel>
      </TabButton>
      <TabButton
        value='qa'
        isSelected={props.selectedTab}
        onClick={props.changeView}>
        <TabLabel>
          Q&A
        </TabLabel>
      </TabButton>
    </Bar>
    )
};

export default TabsBar;