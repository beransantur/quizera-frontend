import axios from "axios";
import React, { useEffect, useState } from "react";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const LeaderBoard = () => {
  const [leaderBoardMembers, setLeaderBoardMembers] = useState([]);

  const getLeaderBoardMembers = async () => {
    const res = await axios.get(
        process.env.REACT_APP_BACKEND_REQUEST_URL + "/leaderBoard"
    );
    let data = await res.data;
    data.sort((a, b) => {
      return b.score - a.score;
    });
    setLeaderBoardMembers(data);
  };

  useEffect(() => {
    getLeaderBoardMembers();
  }, []);

  return (
    <div className="leader-board">
      {leaderBoardMembers.length > 0 ? (
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
              {leaderBoardMembers.map((leaderMember, index) => {
                return (
                  <tr>
                    <>
                      <th scope="row">{index + 1}</th>
                      <td>{leaderMember.name}</td>
                      <td>{leaderMember.score}</td>
                    </>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div class="d-flex justify-content-center loading-spinner">
          <div class="spinner-border" role="status">
            <span class="sr-only"></span>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeaderBoard;
