import heartred from "./heartred.svg";
import heartgray from "./heartgray.svg";
import { useState } from "react";

export default function Card({ title, date, url }) {
  const [liked, setLiked] = useState(false);
  return (
    <div className="cardContainer">
      <div className="card" style={{ backgroundImage: `url(${url})` }}></div>
      <div className="bottomContainer">
        <div className="titleDate">
          <div className="title">{title}</div>
          <div>{date}</div>
        </div>
        <img
          src={liked ? heartred : heartgray}
          alt="like button"
          className="like"
          onClick={() => setLiked((curr) => !curr)}
        ></img>
      </div>
    </div>
  );
}
