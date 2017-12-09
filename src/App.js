import React, { Component } from 'react';
import './App.css';

import LeftPane from './panes/left';
import RightPane from './panes/right';

export default class App extends Component {
  state = {
    questionsArray: [{
      //adding a unique question ID so data is easy to manipulate.
      questionID: new Date().getUTCMilliseconds() + Math.random(),
      questionText: '',
      rows: 1,
      options: [
        //there is a very slight chance that these ids would be same,
        //this isn't as secure as quesionID because options are mounted together (same time)
        //in a production environment, MongoDB etc can provide 100% uniqueIDs
        {optionID: new Date().getUTCMilliseconds() + Math.random(), optionText: '', rows: 1},
        {optionID: new Date().getUTCMilliseconds() + Math.random(), optionText: '', rows: 1},
        {optionID: new Date().getUTCMilliseconds() + Math.random(), optionText: '', rows: 1},
      ],
      image: ''
    }],
    selectedQuestionIndex: 0
  };

  componentWillMount() {
    //if bottom padding and quesions array exist before page reload then set setState
    //otherwise set localStorage from state
    if (localStorage.getItem('questionsArray')) {
      this.setState({
        questionsArray: JSON.parse(localStorage.getItem('questionsArray'))
      });
    }
    else
      localStorage.setItem('questionsArray', JSON.stringify(this.state.questionsArray));
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('questionsArray', JSON.stringify(nextState.questionsArray));
  }

  render() {
    return (
      <div id="page">
          <div className="row">
            <LeftPane
              questionsArray={ this.state.questionsArray }
              //a necessary function to get the data back to the top level component
              sendBackArray={ newArray => this.setState({ questionsArray: newArray }) }
              sendBackIndex={ (selectedQuestionIndex) => this.setState({ selectedQuestionIndex })}
            />
            <RightPane
              selectedQuestionIndex={ this.state.selectedQuestionIndex }
              questionsArray={ this.state.questionsArray }
              sendBackArray={ newArray => this.setState({ questionsArray: newArray }) }
            />
          </div>
      </div>
    );
  }
}
