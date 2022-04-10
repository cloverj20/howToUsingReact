import React from "react";
import { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("안녕하세요");
  const onClickLeave = () => setMessage("안녕히 가세요");

  const [color, setColor] = useState("black");

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button onClick={() => setColor("red")} style={{ color: "red" }}>
        Red
      </button>
      <button onClick={() => setColor("green")} style={{ color: "green" }}>
        Green
      </button>
      <button onClick={() => setColor("blue")} style={{ color: "blue" }}>
        Blue
      </button>
      <button style={{ color: "black" }} onClick={() => setColor("black")}>
        Black
      </button>
    </div>
  );
};

export default Say;
