import React from 'react';

let Reviews = (props) => {
  let reviews = props.reviews.map((review) => {
    return (
      <li>
        <div>{review.title}</div>
        <div>{review.body}</div>
      </li>
    );
  });

  return (
    <ul>
      {reviews}
    </ul>
  );
};

export default Reviews;