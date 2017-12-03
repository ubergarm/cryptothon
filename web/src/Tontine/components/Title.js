import React from 'react';
const img = require("../mall.jpg");

const Title = () => {
  return (
    <div className="title">
      <img alt="title" className="mall" src={img} />
      <h1>Tontine</h1>
      <h2>You're in or you're dead!</h2>
    </div>
  );
}

export default Title;

