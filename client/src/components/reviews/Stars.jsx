import React from 'react';
import styled, { css } from 'styled-components';
import _ from 'lodash';
import { IconContext } from 'react-icons';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

let Stars = (props) => {
  let rating = 0;

  _.each(props.reviews, (review) => {
    rating += review.overallRating;
  });

  rating = rating / 100;

  let stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(
        <IconContext.Provider value={{ size: '1rem', color: props.color, style: { verticalAlign: 'middle' }}}>
          <BsStarFill />
        </IconContext.Provider>);
    } else if ( i > rating && i < (rating + 1)) {
      stars.push(
        <IconContext.Provider value={{ size: '1rem', color: props.color, style: { verticalAlign: 'middle' }}}>
          <BsStarHalf />
        </IconContext.Provider>);
    } else if (i > rating && i > (rating + 1)) {
      stars.push(
        <IconContext.Provider value={{ size: '1rem', color: props.color, style: { verticalAlign: 'middle' }}}>
          <BsStar />
        </IconContext.Provider>);
    }
  }

  return (
    <span>{stars}</span>
  );
};

export default Stars;