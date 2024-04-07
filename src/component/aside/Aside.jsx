import React from "react";
import { Data } from "../DB/Data";
import "./Aside.css";
import { Link } from "react-router-dom";
function Aside() {
  return (
    <>
      <b className="fs-4">فئات</b>
      <div className="side-contaner w-100 border p-1 ">
        <ul>
          <li className="sid-li ">
            <Link to="/" className="btn w-100 text-end sid-a rounded-0 ">
              الجميع
            </Link>
          </li>
          {Data.map((item) => (
            <li key={item.id} className="">
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
