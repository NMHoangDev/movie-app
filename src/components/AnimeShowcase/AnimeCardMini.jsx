import React from "react";
import "./styles/AnimeCardMini.style.css";

const AnimeCardMini = ({ img }) => {
  return (
    <div className="anime-mini">
      <img src={img} alt="" />
    </div>
  );
};

export default AnimeCardMini;
