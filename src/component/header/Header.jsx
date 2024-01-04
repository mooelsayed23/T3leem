import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { CgMenuGridR, CgProfile } from "react-icons/cg";
import { IoIosArrowRoundBack } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import useOutsideClick from "../script/OutsideClick";
import Links from "../nav/Links";
import SearchComponent from "../Search.jsx/Search";
import { Data } from "../DB/Data";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const outsideClickRef = useRef(null);
  const outsideClickRef2 = useRef(null);
  const closeSearch = () => {
    setShowSearch(false);
  };
  const closeMenu = () => {
    setShowMenu(!showMenu);
  };
  useOutsideClick(outsideClickRef, closeSearch);
  useOutsideClick(outsideClickRef2, closeMenu);

  const renderMobileMenu = () => (
    <div
      className="col-1 d-lg-none d-flex ps-0"
      onClick={() => setShowMenu(!showMenu)}
    >
      <CgMenuGridR />
    </div>
  );

  const renderLogo = () => (
    <div className={`col-2 ${showSearch && "d-none d-md-block"}`}>
      <div className="header__logo">
        <Link to="/" title="تَقدم التعليمية" className="text-center">
          تَقدم التعليمية
        </Link>
      </div>
    </div>
  );

  const renderSearchForm = () => (
    <div
      className="col-8 d-flex align-items-center home-search position-relative m-0 px-0"
      ref={outsideClickRef}
    >
      <form action="" className="d-flex w-100">
        <div
          className="btn px-2 m-0 bg-warning text-white center fs-4  rounded-start-0 d-lg-none "
          onClick={() => setShowSearch(!showSearch)}
        >
          <IoIosArrowRoundBack className="rounded-start-0 " />
        </div>
        <SearchComponent data={Data} name="title" />
        <div className="bg-warning text-white rounded-0 rounded-start-3 btn center ">
          <CiSearch />
        </div>
      </form>
    </div>
  );

  const renderLogin = () => (
    <div className="col-1">
      <div className="header__right">
        <Link to="/" title="icon_profile" className="text-black">
          <CgProfile />
        </Link>
      </div>
    </div>
  );

  return (
    <>
      <header className="header text-nowrap position-relative z-3 " dir="rtl">
        <div className="container-fluid border-bottom ">
          <div className="row all-head align-items-center justify-content-between flex-nowrap">
            {renderMobileMenu()}
            {renderLogo()}
            {!showSearch && (
              <div className="col-8 d-none d-lg-flex header__nav center">
                <nav className="header__menu lap-menu center">
                  <ul className="main-ul center  ">
                    <Links />
                  </ul>
                </nav>
              </div>
            )}
            {!showSearch && (
              <>
                <div className={` col-3 col-sm-7 d-lg-none`}></div>
                <div
                  className="search-switch fs-4 col-1 btn "
                  title="icon_search"
                  onClick={() => setShowSearch(!showSearch)}
                >
                  <CiSearch />
                </div>
              </>
            )}
            {showSearch && renderSearchForm()}
            {renderLogin()}
          </div>
        </div>
      </header>

      {showMenu && (
        <nav
          className="header__menu  d-lg-none nav-mobile d-flex justify-content-start border-start h-100 border-bottom  "
          dir="rtl"
          ref={outsideClickRef2}
        >
          <ul>
            <Links />
          </ul>
        </nav>
      )}
    </>
  );
};

export default Header;
