import React, { useState, useRef } from "react";
import { FaCaretDown } from "react-icons/fa";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import useOutsideClick from "../script/OutsideClick";
function Links() {
  const [show, setShow] = useState(false);
  const menuRef = useRef(null);
  const closeMenu = () => {
    setShow(false);
  };

  useOutsideClick(menuRef, closeMenu);
  return (
    <>
      <li>
        <Link to="/" title="الرئيسية">
          الرئيسية
        </Link>
      </li>
      <li className="position-relative" ref={menuRef}>
        <div
          title="اختر مسار"
          className="s-link border-0 text-center"
          onClick={() => setShow(!show)}
        >
          اختر مسار <FaCaretDown />
        </div>
        {show && <Menu />}
      </li>
      <li>
        <Link to="/about" title="من نحن">
          من نحن
        </Link>
      </li>
      <li>
        <Link to="/ContactUs" title="تواصل معنا">
          تواصل معنا
        </Link>
      </li>
    </>
  );
}

export default Links;
