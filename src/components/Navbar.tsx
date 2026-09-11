import React from "react";
import logoText from "../assets/logo-text.png";

const navitems = [
  { name: "Home", link: "/" },
  { name: "Technologies", link: "/" },
  { name: "Projects", link: "/" },
  { name: "About", link: "/" },
  { name: "Contact", link: "/" },
];

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center w-full mx-auto px-12 py-3 ">
        <div className="h-[30px] w-auto">
          <img src={logoText} alt="Website Logo" />
        </div>
        <div className="flex gap-4 font-inter text-xl">
          {navitems.map((item, index) => (
            <a key={index} href={item.link}>
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex gap-4 text-xl">
          <button>Sign in</button>
          <button className="rounded-full bg-[#d72c8d] px-4 py-2 font-semibold text-white ">
            Sign up
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
