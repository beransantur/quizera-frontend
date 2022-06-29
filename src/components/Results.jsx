import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Results = () => {
  return (
    <div className="results ">
      <div className="container ">
        <div className="d-flex justify-content-center align-items-center flex-column vh-100 ">
          <div className="p-5 d-flex justify-content-center align-items-center flex-column results-page ">
            <div className="col col-12 position-relative p-2 pt-3">
              <h4 className="text-danger display-5 text-center">
                Quiz is over!
              </h4>
              <span className="btn btn-info position-absolute top-0 mt-1 p-3 timer">
                <Link to={"/welcome"}>
                  <Icon.ArrowLeft size={30} color={"white"} />
                </Link>
              </span>
            </div>

            <p className="lead result-text p-3">Your score is 2/10</p>
            <p>
              I hope you've learned something new today. If you would like to
              try again button is on the below
              <Icon.EmojiSmile size={40} style={{ marginLeft: "10px" }} />
            </p>
            <button className="btn btn-success text-white p-4">
              Play again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
