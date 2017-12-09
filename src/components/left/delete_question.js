import React, { Component } from 'react';

export default class DeleteQuestion extends Component {
  delete = () => {
    var newQuestionsArray = this.props.questionsArray.slice(0);
    if (!this.props.deleting) {
      this.props.setDeleting(true);
    }
    else {
      this.props.questionsToBeDeleted.map((item) => {
        return (
          newQuestionsArray = newQuestionsArray.filter(question => question.questionID !== item)
        );
      });
      if (newQuestionsArray.length > 0) {
        this.props.sendBackArray(newQuestionsArray);
      }
      else {
        //added trivially, a quiz is not a quiz without a question!
        alert('Oops! you must keep at least one question!');
      }
      //send back status of deleting to parent so checkboxes can be ticked
      this.props.setDeleting(false);
    }
  }

  render() {
    return (
      <button className="delete-question" onClick={ this.delete }>
        DELETE QUESTION(S)
      </button>
    );
  }
}
