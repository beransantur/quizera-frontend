import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const LeaderBoard = () => {
  return (
    <div className="leader-board">
      <div class="container table-responsive py-3">
        <div className="col col-12 p-5 position-relative">
          <h4 className="text-center display-5">Leader Board</h4>
          <Link to={"/welcome"}>
            <button className="btn btn-info position-absolute btn-back-welcome">
              <Icon.ArrowLeft size={30} color={"black"} />
            </button>
          </Link>{" "}
        </div>{" "}
        <table class="table table-bordered table-hover table-striped bg-white">
          <thead class="table-dark text-center">
            <tr>
              <th scope="col-2">
                <Icon.Trophy color={"white"} size={25} />
              </th>
              <th scope="col-5">Name</th>
              <th scope="col-span-3">Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>lorem</td>
              <td>the Bird</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderBoard;
