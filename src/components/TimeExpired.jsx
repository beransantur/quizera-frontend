const TimeExpired = ({ setCurrentIndex }) => {
  return (
    <div className="time-expired bg-info p-4 d-flex flex-column justify-content-between text-center">
      <h3 className="text-danger">Time is expired..</h3>
      <p className="lead time-expired-text">
        Unfortunately, you won't get any points from this question..
      </p>
      <p className="lead time-expired-text">
        You can go to next question with the button below..
      </p>
      <button
        className="btn time-expired-btn"
        onClick={() => setCurrentIndex((prev) => prev + 1)}
      >
        Next Question
      </button>
    </div>
  );
};

export default TimeExpired;
