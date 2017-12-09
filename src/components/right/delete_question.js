import React, { Component } from 'react';

export default class DeleteQuestion extends Component {
  deleteQuestion = () => {
    //when screen is small and there's no place for checkboxes just delete the current one
    var newQuestionsArray = this.props.questionsArray.filter(question => question !== this.props.currentQuestion);
    if (newQuestionsArray < 1) {
      alert('You must keep at least one question!');
    }
    else {
      this.props.sendBackArray(newQuestionsArray);
    }
  }

  render() {
    return (
      <button className="delete-question" onClick={ this.deleteQuestion }>
        DELETE QUESTION
      </button>
    );
  }
}
