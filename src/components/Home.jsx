import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {" "}
      <div className="bg-dark">
        <div className="container ">
          {/* NAVBAR */}
          <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
            <div class="container">
              <a class="navbar-brand" href="#home">
                Quizera
              </a>
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
                  <a class="nav-link" href="#home">
                    HOME
                  </a>
                  <a class="nav-link" href="#user">
                    USER
                  </a>
                  <a class="nav-link" href="#contact">
                    CONTACT
                  </a>
                </div>
              </div>
            </div>
          </nav>{" "}
        </div>
      </div>
      <section className="bg-dark p-5 text-light " id="home">
        <div className="container">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h1 className="p-3 text-center">Welcome to Quizera!</h1>
            <div className="d-flex flex-column justify-content-between align-items-center">
              <p className="lead p-4 text-center text-md-start">
                Quizera is a web application to test you skills out in computer
                science! It has a grading method based on time an accuracy of
                the question and it has a leaderboard that you can compare
                yourself with other users. In order to play the game you have to
                register and after login to the system in order the keep track
                of the leader board.
              </p>
              <div class="col-12 col-md-6 mx-auto m-5">
                <img
                  src={require("../images/quiz.png")}
                  className="w-100"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary text-white">
        <div className="container">
          <div className="d-md-flex justify-content-between text-center text-md-start">
            <div className="p-5">
              <h4 className="py-4">Test your skills!</h4>
              <p>
                The whole point of Quizera is to test your skills see if you
                know well about
              </p>
              <p className="lead">
                You can always go back to your mistakes and improve them. Don't
                forget that computer science is a hard topic to master
              </p>
            </div>
            <div class="col-12 col-md-6 mx-auto p-md-5 p-3">
              <img
                src={require("../images/computer-science.jpg")}
                className="w-100"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="bg-dark p-5">
        <div className="container  text-white text-center">
          <div class="col-12 col-md-6 mx-auto p-md-5">
            <img
              src={require("../images/contact-me.jpg")}
              className="w-100"
              alt=""
            />
          </div>

          <div className="row">
            <div className="col-12 col-md-6">
              <a
                href="https://www.linkedin.com/in/beran-santur-810b19206/"
                target="_blank"
                rel="noreferrer"
              >
                <Icon.Linkedin className="mt-4" size={98} color={"white"} />
              </a>
            </div>
            <div className="col-12 col-md-6">
              <a
                href="https://www.linkedin.com/in/beran-santur-810b19206/"
                target="_blank"
                rel="noreferrer"
              >
                <Icon.Github className="mt-4" size={98} color={"white"} />
              </a>
            </div>

            <div className="col col-md-4"></div>
          </div>
        </div>
      </section>
      <section id="user" className="p-5 user-section">
        <div className="container">
          <h3 className="p-5 text-center text-white">
            {" "}
            In order to start the quiz..{" "}
          </h3>
          <div className="row">
            <div class="col-md mb-6 mb-md-0 mb-2 ">
              <div class="card text-center bg-dark text-light p-3">
                <div class="card-body">
                  <h3 class="card-title">Register</h3>
                  <div class="h1 my-3">
                    <i class="bi bi-person-square"></i>
                  </div>

                  <p class="card-text lead">
                    If you haven't registered to our system you click to the
                    button and register to our system.
                  </p>
                  <Link to={"/register"}>
                    <button class="btn btn-danger register-btn">
                      Register
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div class="col-md mb-6 mb-md-0 mb-2">
              <div class="card text-center bg-dark text-light p-3">
                <div class="card-body">
                  <h3 class="card-title">Login</h3>
                  <div class="h1 my-3">
                    <i class="bi bi-people"></i>
                  </div>

                  <p class="card-text lead">
                    If you've already registered to our system you can click
                    below to login to our system.
                  </p>
                  <Link to={"/login"}>
                    <button class="btn btn-danger login-btn">Login</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer class="mt-3 p-2 bg-dark text-white text-center position-relative">
        <div class="container">
          <p class="lead">Copyright &copy; 2021 Beran Santur</p>
        </div>
      </footer>
    </>
  );
};

export default Home;
