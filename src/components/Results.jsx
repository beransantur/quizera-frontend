import * as Icon from "react-bootstrap-icons";
import { Link, useNavigate, useLocation } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import { useContext } from "react";

const Results = ({ score }) => {
  console.log(score);
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="results">
      <div className="container ">
        <div className="d-flex justify-content-center align-items-center flex-column vh-100 ">
          <div className="p-5 d-flex justify-content-center align-items-center flex-column results-page position-relative">
            <div className="col col-12  p-2 pt-3">
              <h4 className="text-danger display-5 text-center">
                Quiz is over!
              </h4>
              <Link to={"/welcome"}>
                <span className="btn btn-info mt-1 p-3 results-back-btn">
                  <Icon.ArrowLeft size={30} color={"white"} />
                </span>
              </Link>
            </div>

            <p className="lead result-text p-3">
              Your score is {location.state.score}
            </p>
            <p>
              I hope you've learned something new today. If you would like to
              play again button is on the below
              <Icon.EmojiSmile size={40} style={{ marginLeft: "10px" }} />
            </p>
            <button
              type="reset"
              className="btn btn-success text-white p-4"
              onClick={(event) => {
                navigate("/quiz");
              }}
            >
              Play again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
