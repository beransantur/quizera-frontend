import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Answer from "./Answer";
import Results from "./Results";

const Quiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const getQuestionsFromBackend = async () => {
    const res = await axios.get(
      "http://localhost:5000/questions/getQuestionsFromDb"
    );
    const data = res.data;

    setQuestions(data);
  };

  useState(() => {
    getQuestionsFromBackend();
  }, []);

  return (
    <div className="quiz ">
      <div className="container quiz-container">
        {questions.length > 0 ? (
          <>
            {isQuizFinished && (
              <Results setIsQuizFinished={setIsQuizFinished} />
            )}
            {/* HEADER */}

            <section className="header d-flex align-items-center justify-content-center p-3">
              <div className="col col-12 position-relative bg-secondary p-2 pt-3">
                <h3 className="text-center text-white p-5 my-2 ">
                  {questions[currentIndex].question}
                </h3>
                <span className="btn btn-info position-absolute top-0 mt-1 p-3 timer">
                  30
                </span>
              </div>
            </section>

            {/* QUESTIONS */}
            <section className="questions my-3">
              <div className="row p-3 g-5 d-flex justify-content-between align-items-between">
                {questions[currentIndex].answers.map((answer, index) => {
                  return <Answer answer={answer} />;
                })}
              </div>
            </section>

            {/* NEXT BUTTON */}
            <section className="next-btn ">
              {currentIndex !== 9 ? (
                <button
                  className="bg-danger text-white p-4 mb-2 px-0 w-100"
                  onClick={() => setCurrentIndex((prev) => prev + 1)}
                >
                  Next Question
                </button>
              ) : (
                <button
                  className="bg-danger text-white p-4 mb-2 px-0 w-100"
                  onClick={() => setIsQuizFinished(true)}
                >
                  Finish Quiz
                </button>
              )}
            </section>
          </>
        ) : (
          <div class="d-flex justify-content-center loading-spinner">
            <div class="spinner-border" role="status">
              <span class="sr-only"></span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
