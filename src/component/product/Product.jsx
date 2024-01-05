import React, { useEffect } from "react";
import { Data } from "../DB/Data";
import { Link, useParams } from "react-router-dom";
import "./Product.css";
import Card from "../card/Card";

function Product() {
  const { id } = useParams();
  const product = Data.find((el) => el.id === +id);
  const { category, title, img, description } = product;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const filteredData = Data.filter((d) => d.category === category);

  return (
    <>
      <div className="page-heading header-text my-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 border-bottom">
              <h3>
                <Link to="/path/">{category}</Link> /<small>{title}</small>
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="single-product section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="left-image">
                <img src={img} alt="" className="shadow w-75 rounded-5 " />
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <h4>{title}</h4>
              <span className="price">
                <del>$28</del> مجانا
              </span>
              <p>{description}</p>
              <form id="qty">
                <button type="submit">شراء الكورس</button>
              </form>
              <ul>
                <li>
                  <span>{title}:</span> تَقدم
                </li>
              </ul>
            </div>
            <div className="col-lg-12">
              <div className="sep"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="more-info my-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tabs-content">
                <div className="row">
                  <div className="nav-wrapper ">
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="description-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#description"
                          type="button"
                          role="tab"
                          aria-controls="description"
                          aria-selected="true"
                        >
                          الوصف
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="reviews-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#reviews"
                          type="button"
                          role="tab"
                          aria-controls="reviews"
                          aria-selected="false"
                        >
                          مراجعات
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="description"
                      role="tabpanel"
                      aria-labelledby="description-tab"
                    >
                      <p>{description}</p>
                      <br />
                    </div>
                    <div
                      className="tab-pane fade"
                      id="reviews"
                      role="tabpanel"
                      aria-labelledby="reviews-tab"
                    >
                      <p>لا يوجد</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section categories related-games mb-5 col-9 mx-auto">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-heading">
                <h3>كورسات {category}</h3>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="main-button">
                <Link to="/">عرض الكل</Link>
              </div>
            </div>
            <div className="col-12 d-flex justify-content-evenly mt-4">
              {filteredData.map((d) => (
                <Card
                  title={d.title}
                  img={d.img}
                  id={d.id}
                  linkTitle="دخول الكورس"
                  key={d.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
