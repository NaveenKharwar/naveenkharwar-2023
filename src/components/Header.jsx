import React from "react";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <>
      <header className="relative">
        <nav className="bg-transparent text-slate-700 p-4 sm:p-0 hidden sm:flex justify-normal md:justify-center">
          <ul className="flex flex-col sm:flex-row gap-4 text-2xl divide-y sm:divide-y-0">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#">Write ups</a>
            </li>
            <li>
              <a href="#">My Books</a>
            </li>
          </ul>
        </nav>
		<MobileMenu />
      </header>
    </>
  );
};

export default Header;
