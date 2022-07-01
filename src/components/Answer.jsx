const Answer = ({ answer, submitCount, correctAnswer, formik, field }) => {
  let specialClassName = "bg-success text-white p-4 answer-button";
  if (submitCount % 2 !== 0) {
    if (answer === correctAnswer) {
      specialClassName += " true-answer";
    } else {
      specialClassName += " false-answer";
    }
  }
  return (
    <div className="col-6 col-md-12 answer">
      <button
        type="button"
        {...field}
        onClick={() => {
          formik.setFieldValue("selectedAnswer", answer);
        }}
        className={specialClassName}
        disabled={submitCount % 2 !== 0}
        dangerouslySetInnerHTML={{ __html: answer }}
      />
    </div>
  );
};

export default Answer;
