import React from "react";
import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <div className={css.btnContainer}>
      <button type="button" onClick={onClick} className={css.loadMoreBtn}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;
