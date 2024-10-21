export default function LoadMoreBtn({ queryResults }) {
  if (queryResults.length > 0) {
    return (
      <div>
        <button type="submit">Search</button>
      </div>
    );
  }
}
