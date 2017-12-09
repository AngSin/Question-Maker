import React, { Component } from 'react';

const lineHeight = 28;

export default class Option extends Component {
  state = {
    optionsToBeDeleted: [],
    rows: this.props.rows
  }

  changeOption(event, optionIndex) {
    //initial set up so rows delete too
    event.target.rows = 1;
    //this.props.index is the index of the question array
    //optionIindex is the index of the options array
    var newOptions = this.props.optionsArray.slice(0);
    //trivial check to see if the option is repeated
    for (var i = 0; i < this.props.optionsArray.length; i++) {
      if(event.target.value === this.props.optionsArray[i].optionText && event.target.value !== '') {
        alert('You shouldn\'t have more than one of the same options!');
        break;
      }
    }
    //then regardless of repeat, change the state as behaviour could be intended,
    //for e.g. three options could have the same starting; app, apple, applet.
    newOptions[optionIndex].optionText = event.target.value;
    //change rows - auto expanding
    newOptions[optionIndex].rows = Math.floor(event.target.scrollHeight/lineHeight);
    event.target.rows = newOptions[optionIndex].rows;
    //send these new options back in the questions array
    var newQuestionsArray = this.props.questionsArray.slice(0);
    newQuestionsArray[this.props.index].options = newOptions;
    this.props.sendBackArray(newQuestionsArray);
  }

  addToDeleteArray = (event, item) => {
    var optionsToBeDeleted = this.props.optionsToBeDeleted.slice(0);
    if (event.target.checked) {
      optionsToBeDeleted.push(item);
    }
    else {
      //if element is unchecked, remove it from "to be deleted" array by filtering
      optionsToBeDeleted = optionsToBeDeleted.filter(toBeDeleted => toBeDeleted !== item );
    }
    this.props.sendToBeDeleted(optionsToBeDeleted);
  }

  render() {
    return (
      <li className="option">
        <span className="option-number">
          { //render numbers or checkboxes depending on deleting status
            this.props.deleting ?
            <input type="checkbox" onChange={(event) => this.addToDeleteArray(event,this.props.optionID) }/>
              :
            'Option ' + (this.props.optionIndex + 1)
          }
        </span>
        <textarea
          className="option"
          value={ this.props.value }
          rows={ 1 }
          placeholder={ 'Option ' + (this.props.optionIndex + 1) }
          onChange={ (event) => this.changeOption(event, this.props.optionIndex)}
        />
      </li>
    );
  }
}
