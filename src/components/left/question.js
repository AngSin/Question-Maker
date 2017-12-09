import React, { Component } from 'react';

export default class Question extends Component {
  changeDeleteArray(event, questionID) {
    var questionsToBeDeleted = this.props.questionsToBeDeleted;
    if (event.target.checked) {
      questionsToBeDeleted.push(questionID);
    }
    else {
      questionsToBeDeleted = questionsToBeDeleted.filter(item => item !== questionID);
    }
    this.props.sendToBeDeleted(questionsToBeDeleted);
  }

  select = () => {
    let unselected = document.getElementsByClassName("question active");
    for (var i = 0; i < unselected.length; i++) {
        unselected[i].className = "question";
    }
    let selectedQuestion = document.getElementById('question' + this.props.index);
    selectedQuestion.className += ' active';
    const newIndex = this.props.index;
    this.props.sendBackIndex(newIndex);
  }

  render() {
    return (
      <li className="question" onClick={ this.select } id={ 'question' + this.props.index }>
        { this.props.deleting ?
            <input
              type="checkbox"
              onChange={ (event) => this.changeDeleteArray(event, this.props.questionID) }
            />
              :
            (this.props.index + 1 + '. ')
        }
        <span className="question-text">
          { //if there is no text give it a pseudo placeholder like "New Quesion 1"
            this.props.questionText ?  this.props.questionText : "New Question " + (this.props.index + 1) }
        </span>
      </li>
    );
  }
}
