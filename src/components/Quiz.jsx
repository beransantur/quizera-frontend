import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Answer from "./Answer";
import Results from "./Results";
import { Field, Form, Formik } from "formik";
import UserContext from "../contexts/UserContext";
import { useContext } from "react";
import * as Icon from "react-bootstrap-icons";

const Quiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [time, setTime] = useState(15);
  const [timerOn, setTimerOn] = useState(true);
  const [score, setScore] = useState(0);

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const onSubmit = (values, submitProps) => {};

  const getQuestionsFromBackend = async () => {
    const res = await axios.get(
      "http://localhost:5000/questions/getQuestionsFromDb"
    );
    const data = await res.data;

    setQuestions(data);
  };

  const createLeaderBoardMember = async () => {
    const res = await axios.post(
      "http://localhost:5000/leaderBoard/createLeaderBoardMember",
      { _id: user._id, score: score }
    );
    const data = await res.data;
    console.log(data);
  };

  const setTimer = () => {
    setTime(15);
    setTimerOn(true);
  };

  {
    /******** WHEN QUESTION CHANGES TIME RESETS ********/
  }
  useEffect(() => {
    setTimer();
  }, [currentIndex]);

  {
    /******** UPDATE TIME EVERY SECOND ********/
  }
  useEffect(() => {
    let interval = null;
    if (time === 0) {
      clearInterval(interval);
      return;
    }
    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (!timerOn) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [time, timerOn]);

  useEffect(() => {
    getQuestionsFromBackend();
  }, []);

  return (
    <div className="quiz ">
      <div className="container quiz-container">
        {questions.length > 0 ? (
          <>
            <Formik initialValues={{ selectedAnswer: "" }} onSubmit={onSubmit}>
              {(formik) => {
                return (
                  <Form>
                    {/* QUESTION */}
                    <section className="question d-flex align-items-center justify-content-center">
                      <div className="col col-12 position-relative bg-secondary p-2 pt-3">
                        <h3
                          className="text-center text-white p-5 my-2 "
                          dangerouslySetInnerHTML={{
                            __html: questions[currentIndex].question,
                          }}
                        />
                        <span className="btn btn-info position-absolute top-0 mt-1 p-2 timer">
                          <Icon.Stopwatch style={{ marginBottom: "5px" }} />
                          <span style={{ margin: "3px" }}>:</span>
                          {Math.floor(time) <= 0
                            ? 0
                            : Math.floor(time) === 16
                            ? 15
                            : Math.floor(time)}
                        </span>
                      </div>
                    </section>

                    {/* QUESTIONS */}
                    <section className="answers my-3">
                      <div className="row p-1 g-5 d-flex justify-content-center align-items-center">
                        <Field name="selectedAnswer">
                          {({ field }) => {
                            return (
                              <>
                                {questions[currentIndex].answers.map(
                                  (answer, index) => {
                                    return (
                                      <Answer
                                        answer={answer}
                                        key={index}
                                        submitCount={formik.submitCount}
                                        correctAnswer={
                                          questions[currentIndex].correct_answer
                                        }
                                        field={field}
                                        formik={formik}
                                      />
                                    );
                                  }
                                )}
                              </>
                            );
                          }}
                        </Field>

                        <div className="next-btn w-75 ">
                          {formik?.submitCount % 2 === 0 ? (
                            <button
                              name="input1"
                              className="bg-primary text-white p-3 mb-2 px-0 w-100"
                              type="submit"
                              onClick={() => {
                                setTimerOn(false);

                                let calculatedScore = 0;

                                if (
                                  formik.values.selectedAnswer ===
                                    questions[currentIndex].correct_answer &&
                                  time >= 0
                                ) {
                                  calculatedScore += time * 1;
                                }
                                setScore((prev) => prev + calculatedScore);
                              }}
                              disabled={!formik.dirty}
                            >
                              Submit
                            </button>
                          ) : currentIndex !== 9 ? (
                            <button
                              name="input2"
                              className="bg-primary text-white p-3 mb-2 px-0 w-100"
                              type="submit"
                              onClick={() => {
                                setCurrentIndex((prev) => prev + 1);
                                formik.resetForm();
                              }}
                            >
                              Next Question
                            </button>
                          ) : (
                            <button
                              name="input3"
                              className="bg-primary text-white p-3 mb-2 px-0 w-100"
                              type="submit"
                              onClick={() => {
                                createLeaderBoardMember();
                                navigate("/results", {
                                  state: { score: score },
                                });
                              }}
                            >
                              Finish Quiz
                            </button>
                          )}
                        </div>
                      </div>
                    </section>
                  </Form>
                );
              }}
            </Formik>
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
