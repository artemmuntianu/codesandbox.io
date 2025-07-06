import { useState } from "react"
import "./styles.css"

export default function Image() {
  const [isImgActive, setIsImgActive] = useState(false);

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setIsImgActive(false);
      }}
      className={`background ${isImgActive ? "" : "background--active"}`}
    >
      <img
        onClick={(e) => {
          e.stopPropagation();
          setIsImgActive(true);
        }}
        className={`picture ${isImgActive ? "picture--active" : ""}`}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
      />
    </div>
  );
}
