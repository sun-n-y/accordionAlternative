import Question from './Question';

const Questions = ({ questions, activeId, toggleQuestion }) => {
  return (
    <section className="container">
      <h1>questions</h1>
      {questions.map((question) => {
        return (
          <Question
            {...question}
            key={question.id}
            activeId={activeId}
            toggleQuestion={toggleQuestion}
          />
        );
      })}
    </section>
  );
};
export default Questions;
