import React, { Component } from 'react';

export default class DeleteOption extends Component {
  deleteChecked = () => {
    var newOptions = this.props.optionsArray;
    if (!this.props.deleting) {
      //send back deleting status to parent so checkboxes can be ticked
      this.props.setDeleting(true);
    }
    else {
      this.props.optionsToBeDeleted.map((item) => {
        return (
          //to be done if a checkbox is ticked, thus to remove the option from the "to be deleted" array
          newOptions = newOptions.filter(option => option.optionID !== item)
        );
      });
      if (newOptions.length > 1) {
        var newQuestionsArray = this.props.questionsArray.slice(0);
        newQuestionsArray[this.props.index].options = newOptions;
        this.props.sendBackArray(newQuestionsArray);
      }
      else {
        alert('You must keep at least two options!');
      }
      this.props.setDeleting(false);
    }
  }

  render() {
    return (
      <button className="delete-option" onClick={ this.deleteChecked }>
        DELETE OPTION(S)
      </button>
    );
  }
}
