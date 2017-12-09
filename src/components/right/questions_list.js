import React, { Component } from 'react';

import QuestionInput from './question_input'
import AddQuestion from '../shared/add_question';
import DeleteQuestion from './delete_question';
import OptionsList from './options_list';
import ImageUploader from './image_uploader';

export default class RightContainer extends Component {
  render() {
    let { questionsArray, selectedQuestionIndex, sendBackArray } = this.props;
    let renderedQuestion = questionsArray[selectedQuestionIndex];
    return (
        <div key={ selectedQuestionIndex }>
          <li>
            <QuestionInput
              index={ selectedQuestionIndex }
              value={ renderedQuestion.questionText }
              rows={ renderedQuestion.rows }
              questionsArray={ questionsArray }
              sendBackArray={ sendBackArray }
            />
            <AddQuestion
              questionsArray={ questionsArray }
              sendBackArray={ sendBackArray }
            />
            <DeleteQuestion
              currentQuestion={ renderedQuestion }
              questionsArray={ questionsArray }
              sendBackArray={ sendBackArray }
            />
          </li>
          <ImageUploader
            index={ selectedQuestionIndex }
            questionsArray={ questionsArray }
            sendBackArray={ sendBackArray }
          />
          <OptionsList
            optionsArray={ renderedQuestion.options }
            questionsArray={ questionsArray }
            sendBackArray={ sendBackArray }
            index={ selectedQuestionIndex }
          />
        </div>
    );
  }
}
