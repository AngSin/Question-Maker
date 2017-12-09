import React, { Component } from 'react';

import Option from './option';
import AddOption from './add_option';
import DeleteOption from './delete_option';

export default class OptionsList extends Component {
  state = {
    optionsToBeDeleted: [],
    deleting: false
  }

  setDeleting = (deleting) => {
    //if deleting is done clear the array just in case
    (!deleting) && this.setState({ optionsToBeDeleted: [] });
    //get deleting status from DeleteOption button
    this.setState({ deleting });
  }

  render() {
    const renderOptions = this.props.optionsArray.map((item,index) => {
      return (
        <Option
          key={ index }
          optionIndex={ index }
          optionID={ item.optionID }
          rows={ item.rows }
          deleting={ this.state.deleting }
          value={ item.optionText }
          index={ this.props.index }
          optionsArray={ this.props.optionsArray }
          questionsArray={ this.props.questionsArray }
          sendBackArray={ this.props.sendBackArray }
          optionsToBeDeleted={ this.state.optionsToBeDeleted }
          sendToBeDeleted={ optionsToBeDeleted => this.setState({ optionsToBeDeleted }) }
        />
      )
    });
    return (
      <div className="options-container">
        { renderOptions }
        <AddOption
          index={ this.props.index }
          optionsArray={ this.props.optionsArray }
          questionsArray={ this.props.questionsArray }
          sendBackArray={ this.props.sendBackArray }
        />
        <DeleteOption
          index={ this.props.index }
          deleting={ this.state.deleting }
          setDeleting={ (bool_val) => this.setDeleting(bool_val) }
          optionsToBeDeleted={ this.state.optionsToBeDeleted }
          optionsArray={ this.props.optionsArray }
          questionsArray={ this.props.questionsArray }
          sendBackArray={ this.props.sendBackArray }
        />
      </div>
    );
  }
}
