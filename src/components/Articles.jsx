import React from "react";
import Article from "./Article";
import axios from "axios";
import { useState, useEffect } from "react";
function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchArticles = async () => {
    setLoading(true);
    const response = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=7dab91ba7b8243708e3893a8f3cce54f"
    );

    setArticles(response.data.articles);
    setLoading(false);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div className="mx-4">
      {loading && (
        <div
          class="spinner-border text-primary flex justify-content-center"
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      )}
      {articles.length &&
        articles.map((article) => <Article article={article} />)}
    </div>
  );
}

export default Articles;
