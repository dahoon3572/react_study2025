import React, { useState } from 'react';

const LikeCount2 = () => {
  const [num, setNum] = useState(0);
  const [emoji1, setEmoji1] = useState("⭕");
  const [emoji2, setEmoji2] = useState("❌");

  const handleAddClick = () => {
    if (emoji1 === "⭕") {
      setNum(num + 1);
    }
  };

  const handleMiClick = () => {
    if (emoji2 === "❌" && num !== 0) {
      setNum(num - 1);
    }
  };

  return (
    <div style = {{
        width: 400,
        display: "flex",
        flexDirection: "column",
        alignItems:"center",
        justifyContent:"center",
        border: "3px solid black"
    }}>
   
          <img src={"src/assets/img/정성우.jpg"} alt={"정승우"} width={300} />
      <h1>좋아요 {num}</h1>
      <span onClick={handleAddClick} style={{ cursor: "pointer", marginRight: 10 }}>{emoji1}</span>
      <span onClick={handleMiClick} style={{ cursor: "pointer" }}>{emoji2}</span>
    </div>
  );
};

export default LikeCount2;
