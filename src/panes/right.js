import React, { Component } from 'react';

import QuestionsList from '../components/right/questions_list';

export default class LeftPane extends Component {
  // stateless functional components do not currently improve performance
  // so they are not used through this project
  render() {
    return (
      <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12" id="right-pane">
        <QuestionsList
          selectedQuestionIndex={ this.props.selectedQuestionIndex }
          questionsArray={ this.props.questionsArray }
          sendBackArray={ this.props.sendBackArray }
          showAddQuestionButton={ false }
          showOptions={ true }
        />
      </div>
    );
  }
}
