import React from "react";
import Slider from "react-slick";
import "./Slider.css";

export default function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    fade: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  const slidesData = [
    {
      title: "مرحبًا بك في منصة تَقدم التعليمية !",
      content: "دعنا نوفر لك تجربة تعلم فريدة ومحفزة...",
      link: "/#تطوير الذات",
    },
    {
      title: "تعلم بأسلوب ممتع ومبتكر!",
      content: "نقدم لك الفرصة لاكتساب المهارات والمعرفة التي تحتاجها.",
      link: "/#تطوير الذات",
    },
    {
      title: "استعد للتحديات! وحول الصعوبات إلى إنجازات",
      content:
        " اكتشف معرفتك ووسع آفاقك مع دوراتنا التعليمية ابنِ مستقبلك بخطوات واثقة.",
      link: "/#تطوير الذات",
    },
  ];

  return (
    <div className="S-contener mx-auto rounded-2 position-relative z-1">
      <div className="Slider-section">
        <div className="sliderInfo">
          <Slider {...settings}>
            {slidesData.map((slide, index) => (
              <div key={index} className="S-info position-relative" dir="rtl">
                <section className="position-absolute text-center h-100">
                  <h1>{slide.title}</h1>
                  <p>{slide.content}</p>
                  <p> اختر مسارك التعليمى الان</p>
                </section>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
