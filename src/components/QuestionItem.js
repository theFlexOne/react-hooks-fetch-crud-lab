import React from 'react';

const url = 'http://localhost:4000/questions/';

function QuestionItem({ question, removeQuestion }) {
  const { id, prompt, answers, correctIndex } = question;

  const deleteQuestion = e => {
    fetch(url + id, { method: 'DELETE' }).then(() => removeQuestion(id));
  };

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={() => deleteQuestion()}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
