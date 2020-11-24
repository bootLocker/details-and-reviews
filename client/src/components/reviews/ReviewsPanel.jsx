import React from 'react';
import Heading from './ActionBar.jsx';
import RatingsPanel from './ratings/RatingsPanel.jsx';
import ControlBar from './ControlBar.jsx';
import Reviews from './Reviews.jsx';

class ReviewsPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: this.props.reviews,
      currentReviews: [],
      currentRange: [0, 7]
    };
  }

  componentDidMount() {
    let currentReviews = this.state.reviews.slice(0, 8);
    currentReviews = currentReviews.map((review, index) => {
      let current = [index, review];
      return current;
    });

    this.setState({
      currentReviews: currentReviews,
    });
  }

  render() {
    return (
      <div class='constrained'>
        <Heading />
        <RatingsPanel
          reviews={this.props.reviews}
          overallRatings={this.props.overallRatings}
          qualityRatings={this.props.qualityRatings}
          valueRatings={this.props.valueRatings}/>
        <ControlBar currentRange={this.state.currentRange} totalCount={this.state.reviews.length}/>
        <div>
          <Reviews currentReviews={this.state.currentReviews}/>
        </div>
      </div>
    );
  }
}

export default ReviewsPanel;