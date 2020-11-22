import React from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import TabsBar from './TabsBar.jsx';
import DetailsPanel from './details/DetailsPanel.jsx';
import ReviewsPanel from './reviews/ReviewsPanel.jsx';

const Container = styled.div`
    width: 87%;
    margin: auto;
    border: 1px solid #dddddd;
    border-width: thin;
`;

const PanelContainer = styled.div`
    padding: 32px;
`;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      view: 'loading',
      selectedTab: '',
      description: '',
      reviews: [],
      overallRatings: {},
      qualityRatings: {},
      valueRatings: {}
    };

    this.changeView = this.changeView.bind(this);
    this.renderPanel = this.renderPanel.bind(this);
  }

  changeView(e) {
    this.setState({
      view: e.currentTarget.value,
      selectedTab: e.currentTarget.value
    })
  }

  renderPanel() {
    if (this.state.view === 'details') {
      return <DetailsPanel />;
    } else if (this.state.view === 'sizeAndFit') {
      return <div>Size and Fit</div>;
    } else if (this.state.view === 'reviews') {
      return <ReviewsPanel
        reviews={this.state.reviews}
        overallRatings={this.state.overallRatings}
        qualityRatings={this.state.qualityRatings}
        valueRatings={this.state.valueRatings}/>;
    } else if (this.state.view === 'qa') {
      return <div>Q&A</div>;
    }
  }

  componentDidMount() {
    Axios.get('/api')
      .then((data) => {
        let overallRatings = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };

        let qualityRatings = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };

        let valueRatings = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };

        for (let review of data.data) {
          overallRatings.[review.overallRating]++;
          qualityRatings.[review.qualityRating]++;
          valueRatings.[review.valueRating]++;
        }

        this.setState({
          view: 'reviews',
          reviews: data.data,
          overallRatings: overallRatings,
          qualityRatings: qualityRatings,
          valueRatings: valueRatings
        }, () => console.log(this.state));
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    let panel = this.renderPanel();

    if (this.state.view === 'loading') {
      return <div>Loading...</div>;
    } else {
      return (
        <Container>
          <TabsBar selectedTab={this.state.selectedTab} changeView={this.changeView} reviews={this.state.reviews}/>
          <PanelContainer>
            {panel}
          </PanelContainer>
        </Container>
      )
    }
  }
}

export default App;