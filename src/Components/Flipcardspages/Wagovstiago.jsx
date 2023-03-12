import { React, useEffect, useState } from "react";
import FlippableCard from "../FlippableCard";
import Navbar from "../Navbar";
import { Link, useNavigate } from "react-router-dom";
// import Remaincard from "./Remaincard";
import bgImg from "../leaderboardfinal/05.png";

import Popupquestion from "../flipcard popup/Popupquestion";
import { getData } from "./Altovskwid";
import axios from "axios";
import { APIURL, countc } from "../../App";

const Wagovstiago = () => {
  const [questionid, setQuestionid] = useState(0);
  const [count, setCount] = useState(5);
  const [openModal, setOpenModal] = useState(false);
  const [result, setResult] = useState([]);
  useEffect(() => {
    axios
      .post(`${APIURL}/api/v1/wheelRoundQuestions`, {
        mspin: JSON.parse(localStorage.getItem("mspin")),
        roundOrder: JSON.parse(localStorage.getItem("roundName")),
      })
      .then((res) => {
        setResult(res.data.data.questions);
        console.log(res, "Respnse");
      })
      .catch((error) => console.log(error.response.data.message));
  }, []);

  const getData = () => {
    axios
      .post(`${APIURL}/api/v1/finishround`, {
        mspin: JSON.parse(localStorage.getItem("mspin")),
        roundName: "2",
      })
      .then((res) => {
        console.log(JSON.parse(localStorage.getItem("mspin")), "MSPIN");
        console.log(res, "Response of roundlist");
        console.log(2, "Response of RoundName");
      })
      .catch((error) => console.log(error.response.data.message));
    // return false;
  };
  return (
    <>
      <Navbar></Navbar>

      {/* <h1>{cards}</h1> */}
      <img src={bgImg} alt="" className="flip-bg" />
      <div className="round-box bg-correct">WagonR ZXi+ Vs Tiago XZ</div>
      {/* <h1>{cards}</h1> */}
      <div className="flex-container bg-correct">
        <div className="remain-container bg-correct">
          <p>Cards</p>
          <p>Remaining:  {5-Math.abs(JSON.parse(localStorage.getItem("cod")))}</p>
        </div>

        <div className="flex-container-child bg-correct">
          {result.map((item) => (
            <>
              <div
                className="flex-child bg-correct"
                onClick={() => {
                  // countc--;

                  // setQuestionid(item.cardQuestionId)
                  setOpenModal(!item.isCorrect);
                  setQuestionid(
                    localStorage.setItem(
                      "qid",
                      JSON.stringify(item.cardQuestionId)
                    )
                  );
                  setCount(
                    localStorage.setItem(
                      "cod",
                      JSON.stringify(JSON.parse(localStorage.getItem("cod"))-1)
                    )
                  );

                  console.log(item.cardQuestionId, "questionid");
                }}
              >
                {console.log(item.cardTitle, "before Card Title")}

                <FlippableCard
                  title={item.cardTitle}
                  isCorrect={item.isCorrect}
                  cardQuestion={item.cardQuestion}
                  isCardQuestionDidabled={item.isCardQuestionDidabled}
                  cardQuestionId={item.cardQuestionId}
                />
                {/* {console.log(item.cardTitle, "Card Title")} */}
              </div>
              {openModal && !item.isCorrect && (
                <Popupquestion setOpenModal={setOpenModal} />
              )}
            </>
          ))}
        </div>
        <Link to="/">
          <button
            className="roll icon-conatiner finish-card"
            onClick={getData()}
          >
            Finish Round
          </button>
        </Link>
      </div>
    </>
  );
};

export default Wagovstiago;
