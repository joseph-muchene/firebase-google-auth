import React from "react";

function Article({ article }) {
  return (
    <div>
      <img src={article.urlToImage} alt="" className="img-thumbnail" />
      <h1>
        <a href={article.url}>{article.title}</a>
      </h1>

      <p>{article.content}</p>

      <p>
        Source: <span>{article.source.name}</span>
      </p>
    </div>
  );
}

export default Article;
