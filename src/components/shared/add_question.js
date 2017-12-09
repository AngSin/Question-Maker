import React, { Component } from 'react';

export default class AddQuestion extends Component {
  addQuestion = () => {
    var newQuestionsArray = this.props.questionsArray.slice(0);
    newQuestionsArray.push({
        questionID: new Date().getUTCMilliseconds() + Math.random(),
        questionText: '',
        rows: 1,
        options: [
          {optionID: new Date().getUTCMilliseconds() + Math.random(), optionText: ''},
          {optionID: new Date().getUTCMilliseconds() + Math.random(), optionText: ''},
          {optionID: new Date().getUTCMilliseconds() + Math.random(), optionText: ''},
        ],
        image: ''
    });
    //necessary since flux is not allowed
    this.props.sendBackArray(newQuestionsArray);
  }

  render() {
    return (
      <button className="add-question" onClick={ this.addQuestion }>
        ADD QUESTION
      </button>
    );
  }
}
