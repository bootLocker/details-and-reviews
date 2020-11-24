import React from 'react';
import styled from 'styled-components';

const PaginationBarContainer = styled.div`
  display: flex;
  background: #F7F7F7;
  margin-left: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
`;

const PageRange = styled.div`
  font-size: 16px;
  font-family: Arial;
  margin-right: 728px;
  padding: 10px;
`;

class PaginationBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentRange: this.props.currentRange,
      totalCount: this.props.totalCount
    };
  }

  render() {
    return (
      <PaginationBarContainer>
        <PageRange>
          {this.state.currentRange[0] + 1} - {this.state.currentRange[1] + 1} of {this.state.totalCount} Reviews
        </PageRange>
      </PaginationBarContainer>
    );
  }
}

export default PaginationBar;