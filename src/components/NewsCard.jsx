import React from "react";

const NewsCard = ({ article }) => {
  const { author, title, description, url, urlToImage, publishedAt } = article;

  return (
    <div className="col-md-6 col-lg-4 col-xl-3">
      <div className="card">
        {urlToImage && (
          <img src={urlToImage} alt={title} className="card-img-top" />
        )}
        {!urlToImage && (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
            height="300"
            className="card-img-top"
          />
        )}
        <div className="card-body text-center">
          <h4 className="card-title"> {title}</h4>
          {author && <h5> Author: {author}</h5>}
          <h6 className="card-title">
            {" "}
            Date: {new Date(publishedAt).toLocaleDateString("en-US")}{" "}
          </h6>
          <p className="card-text">{description} </p>
          <a href={url} className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
