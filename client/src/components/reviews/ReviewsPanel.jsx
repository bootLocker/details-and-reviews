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
      lastReviewIndex: 0
    };

    this.changePage = this.changePage.bind(this);
    this.pageChangeRef = React.createRef();
  }

  changePage(e) {
    if (e.target.value === 'prev') {
      let newReviews = this.state.reviews.slice(this.state.firstReviewIndex - 8, this.state.lastReviewIndex - this.state.currentReviews.length + 1);

      if (this.state.lastReviewIndex > 7 ) {
        this.setState({
          currentReviews: newReviews,
          firstReviewIndex: this.state.firstReviewIndex - 8,
          lastReviewIndex: this.state.lastReviewIndex - this.state.currentReviews.length,
        }, () => this.pageChangeRef.current.scrollIntoView({ behavior: 'smooth'}));
      }
    } else {
      let newReviews = this.state.reviews.slice(this.state.firstReviewIndex + 8, this.state.lastReviewIndex + 9);

      if (this.state.lastReviewIndex < this.state.reviews.length - 1) {
        if (newReviews.length === 8) {
          this.setState({
            currentReviews: newReviews,
            firstReviewIndex: this.state.firstReviewIndex + 8,
            lastReviewIndex: this.state.lastReviewIndex + 8,
          }, () => this.pageChangeRef.current.scrollIntoView({ behavior: 'smooth'}));
        } else {
          this.setState({
            currentReviews: newReviews,
            firstReviewIndex: this.state.firstReviewIndex + 8,
            lastReviewIndex: this.state.lastReviewIndex + newReviews.length,
          }, () => this.pageChangeRef.current.scrollIntoView({ behavior: 'smooth'}));
        }
      }
    }
  }

  componentDidMount() {
    let currentReviews = this.state.reviews.slice(0, 8);

    this.setState({
      currentReviews: currentReviews,
      firstReviewIndex: 0,
      lastReviewIndex: currentReviews.length - 1
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