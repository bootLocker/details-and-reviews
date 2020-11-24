import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  #gutter {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 20px 0px;
    border-bottom: 1px solid #dddddd;
  }

  p {
    line-height: 24px;
  }
`;

const TopStyle = styled.div`
  #top-text {
    display: flex;
    padding-left: 1rem;
    line-height: 24px;
    margin-bottom: 1rem;
  }
`;

const MiddleStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 1 0%;

  #select-container {
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
    padding-left: 1rem;
    margin-bottom: 1rem;
    margin: 0;
  }

  label {
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  select {
    width: 30rem;
    display: flex;
    outline: none;
    height: 45px;
    background-color: whitesmoke;
    background-repear: no-repeat;
    font-size: 1rem;
    font-weight: 500px;
    padding: 0.5rem 0.75rem;
    padding-right: 2.5rem;
    margin: 0;
    border: 1px solid rgb(117, 117, 117);
    border-radius: 2px;
  }

  select:hover {
    background-color: white;
  }

  select:focus {
    background-color: white;
    border-bottom: 3px solid rgb(118, 118, 118);
  }
`;

class SizeFit extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '0',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const { value } = this.state;
    return (
      <>
        <GlobalStyle />
        <TopStyle>
          <div id="top">
            <div id="gutter">
              <span id="top-text">
                {'We are committed to making your online shopping experience as easy as possible. \
                Please use these charts to determine which size will fit you best. Your satisfaction is guaranteed. \
            We promise the items you order will fit right or you can return them for free. \
            Learn more about our Fit Guarantee or view our Return Policy.'}
              </span>
            </div>
          </div>
        </TopStyle>
        <MiddleStyle>
          <div id="middle">
            <div id="gutter">
              <div id="select-container">
                <label htmlFor="mensShoeSize">
                  <span>{'Men\'s Shoe Size*'}</span>
                </label>
                <select name="mensShoeSize" id="mensShoeSize" value={value} onChange={this.handleChange}>
                  <option value="0">3.5</option>
                  <option value="1">4.0</option>
                  <option value="2">4.5</option>
                  <option value="3">5.0</option>
                  <option value="4">5.5</option>
                  <option value="5">6.0</option>
                  <option value="6">6.5</option>
                  <option value="7">7.0</option>
                  <option value="8">7.5</option>
                  <option value="9">8.0</option>
                  <option value="10">8.5</option>
                  <option value="11">9.0</option>
                  <option value="12">9.5</option>
                  <option value="13">10.0</option>
                  <option value="14">10.5</option>
                  <option value="15">11.0</option>
                  <option value="16">11.5</option>
                  <option value="17">12.0</option>
                  <option value="18">12.5</option>
                  <option value="19">13.0</option>
                  <option value="20">13.5</option>
                  <option value="21">14.0</option>
                  <option value="22">14.5</option>
                  <option value="23">15.0</option>
                  <option value="24">15.5</option>
                  <option value="25">16.0</option>
                  <option value="26">16.5</option>
                  <option value="27">17.0</option>
                  <option value="28">17.5</option>
                  <option value="29">18.0</option>
                  <option value="30">19.0</option>
                  <option value="31">20.0</option>
                  <option value="32">21.0</option>
                  <option value="33">22.0</option>
                </select>
              </div>
              <div id="select-container">
                <label htmlFor="womensShoeSize">
                  <span>{'Women\'s Shoe Size*'}</span>
                </label>
                <select name="womensShoeSize" id="womensShoeSize" value={value} onChange={this.handleChange}>
                  <option value="0">5.0</option>
                  <option value="1">5.5</option>
                  <option value="2">6.0</option>
                  <option value="3">6.5</option>
                  <option value="4">7.0</option>
                  <option value="5">7.5</option>
                  <option value="6">8.0</option>
                  <option value="7">8.5</option>
                  <option value="8">9.0</option>
                  <option value="9">9.5</option>
                  <option value="10">10.0</option>
                  <option value="11">10.5</option>
                  <option value="12">11.0</option>
                  <option value="13">11.5</option>
                  <option value="14">12.0</option>
                  <option value="15">12.5</option>
                  <option value="16">13.0</option>
                  <option value="17">13.5</option>
                  <option value="18">14.0</option>
                  <option value="19">14.5</option>
                  <option value="20">15.0</option>
                  <option value="21">15.5</option>
                  <option value="22">16.0</option>
                  <option value="23">N/A</option>
                  <option value="24">N/A</option>
                  <option value="25">N/A</option>
                  <option value="26">N/A</option>
                  <option value="27">N/A</option>
                  <option value="28">N/A</option>
                  <option value="29">N/A</option>
                  <option value="30">N/A</option>
                  <option value="31">N/A</option>
                  <option value="32">N/A</option>
                  <option value="33">N/A</option>
                </select>
              </div>
              <div id="select-container">
                <label htmlFor="ukShoeSize"> UK* </label>
                <select name="ukShoeSize" id="ukShoeSize" value={value} onChange={this.handleChange}>
                  <option value="0">3.0</option>
                  <option value="1">3.5</option>
                  <option value="2">4.0</option>
                  <option value="3">4.5</option>
                  <option value="4">5.0</option>
                  <option value="5">5.5</option>
                  <option value="6">6.0</option>
                  <option value="7">6.0</option>
                  <option value="8">6.5</option>
                  <option value="9">7.0</option>
                  <option value="10">7.5</option>
                  <option value="11">8.0</option>
                  <option value="12">8.5</option>
                  <option value="13">9.0</option>
                  <option value="14">9.5</option>
                  <option value="15">10.0</option>
                  <option value="16">10.5</option>
                  <option value="17">11.0</option>
                  <option value="18">11.5</option>
                  <option value="19">12.0</option>
                  <option value="20">12.5</option>
                  <option value="21">13.0</option>
                  <option value="22">13.5</option>
                  <option value="23">14.0</option>
                  <option value="24">14.5</option>
                  <option value="25">15.0</option>
                  <option value="26">15.5</option>
                  <option value="27">16.0</option>
                  <option value="28">16.5</option>
                  <option value="29">17.0</option>
                  <option value="30">18.0</option>
                  <option value="31">19.0</option>
                  <option value="32">20.0</option>
                  <option value="33">21.0</option>
                </select>
              </div>
              <div id="select-container">
                <label htmlFor="europeanShoeSize">
                  <span>European Shoe Size*</span>
                </label>
                <select name="europeanShoeSize" id="europeanShoeSize" value={value} onChange={this.handleChange}>
                  <option value="0">35.5</option>
                  <option value="1">36.0</option>
                  <option value="2">36.5</option>
                  <option value="3">37.5</option>
                  <option value="4">38.0</option>
                  <option value="5">38.5</option>
                  <option value="6">39.0</option>
                  <option value="7">40.0</option>
                  <option value="8">40.5</option>
                  <option value="9">41.0</option>
                  <option value="10">42.0</option>
                  <option value="11">42.5</option>
                  <option value="12">43.0</option>
                  <option value="13">44.0</option>
                  <option value="14">44.5</option>
                  <option value="15">45.0</option>
                  <option value="16">45.5</option>
                  <option value="17">46.0</option>
                  <option value="18">47.0</option>
                  <option value="19">47.5</option>
                  <option value="20">48.0</option>
                  <option value="21">48.5</option>
                  <option value="22">49.0</option>
                  <option value="23">49.5</option>
                  <option value="24">50.0</option>
                  <option value="25">50.5</option>
                  <option value="26">51.0</option>
                  <option value="27">51.5</option>
                  <option value="28">52.0</option>
                  <option value="29">52.5</option>
                  <option value="30">53.5</option>
                  <option value="31">54.5</option>
                  <option value="32">55.5</option>
                  <option value="33">56.5</option>
                </select>
              </div>
              <div id="select-container">
                <label htmlFor="cm">
                  <span>CM*</span>
                </label>
                <select name="cm" id="cm" value={value} onChange={this.handleChange}>
                  <option value="0">22.5</option>
                  <option value="1">23.0</option>
                  <option value="2">23.5</option>
                  <option value="3">23.5</option>
                  <option value="4">24.0</option>
                  <option value="5">24.0</option>
                  <option value="6">24.5</option>
                  <option value="7">25.0</option>
                  <option value="8">25.5</option>
                  <option value="9">26.0</option>
                  <option value="10">26.5</option>
                  <option value="11">27.0</option>
                  <option value="12">27.5</option>
                  <option value="13">28.0</option>
                  <option value="14">28.5</option>
                  <option value="15">29.0</option>
                  <option value="16">29.5</option>
                  <option value="17">30.0</option>
                  <option value="18">30.5</option>
                  <option value="19">31.0</option>
                  <option value="20">31.5</option>
                  <option value="21">32.0</option>
                  <option value="22">32.5</option>
                  <option value="23">33.0</option>
                  <option value="24">33.5</option>
                  <option value="25">34.0</option>
                  <option value="26">34.5</option>
                  <option value="27">35.0</option>
                  <option value="28">35.5</option>
                  <option value="29">36.0</option>
                  <option value="30">37.0</option>
                  <option value="31">38.0</option>
                  <option value="32">39.0</option>
                  <option value="33">40.0</option>
                </select>
              </div>
            </div>
          </div>
        </MiddleStyle>
        <div id="bottom">
          <span id="bottom-text">
            <p>
              Unfortunately, there is no international sizing standard.
              Sizes vary from country to country.
              Please use the tables above only as a guide to help you in ordering the correct size.
              Please note that all sizes, are listed and sold in US sizes.
            </p>
            <p>
              {`Women's shoes are made on a narrower last (the foot-shaped
              form used in making shoes) than men's.
              In addition, the heel on a woman's shoe is narrower than the forefoot width.
              Men's shoes have the same width at the forefoot and heel.
              The medium width for women's shoes is B, while the medium width for men's shoes is D.`}
            </p>

            <p>
              {` Women can wear men's shoes by converting their size to men's by subtracting 1.5 from their numeric size.
              For example, if you are a size 8 in women's, you would try a 6.5 in men's sizes.
              This is a loose conversion and doesn't change the difference in width and forefoot-to-heel ratios.`}
            </p>

            <p>
              If you still have questions about fit or sizing please contact Customer Service.
            </p>

            <p>
              If your measurements fall between two sizes,
              choose the smaller size for a tighter fit or the larger size for a looser fit.
            </p>
          </span>
        </div>
      </>
    );
  }
}

export default SizeFit;
