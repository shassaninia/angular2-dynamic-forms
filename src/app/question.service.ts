import { Injectable }       from '@angular/core';
import { DropdownQuestion } from './question-dropdown';
import { QuestionBase }     from './question-base';
import { QuestionTextbox }  from './question-textbox';
@Injectable()
export class QuestionService {
  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getQuestions() {
    let questions: QuestionBase<any>[] = [
      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),
      new QuestionTextbox({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),
      new QuestionTextbox({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ];
    return questions.sort((a, b) => a.order - b.order);
  }
}
