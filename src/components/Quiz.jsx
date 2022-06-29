import { Link } from "react-router-dom";

const Quiz = () => {
  return (
    <div className="quiz ">
      <div className="container">
        {/* HEADER */}
        <section className="header d-flex align-items-center justify-content-center p-3">
          <div className="col col-12 position-relative bg-secondary p-2 pt-3">
            <h3 className="text-center text-white p-5 my-2 ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
              autem aperiam, aliquam fugiat commodi vel? Minima aliquid
              inventore quos ratione corrupti illo facere fugit laboriosam vero
              voluptates, a temporibus recusandae.
            </h3>
            <span className="btn btn-info position-absolute top-0 mt-1 p-3 timer">
              30
            </span>
          </div>
        </section>

        {/* QUESTIONS */}
        <section className="questions">
          <div className="row p-3 g-5 d-flex justify-content-between align-items-between">
            <div className="col-6 col-md-12 question">
              <button className="bg-success text-white p-4 answer-button">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                libero vitae maiores tempore porro voluptatum quia expedita
                accusamus voluptates aliquam.
              </button>
            </div>
            <div className="col-6 col-md-12 question">
              <button className="bg-success text-white p-4 answer-button">
                ddd
              </button>
            </div>
            <div className="col-6 col-md-12 question">
              <button className="bg-success text-white p-4 answer-button">
                lorem90
              </button>
            </div>
            <div className="col-6 col-md-12 question">
              <button className="bg-success text-white p-4 answer-button">
                lorem
              </button>
            </div>
          </div>
        </section>

        {/* NEXT BUTTON */}
        <section className="next-btn p-3">
          <Link to={"/results"}>
            <button className="bg-danger text-white py-4 px-0 w-100">
              Next Question
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Quiz;
