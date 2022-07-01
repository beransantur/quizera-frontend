import { Link, useNavigate } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";

const Welcome = () => {
  const { user, setUser } = useContext(UserContext);
  const [isInfoClicked, setIsInfoClicked] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="welcome">
      <div className="bg-secondary">
        <div className="container ">
          {/* NAVBAR */}
          <nav class="navbar navbar-expand-lg bg-secondary navbar-light welcome-nav">
            <div class="container">
              <span class="navbar-brand quizera-brand">Quizera</span>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ms-auto">
                  <span
                    class="nav-link info-icon span-link"
                    onClick={() => {
                      setIsInfoClicked(true);
                    }}
                  >
                    <Icon.InfoCircle
                      className="info-icon"
                      style={{ marginRight: "5px", marginBottom: "5px" }}
                    />
                    INFO
                  </span>
                  <span
                    class="nav-link span-link"
                    onClick={() => {
                      setUser(null);
                      navigate("/");
                    }}
                  >
                    <Icon.ReplyFill
                      style={{ marginRight: "3px", marginBottom: "5px" }}
                    />{" "}
                    LOGOUT
                  </span>
                </div>
              </div>
            </div>
          </nav>{" "}
        </div>
      </div>
      <div className="container">
        <div className="d-flex justify-content-space-between flex-column p-3">
          {isInfoClicked && (
            <div className="bg-secondary text-white position-absolute text-center p-5 info-clicked">
              <Icon.X
                style={{
                  position: " absolute",
                  left: "25px",
                  top: "25px",
                  cursor: "pointer",
                }}
                size={32}
                color={"white"}
                onClick={() => {
                  setIsInfoClicked(null);
                }}
              />
              <h5 className="p-3 info-header">
                {" "}
                Quizera is a quiz application which gets its question from open
                trivia api
              </h5>
              <p>
                It's grading system is based on time and correctness of the
                questions
              </p>
              <p>It has a very easy grading system;</p>
              <p style={{ display: "block" }}>
                formula: (1 or 0)*time(seconds) for example:
              </p>
              <p>8 seconds correct answer = 8 point</p>
              <p>8 seconds incorrect answer = 0 point</p>
              <p>0 seconds correct answer = 0 point</p>
              <button
                className="btn btn-primary px-5"
                onClick={() => {
                  setIsInfoClicked(false);
                }}
              >
                OK
              </button>
            </div>
          )}
          <div className="d-flex justify-content-center">
            <div className="col col-12 p-4 position-relative">
              <h1 className="text-center text-black display-3">
                Welcome, {user.name}
              </h1>
            </div>
          </div>{" "}
          <div className="row pb-5">
            <div class="col-md-6 mb-6 mb-md-0 mb-2">
              <div class="card text-center bg-primary text-light p-3">
                <div class="card-body">
                  <h3 class="card-title mb-0">Quiz</h3>
                  <Icon.Quora className="mt-4 p-3" size={98} color={"red"} />

                  <p class="card-text lead">
                    Here you can start the quiz and test your skils!! And see if
                    you are really got at CS!
                  </p>
                  <Link to={"/quiz"}>
                    <button class="btn btn-danger login-btn">Start Quiz</button>
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-md-6 mb-6 mb-md-0 mb-2">
              <div class="card text-center bg-success text-light p-3">
                <div class="card-body">
                  <h3 class="card-title mb-0">Leader Board</h3>
                  <Icon.Trophy
                    className="mt-4 p-3"
                    size={98}
                    color={"yellow"}
                  />

                  <p class="card-text lead">
                    Here you can view the current leaderboard and see your
                    competition with other competitors!!!
                  </p>
                  <Link to={"/leaderBoard"}>
                    <button class="btn btn-primary login-btn text-dark">
                      Leader Board
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
