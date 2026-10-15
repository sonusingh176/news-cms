
function NewsCard({ category, title, date }) {
  return (
    <article className="news-card">
      <div className="news-image-placeholder">
        News Image
      </div>

      <span className="category-label">
        {category}
      </span>

      <h3>{title}</h3>

      <p className="news-date">{date}</p>
    </article>
  );
}

export default NewsCard;
