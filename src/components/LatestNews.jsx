
import NewsCard from "./NewsCard";

function LatestNews() {
  const news = [
    {
      id: 1,
      category: "Technology",
      title: "What's New in Technology?",
      date: "October 15, 2026",
    },
    {
      id: 2,
      category: "Sports",
      title: "Today's Sports Updates",
      date: "October 15, 2026",
    },
    {
      id: 3,
      category: "Business",
      title: "Business News and Market Trends",
      date: "October 15, 2026",
    },
  ];

  return (
    <section className="latest-news">
      <h2>Latest News</h2>

      <div className="news-grid">
        {news.map((item) => (
          <NewsCard
            key={item.id}
            category={item.category}
            title={item.title}
            date={item.date}
          />
        ))}
      </div>
    </section>
  );
}

export default LatestNews;
