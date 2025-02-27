import React, { useState } from "react";
import Navbar from "./Navbar";
// import enterscore from "./enterscore.jpeg";
import bgImg from '../Assets/Enter-Score.png'
import Finishmodal from "./Modalframmer/finishmodal";

import { motion, AnimatePresence } from "framer-motion";
import ModalFrammer from "./ModalFrammer";

import "./modalcss.css";
import Finishmodal3 from "./Modalframmer/finishmodal3";
import Finishmodalenter from "./Modalframmer/finishmodalenter";
import axios from "axios";
import { APIURL } from "../App";
import { Link } from "react-router-dom";

const Enterscore7 = () => {
  const [score, setScore] = useState("");

  const [show, setShow] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

  const close = () => {
    setModalOpen(false);
  };
  const open = () => {
    setModalOpen(true);
  };
  const handleChangescore = (event) => {
    setScore(event.target.value);
  };
  const fetchData = () => {
    console.log(score, JSON.parse(localStorage.getItem("mspin")));
    axios
      .post(`${APIURL}/api/v1/round/submitScoreForRound`, {
        mspin: JSON.parse(localStorage.getItem("mspin")),
        roundName: "7",
        score: score,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  };
  const getData = () => {
    axios
      .post(`${APIURL}/api/v1/finishround`, {
        mspin: JSON.parse(localStorage.getItem("mspin")),
        roundName: "7",
      })
      .then((res) => {
        console.log(JSON.parse(localStorage.getItem("mspin")), "MSPIN");
        console.log(res, "Response of roundlist");
      })
      .catch((error) => console.log(error.response.data.message));
    // return false;
  };
  return (
    <div>
      <Navbar></Navbar>
      <img src={bgImg} alt="" className="background-image"/>
      <div className="enter-score-container">
      
      <h1 className="score-text">Enter score</h1>

        {show && (
          <input
            type="text"
            placeholder="score"
            className="input-correct1 input-crct"
            onChange={handleChangescore}
          />
        )}
        {/* {data && ( */}
        {/* <Link to="/puzzle"> */}
        <button
          className="roll icon-conatiner inputscore-btn1"
          onClick={() => {
            setShow(true);
          }}
        >
          Enter Score
        </button>
      </div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="roll icon-conatiner finish-score-btn"
        onClick={() => {
          modalOpen ? close() : open();
          fetchData();
          getData();
        }}
      >
        Finish Round
      </motion.button>

      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        // Fires when all exiting nodes have completed animating out
        onExitComplete={() => null}
      >
        {modalOpen && (
          <Finishmodalenter modalOpen={modalOpen} handleClose={close} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Enterscore7;
