import React from 'react';
import Heading from './ActionBar.jsx';
import RatingsPanel from './ratings/RatingsPanel.jsx';
import Reviews from './Reviews.jsx';

class ReviewsPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class='constrained'>
      <Heading />
      <RatingsPanel
        numberOfReviews={this.props.reviews.length}
        overallRatings={this.props.overallRatings}
        qualityRatings={this.props.qualityRatings}
        valueRatings={this.props.valueRatings}/>
      <div class='controlBar'>Control Bar</div>
      <div>
        <Reviews reviews={this.props.reviews}/>
      </div>
    </div>
    )
  }
}

export default ReviewsPanel;