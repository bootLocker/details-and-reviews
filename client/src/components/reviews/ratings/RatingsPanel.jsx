import React from 'react';
import styled from 'styled-components';
import SnapshotPanel from './SnapshotPanel.jsx';
import AverageRatingPanel from './AverageRatingPanel.jsx';

const RatingsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  margin-right: 10px;
`;

let RatingsPanel = (props) => {
  return (
    <RatingsContainer>
      <SnapshotPanel overallRatings={props.overallRatings} numberOfReviews={props.numberOfReviews} />
      <AverageRatingPanel
        overallRatings={props.overallRatings}
        qualityRatings={props.qualityRatings}
        valueRatings={props.qualityRatings}
        numberOfReviews={props.numberOfReviews}/>
    </RatingsContainer>
  );
};

export default RatingsPanel;