import React, { Component } from 'react';

import QuestionsList from '../components/left/questions_list';

export default class LeftPane extends Component {
  render() {
    return (
      <div
        className="col-lg-4 col-md-4 hidden-sm hidden-xs"
        id="left-pane"
        style={{ paddingBottom: JSON.parse(localStorage.getItem('bottom_padding')) }}
      >
          <div className="title">Select your questions</div>
          <QuestionsList
            questionsArray={ this.props.questionsArray }
            sendBackArray={ this.props.sendBackArray }
            sendBackIndex={ this.props.sendBackIndex }
          />
      </div>
    );
  }
}
