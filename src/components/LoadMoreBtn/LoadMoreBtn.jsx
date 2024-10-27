import "./LoadMoreBtn.css";
export default function LoadMoreBtn({ loadMore }) {
  return (
    <div>
      <button type="button" onClick={loadMore} className="loadMoreBtn">
        Load More
      </button>
    </div>
  );
}
