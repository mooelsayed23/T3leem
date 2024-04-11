import React from "react";
import Slider from "react-slick";
import Card from "../card/Card";
import Aside from "../aside/Aside";
import { Data } from "../DB/Data";
import "./Main.css";

const CategorySlider = ({ categoryTitle }) => {
  const categoryData = Data.filter((d) => d.category === categoryTitle);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    rtl: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="my-0  ">
      <h2 id={categoryTitle}>{categoryTitle}</h2>
      <Slider {...settings}>
        {categoryData.map((d) => (
          <Card
            linkTitle="أبدأ المسار"
            category={d.category}
            id={d.id}
            title={d.title}
            img={d.img}
            key={d.id}
          />
        ))}
      </Slider>
    </div>
  );
};

const Main = () => {
  return (
    <div
      className="mainContaner d-flex mx-auto my-5 flex-row-reverse "
      dir="rtl"
    >
      <main className="col-12 col-lg-10 px-sm-5  py-3 ">
        <CategorySlider categoryTitle="تطوير الذات" />
        <CategorySlider categoryTitle="التصميم و الأعلام" />
        <CategorySlider categoryTitle="التكنولوجيا" />
        <CategorySlider categoryTitle="تعلم اللغات" />
        <CategorySlider categoryTitle="التسويق وفن البيع" />
      </main>
      <aside className="col-lg-2 d-none d-lg-block ">
        <Aside />
      </aside>
    </div>
  );
};

export default Main;
