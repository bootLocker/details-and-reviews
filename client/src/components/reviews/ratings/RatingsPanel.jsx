import React from 'react';
import styled from 'styled-components';
import SnapshotPanel from './snapshot/SnapshotPanel.jsx';
import AverageRatingPanel from './AverageRatingPanel.jsx';

const RatingsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  margin-right: 10px;
`;

function RatingsPanel(props) {
  return (
    <RatingsContainer>
      <SnapshotPanel overallRatings={props.overallRatings} numberOfReviews={props.numberOfReviews} />
      <AverageRatingPanel />
    </RatingsContainer>
  )
}

export default RatingsPanel;