import React from "react";
import { useParams } from "react-router-dom";
import { Data } from "../DB/Data";
import Card from "../card/Card";
function Path() {
  const thepath = useParams();
  return (
    <div className="bg-light rounded-sm-5 p-sm-5 my-sm-5 w-sm-75 mx-auto ">
      <h1 className="text-success py-4 pe-2 ">{thepath.value}</h1>
      <div className=" d-flex flex-wrap">
        {Data.map(
          (e) =>
            e.category === thepath.value && (
              <div
                className={`col-12 col-lg-3 col-md-4 col-sm-6 mb-4 px-2 `}
                key={e.id}
              >
                <Card
                  img={e.img}
                  title={e.title}
                  linkTitle="أبدأ المسار"
                  id={e.id}
                />
              </div>
            )
        )}
      </div>
      <h2 className="text-info pe-3 mb-4">شاهد ايضا </h2>
      <div className=" d-flex flex-wrap ">
        {Data.map(
          (e) =>
            e.category !== thepath.value && (
              <div
                className={`col-12 col-lg-3 col-md-4 col-sm-6 mb-4 px-2 `}
                key={e.id}
              >
                <Card
                  img={e.img}
                  title={e.title}
                  linkTitle="أبدأ المسار"
                  id={e.id}
                />
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default Path;
