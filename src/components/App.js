import React, { useEffect, useState } from 'react';
import AdminNavBar from './AdminNavBar';
import QuestionForm from './QuestionForm';
import QuestionList from './QuestionList';

const url = 'http://localhost:4000/questions/';

function App() {
  const [page, setPage] = useState('List');
  const [questions, setQuestions] = useState(null);

  const addNewQuestion = newQuestion =>
    setQuestions([...questions, newQuestion]);

  const removeQuestion = id => {
    setQuestions(
      questions.filter(question => (question.id === id ? false : true))
    );
  };

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setQuestions(data);
      })
      .catch(err => new Error(err));
  }, []);

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === 'Form' ? (
        <QuestionForm addNewQuestion={addNewQuestion} />
      ) : (
        questions && (
          <QuestionList questions={questions} removeQuestion={removeQuestion} />
        )
      )}
    </main>
  );
}

export default App;
