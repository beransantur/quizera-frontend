const Answer = ({ answer, submitCount, correctAnswer, formik, field }) => {
  let specialClassName = "bg-success text-white p-4 answer-button";
  if (submitCount % 2 !== 0) {
    if (answer === correctAnswer) {
      console.log("Correct answer");
      specialClassName += " true-answer";
    } else {
      console.log("False answer");
      specialClassName += " false-answer";
    }
  }
  return (
    <div className="col-6 col-md-12 question">
      <button
        type="button"
        {...field}
        onClick={() => {
          formik.setFieldValue("selectedAnswer", answer);
        }}
        className={specialClassName}
        name="currentAnswer"
        disabled={submitCount % 2 !== 0}
        dangerouslySetInnerHTML={{ __html: answer }}
      />
    </div>
  );
};

export default Answer;
