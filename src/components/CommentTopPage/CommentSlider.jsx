import React from "react";
import "./styles/CommentSlider.style.css";

const fakeImages = Array.from({ length: 5 }).map((_, i) => ({
  id: i + 1,
  img: "https://via.placeholder.com/200x120?text=Poster",
}));

const CommentSlider = () => {
  return (
    <div className="comment-slider">
      <div className="comment-slider__track">
        {fakeImages.map((item) => (
          <div className="comment-slider__item" key={item.id}></div>
        ))}
      </div>
    </div>
  );
};

export default CommentSlider;
