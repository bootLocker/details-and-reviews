import React from 'react';
import Heading from './ActionBar.jsx';
import RatingsPanel from './ratings/RatingsPanel.jsx';
import ControlBar from './ControlBar.jsx';
import Reviews from './Reviews.jsx';
import PaginationBar from './PaginationBar.jsx';

class ReviewsPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: this.props.reviews,
      currentReviews: [],
      firstReviewIndex: 0,
      lastReviewIndex: 7
    };

    this.changePage = this.changePage.bind(this);
  }

  changePage(e) {
    if (e.target.value === 'prev') {
      if (this.state.firstReviewIndex > 7) {
        let currentReviews = this.state.reviews.slice(this.state.firstReviewIndex - 8, this.state.lastReviewIndex - 8);
        this.setState({
          currentReviews: currentReviews,
          firstReviewIndex: this.state.firstReviewIndex - 8,
          lastReviewIndex: this.state.lastReviewIndex - 8,
        });
      }
    } else {
      if (this.state.firstReviewIndex < this.state.reviews.length - 8) {
        let currentReviews = this.state.reviews.slice(this.state.firstReviewIndex + 8, this.state.lastReviewIndex + 8);
        this.setState({
          currentReviews: currentReviews,
          firstReviewIndex: this.state.firstReviewIndex + 8,
          lastReviewIndex: this.state.lastReviewIndex + 8,
        });
      }
    }
  }

  componentDidMount() {
    let currentReviews = this.state.reviews.slice(0, 8);

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
        <ControlBar
          firstReviewIndex={this.state.firstReviewIndex}
          lastReviewIndex={this.state.lastReviewIndex}
          totalCount={this.state.reviews.length}/>
        <div>
          <Reviews currentReviews={this.state.currentReviews}/>
        </div>
        <PaginationBar
          firstReviewIndex={this.state.firstReviewIndex}
          lastReviewIndex={this.state.lastReviewIndex}
          totalCount={this.state.reviews.length}
          handleClick={this.changePage}/>
      </div>
    );
  }
}

export default ReviewsPanel;