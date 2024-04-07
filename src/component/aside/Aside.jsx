import React from "react";
import { Data } from "../DB/Data";
import "./Aside.css";
import { Link } from "react-router-dom";
function Aside() {
  return (
    <>
      
      <div className="side-contaner w-100 border rounded-1  p-2 ">
        <ul>
          <li className=" rounded-3">
            <Link to="/" className="btn w-100 text-end sid-a rounded-0 ">
              الجميع
            </Link>
          </li>
          {Data.map((item) => (
            <li key={item.id} className="rounded-3 text-nowrap ">
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
