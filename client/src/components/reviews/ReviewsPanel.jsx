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
    this.pageChangeRef = React.createRef();
  }

  changePage(e) {
    if (e.target.value === 'prev') {
      let currentReviews = this.state.reviews.slice(this.state.firstReviewIndex - 8, this.state.lastReviewIndex - 8);

      if (this.state.lastReviewIndex > 7 ) {
        if (currentReviews.length === 7) {
          this.setState({
            currentReviews: currentReviews,
            firstReviewIndex: this.state.firstReviewIndex - 8,
            lastReviewIndex: this.state.lastReviewIndex - 8,
          }, () => this.pageChangeRef.current.scrollIntoView({ behavior: 'smooth'}));
        } else {
          this.setState({
            currentReviews: currentReviews,
            firstReviewIndex: this.state.firstReviewIndex - 8,
            lastReviewIndex: this.state.lastReviewIndex - currentReviews.length - 1,
          }, () => this.pageChangeRef.current.scrollIntoView({ behavior: 'smooth'}));
        }
      }
    } else {
      let currentReviews = this.state.reviews.slice(this.state.firstReviewIndex + 8, this.state.lastReviewIndex + 8);

      if (this.state.lastReviewIndex < this.state.reviews.length - 1) {
        if (currentReviews.length === 7) {
          this.setState({
            currentReviews: currentReviews,
            firstReviewIndex: this.state.firstReviewIndex + 8,
            lastReviewIndex: this.state.lastReviewIndex + 8,
          }, () => this.pageChangeRef.current.scrollIntoView({ behavior: 'smooth'}));
        } else {
          this.setState({
            currentReviews: currentReviews,
            firstReviewIndex: this.state.firstReviewIndex + 8,
            lastReviewIndex: this.state.lastReviewIndex + currentReviews.length,
          }, () => this.pageChangeRef.current.scrollIntoView({ behavior: 'smooth'}));
        }
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
        <a ref={this.pageChangeRef} />
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