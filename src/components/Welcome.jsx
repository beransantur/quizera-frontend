import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="container">
        <div className="d-flex justify-content-space-between flex-column p-5">
          <div className="d-flex justify-content-center">
            <div className="col col-12 p-5 position-relative">
              <h1 className="text-center text-white display-4">
                Welcome, Beran
              </h1>
              <button className="btn btn-info position-absolute btn-back-welcome">
                <Link to={"/"}>
                  <Icon.ArrowLeft size={30} color={"black"} />
                </Link>{" "}
              </button>
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
                    ranking!!
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
