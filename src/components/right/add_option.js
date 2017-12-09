import React, { Component } from 'react';

export default class AddOption extends Component {
  addOption = () => {
    if (this.props.optionsArray.length < 6) {
      var newOptions = this.props.optionsArray.slice(0);
      newOptions.push({optionID: new Date().getUTCMilliseconds() + Math.random(), optionText: ''});
      //
      var newQuestionsArray = this.props.questionsArray.slice(0);
      newQuestionsArray[this.props.index].options = newOptions;
      this.props.sendBackArray(newQuestionsArray);
    }
    else
      alert('You can\'t add more than six options!');
  }

  render() {
    return (
      <button onClick={ this.addOption }>
        ADD OPTION
      </button>
    );
  }
}
