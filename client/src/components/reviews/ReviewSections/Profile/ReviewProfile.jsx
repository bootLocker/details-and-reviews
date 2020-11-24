import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  width: 273px;
  margin-top: 25px;
  margin-bottom: 25px;
  padding: 0;
`;

const UsernameContainer = styled.div`
  margin-left: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
`;

const Username = styled.h3`
  font-size: 16px;
  margin: 0;
  padding: 0;
`;

const LocationContainer = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;

const Location = styled.span`
  font-size: 16px;
  color: #515151;
`;

let ReviewProfile = (props) => {
  return (
    <ProfileContainer>
      <UsernameContainer>
        <Username>
          {props.username}
        </Username>
      </UsernameContainer>
      <LocationContainer>
        <Location>
          {props.location}
        </Location>
      </LocationContainer>
    </ProfileContainer>
  );
};

export default ReviewProfile;