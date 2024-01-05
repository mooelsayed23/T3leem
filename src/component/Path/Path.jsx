import React from "react";
import { useParams } from "react-router-dom";
import { Data } from "../DB/Data";
import Card from "../card/Card";
function Path() {
  const thepath = useParams();
  return (
    <div className="bg-light rounded-5 p-5 my-5 w-75 mx-auto ">
      <h1 className="text-success ">{thepath.value}</h1>
      <div className=" d-flex flex-wrap my-5">
        {Data.map(
          (e) =>
            e.category === thepath.value && (
              <div
                className="col-12 col-lg-3 col-md-4 col-sm-6 mb-5"
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
      <h2 className="text-info">شاهد ايضا </h2>
      <div className=" d-flex flex-wrap ">
        {Data.map(
          (e) =>
            e.category !== thepath.value && (
              <div className="col-12 col-sm-4 p-3 my-5" key={e.id}>
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
