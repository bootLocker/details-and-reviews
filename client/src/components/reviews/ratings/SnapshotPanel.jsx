import React from 'react';
import styled from 'styled-components';
import SnapshotRow from './SnapshotRow.jsx';

const Panel = styled.div`
  display: inline-block;
  width: 50%;
  float:left;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: normal;
  color: #0e1111;
  margin: 0;
  padding: 10px;
`;

const Description = styled.div`
  color: #515151;
  margin-top: 0;
  margin-left: 5px;
  margin-bottom: 5px;
  margin-right: 5px;
  padding-top: 0;
  padding-left: 5px;
  padding-bottom: 5px;
  padding-right: 5px;
`;

const Snapshot = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 20px;
  margin-right: 10px;se
  padding: 0;
`;

let SnapshotPanel = (props) => {
  let ratings = [];

  for (let rating in props.overallRatings) {
    let rting = {
      label: rating,
      number: props.overallRatings[rating],
      width: (((props.overallRatings[rating] / props.numberOfReviews) * 255).toString() + 'px')
    };

    ratings.push(rting);
  }

  ratings.sort((a, b) => a.label > b.label ? -1 : 1);

  let mappedRows = ratings.map(rating => {
    return <SnapshotRow rating={rating} />;
  });

  return (
    <Panel>
      <Title>Rating Snapshot</Title>
      <Description>Select a row below to filter reviews.</Description>
      <Snapshot>
        {mappedRows}
      </Snapshot>
    </Panel>
  );
};

export default SnapshotPanel;