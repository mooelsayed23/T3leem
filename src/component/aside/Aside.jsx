import React from "react";
import { Data } from "../DB/Data";
import "./Aside.css";
import { Link } from "react-router-dom";
function Aside() {
  return (
    <>
    <div className=" px-3 pb-3">
      <h2 className="fs-4 w-100 ">أختيار سريع</h2></div>
      <div className="side-contaner w-100 border rounded-3  p-3 ">
        <ul>
          <li className=" rounded-3">
            <Link to="/" className="btn w-100 text-end sid-a rounded-0 ">
              الجميع
            </Link>
          </li>
          {Data.map((item) => (
            <li key={item.id} className="rounded-3">
              <Link
                to={`/course/${item.id}`}
                className="btn w-100 bg-white text-end"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Aside;
