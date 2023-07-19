function Progress({ index, numQuestions, points, maxPosibllePoints, answer }) {
  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={index + Number(answer !== null)}
      ></progress>
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPosibllePoints}
      </p>
    </header>
  );
}

export default Progress;
