import React, { Component } from 'react';

import Question from './question';
import AddQuestion from '../shared/add_question';
import DeleteQuestion from './delete_question';

export default class LeftContainer extends Component {
  state = {
    questionsToBeDeleted: [],
    deleting: false
  }

  setDeletingStatus = (deleting) => {
    //if deleting is done clear the array just in case
    (!deleting) && this.setState({ questionsToBeDeleted: [] });
    //get status from DeleteQuestion button
    this.setState({ deleting });
  }

  render() {
    const renderQuestions = this.props.questionsArray.map((item,index) => {
      return (
          <Question
            sendBackIndex={ this.props.sendBackIndex }
            key={ index }
            index={ index }
            questionsArray={ this.props.questionsArray }
            deleting={ this.state.deleting }
            questionID={ item.questionID }
            questionText={ item.questionText }
            questionsToBeDeleted={ this.state.questionsToBeDeleted }
            sendToBeDeleted={ (questionsToBeDeleted) => this.setState({ questionsToBeDeleted })}
          />
      );
    });

    return (
      <div className="questions">
        { renderQuestions }
        <AddQuestion
          questionsArray={ this.props.questionsArray }
          sendBackArray={ this.props.sendBackArray }
        />
        <DeleteQuestion
          questionsArray={ this.props.questionsArray }
          questionsToBeDeleted={ this.state.questionsToBeDeleted }
          deleting={ this.state.deleting }
          setDeleting={ (deleting) => this.setDeletingStatus(deleting)}
          sendBackArray={ this.props.sendBackArray }
        />
      </div>
    );
  }
}
