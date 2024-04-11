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
  const closeSearch = () => {
    setShowSearch(false);
  };
  useOutsideClick(outsideClickRef, closeSearch);

  const renderMobileMenu = () => (
    <div
      className={`${showSearch && "d-none "} d-md-none d-flex ps-0`}
      onClick={() => setShowMenu(!showMenu)}
    >
      <CgMenuGridR />
    </div>
  );

  const renderLogo = () => (
    <div className={` ${showSearch && "d-none d-md-block"}`}>
      <div className="header__logo">
        <Link to="/" title="تَقدم التعليمية" className="text-center">
          تَقدم التعليمية
        </Link>
      </div>
    </div>
  );

  const renderSearchForm = () => (
    <div
      className=" d-flex align-items-center home-search position-relative m-0 px-0"
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
    <div className={`${showSearch && "d-none "} `}>
      <div className="header__right">
        <Link to="/" title="icon_profile" className="text-black">
          <CgProfile />
        </Link>
      </div>
    </div>
  );

  return (
    <>
      <header
        className="header text-nowrap position-relative z-3 w-100 px-sm-5  border-bottom"
        dir="rtl"
      >
        <div className="container-fluid ">
          <div className=" all-head d-flex  align-items-center justify-content-between flex-nowrap px-1">
            {renderMobileMenu()}
            {renderLogo()}
            {!showSearch && (
              <div className="d-none d-md-flex header__nav ">
                <nav className="header__menu lap-menu center">
                  <ul className="main-ul center  ">
                    <Links />
                  </ul>
                </nav>
              </div>
            )}
            {!showSearch && (
              <>
                <div className={`  d-lg-none`}></div>
                <div
                  className="search-switch fs-4  btn "
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
        >
          <ul className="z-3 position-relative ">
            <Links />
          </ul>
          <div
            className="position-fixed top-0  start-0 w-100 h-100 z-2 "
            onClick={() => setShowMenu(!showMenu)}
          ></div>
        </nav>
      )}
    </>
  );
};

export default Header;
