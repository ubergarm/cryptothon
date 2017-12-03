import React from 'react';
// import PropTypes from 'prop-types';
import Title from "./Title";
const hodl = require("../hodl.gif");

const Tontine = ({
  alive,
  invested,
  entryCapital,
}) => {
  return (
    <div className="tontine">
      <Title />
      <div className="body">
        <div className="section">
          <h2>Roll Call</h2>
          <label>Are you alive? Or are you dead?</label>
          <p>{alive || "loading"}</p>
          <small>Alternatively you could pinch yourself to find out, if you can't feel pain that's a good indication you're dead</small>
        </div>
        <div className="section">
          <h2>Invested</h2>
          <label>Are you invested?</label>
          <p>{invested || "loading"}</p>
        </div>
        <div className="section">
          <h2>Entry Capital</h2>
          <label>This is the amount of ether required to invest.</label>
          <p>{entryCapital || "loading"}</p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <img alt="hodl" src={hodl} />
    </div>
  );
}

export default Tontine;
