import React from "react";

const Guildeline = () => {
  return (
    <div>
      <div class="modal ">
        <div className="">
          <div className="first-mile-heading">
            <h1>The First Mile - Guidelines</h1>
          </div>
          <div>
            <button class="close-modal">&times;</button>
          </div>
        </div>
        <ul style={{ listStyleType: "disc" }}>
          <li className="bold">
            First round will be based on images or videos in which{" "}
            <b>5 questions </b>
            would display as per randomizer. The duration of this round would be
            <b> 1 minute </b> per question.
          </li>
          <li className="bold">Each question carries 10 marks</li>
        </ul>
      </div>
      <div class="overlay"></div>
    </div>
  );
};

export default Guildeline;
