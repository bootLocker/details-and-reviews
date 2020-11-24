import React from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { AiFillPlusCircle, AiFillMinusCircle, AiFillCheckCircle } from 'react-icons/ai';
import ContentHeader from './ContentHeader.jsx';

const ContentBodyContainer = styled.div`
  padding-left: 10px;
  padding-right: 10px;
`;

const Body = styled.p`
  color: #515151;
  width: 596px;
  margin-top: 0;
`;

const ContentDataContainer = styled.div`
  margin: 0;
  padding: 0;
`;

const Pros = styled.div`
  margin: 0;
  padding: 0;
`;

const Cons = styled.div`
  margin: 0;
  padding: 0;
`;


const Recommended = styled.div`
  margin: 0;
  padding: 0;
`;

const Images = styled.div`
  height: 200px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Image = styled.img`
  height: 100%;
  margin-right 6px;
`;

let ContentBody = (props) => {
  let pros = props.data.pros.map((pro, index) => {
    if (index === props.data.pros.length - 1) {
      return <span>{pro} </span>;
    } else {
      return <span>{pro}, </span>;
    }
  });

  let cons = props.data.cons.map((con, index) => {
    if (index === props.data.cons.length - 1) {
      return <span>{con} </span>;
    } else {
      return <span>{con}, </span>;
    }
  });

  let images = props.data.photos.map((photo) => {
    return <Image src={photo}/>;
  });

  return (
    <ContentBodyContainer>
      <Body>
        {props.data.body}
      </Body>
      {props.data.pros &&
        <Pros>
          <IconContext.Provider value={{ size: '1rem', color: props.color, style: { verticalAlign: 'middle' }}}>
            <AiFillPlusCircle /> <strong>Pros</strong> {pros}
          </IconContext.Provider>
        </Pros>}
      {props.data.cons &&
        <Cons>
          <IconContext.Provider value={{ size: '1rem', color: props.color, style: { verticalAlign: 'middle' }}}>
            <AiFillMinusCircle /> <strong>Cons</strong> {cons}
          </IconContext.Provider>
        </Cons>}
      {props.data.recommended &&
        <Recommended>
          <IconContext.Provider value={{ size: '1rem', color: props.color, style: { verticalAlign: 'middle' }}}>
            <AiFillCheckCircle /> <strong>Yes,</strong> I recommend this product.
          </IconContext.Provider>
        </Recommended>}
      {props.data.photos.length > 0 && <Images>{images}</Images>}
    </ContentBodyContainer>
  );
};

export default ContentBody;