import React from "react";
import NewsCard from "./NewsCard";

const NewsList = ({ news }) => {
  return (
    <div className="row g-2">
      {news.map((n) => (
        <NewsCard key={n.publishedAt} article={n} />
      ))}
    </div>
  );
};

export default NewsList;
