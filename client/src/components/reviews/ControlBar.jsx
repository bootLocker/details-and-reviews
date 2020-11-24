import React from 'react';
import styled from 'styled-components';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import { IconContext } from 'react-icons';

const ControlBarContainer = styled.div`
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

const Icon = styled.div`
  padding: 10px;
`;

class ControlBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentRange: this.props.currentRange,
      totalCount: this.props.totalCount
    };
  }

  render() {
    return (
      <ControlBarContainer>
        <PageRange>
          {this.state.currentRange[0] + 1} - {this.state.currentRange[1] + 1} of {this.state.totalCount} Reviews
        </PageRange>
        <Icon>
          <IconContext.Provider value={{ size: '1rem', color: '#515151', style: { verticalAlign: 'middle' }}}>
            <BsFillQuestionCircleFill />
          </IconContext.Provider>
        </Icon>
      </ControlBarContainer>
    );
  }
}

export default ControlBar;