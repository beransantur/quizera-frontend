const Answer = ({ answer }) => {
  return (
    <div className="col-6 col-md-12 question">
      <button className="bg-success text-white p-4 answer-button">
        {answer}
      </button>
    </div>
  );
};

export default Answer;
