import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import BananaLogo from "../assets/banana.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export function Header() {
  const [togglerNav, setTogglerNav] = useState(false);
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 150) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener("scroll", setFixed);

  const clickHandler = () => {
    setTogglerNav(!togglerNav);
  };

  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <header>
      <nav
        className={
          fix
            ? "z-50 fixed top-0 w-full h-16 flex items-center justify-between py-3 px-8 mx-auto bg-headerBg bg-no-repeat bg-cover bg-fixed transition-all md:items-center mbl:px-4"
            : "z-50 fixed top-0 w-full h-24  flex items-center justify-between py-3 px-8 mx-auto bg-headerBg bg-no-repeat bg-cover bg-fixed transition-all md:items-center mbl:px-4"
        }
      >
        <Link to="/">
          <img
            className="mbl:w-8"
            src={BananaLogo}
            width={45}
            alt="Joe Banana's Logo"
          />
        </Link>
        <div
          className={
            togglerNav
              ? "absolute left-0 top-0 w-screen mt-16 bg-headerBg bg-no-repeat bg-cover bg-fixed border-t border-yellow-400 p-6 flex items-left flex-col gap-4 text-yellow-800 font-medium font-openSans text-lg md:flex md:items-center"
              : "hidden gap-4 text-yellow-800 font-medium font-openSans text-lg md:flex md:items-center"
          }
        >
          <NavLink
            className="transition-all hover:text-yellow-700"
            onClick={clickHandler}
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
          <NavLink
            className="transition-all hover:text-yellow-700"
            onClick={clickHandler}
            to="/blog"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Blog
          </NavLink>
          <NavLink
            className="transition-all hover:text-yellow-700"
            onClick={clickHandler}
            to="/contact"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Contato
          </NavLink>
        </div>
        <button
          className=" inline transition-all md:hidden"
          onClick={clickHandler}
        >
          {togglerNav ? <XMarkIcon width={27} /> : <Bars3Icon width={27} />}
        </button>
      </nav>
    </header>
  );
}

export default Header;
