import React from "react";
import "./styles/CommentTopPage.style.css";
import CommentSlider from "./CommentSlider";
import CommentListBlock from "./CommentListBlock";
import { ReactComponent as GoldMedal } from "../../assets/icons/GoldMedal.svg";

const CommentTopPage = () => {
  return (
    <div className="comment-page">
      <div className="comment-page__header">
        <span className="comment-page__icon">
          <GoldMedal />
        </span>
        <h2 className="comment-page__title">TOP BÌNH LUẬN</h2>
      </div>

      <CommentSlider />

      <div className="comment-page__grid">
        <CommentListBlock type="score" />
        <CommentListBlock type="favorite" />
        <CommentListBlock type="category" />
        <CommentListBlock type="recent" />
      </div>
    </div>
  );
};

export default CommentTopPage;
