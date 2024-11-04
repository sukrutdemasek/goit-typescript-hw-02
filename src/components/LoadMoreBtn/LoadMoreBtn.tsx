import "./LoadMoreBtn.css";
import React from "react";
interface LoadMoreBtnProps {
  loadMore: () => void;
}
const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ loadMore }) => {
  return (
    <div>
      <button type="button" onClick={loadMore} className="loadMoreBtn">
        Load More
      </button>
    </div>
  );
};
export default LoadMoreBtn;
