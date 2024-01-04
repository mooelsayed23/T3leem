import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
function Card({ title, img, linkTitle, id }) {
  return (
    <>
      <div className="col mx-1 card" dir="rtl">
        <img src={img} className="card-img-top" alt={title} />
        <div className="card-body  bg-white">
          <h5 className="card-title">{title}</h5>
          {linkTitle && (
            <Link to={`/course/${id}`} className="btn btn-primary">
              {linkTitle}
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Card;
