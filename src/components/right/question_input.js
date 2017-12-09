import React, { Component } from 'react';

const lineHeight = 28;

export default class QuestionInput extends Component {
  changeQuestion(event, index) {
    //initial set up so rows delete too
    event.target.rows = 1;
    
    var newQuestionsArray = this.props.questionsArray.slice(0);
    newQuestionsArray[index].questionText = event.target.value;
    newQuestionsArray[index].rows = Math.floor(event.target.scrollHeight/lineHeight);
    event.target.rows = newQuestionsArray[index].rows;
    //necessary since redux is not allowed
    this.props.sendBackArray(newQuestionsArray);
  }

  render() {
    return (
      <p className="question">
        <b>Question&nbsp; &nbsp;</b>
        <textarea
          className="question-input"
          style={{ lineHeight: lineHeight + 'px' }}
          value={ this.props.value }
          placeholder={ "New Question " + (this.props.index + 1) }
          rows={ this.props.rows }
          onChange={ (event) => this.changeQuestion(event, this.props.index) }
        />
      </p>
    );
  }
}
