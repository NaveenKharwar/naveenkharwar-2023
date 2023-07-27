import React, { useState } from "react";
import MenuIcon from "./Menu";

const MobileMenu = () => {
  const [isDivVisible, setDivVisible] = useState(false);

  const handleIconClick = () => {
    setDivVisible(!isDivVisible);
  };

  return (
    <>
      {isDivVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={handleIconClick} // Close the menu when clicking outside the menu
        >
          <nav className="fixed top-0 left-0 right-0 bg-white p-4 text-center">
            <ul className="flex flex-col gap-4 text-2xl">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="https://www.instagram.com/aaakash.writes/">Write ups</a>
              </li>
              <li>
                <a href="https://www.libib.com/u/naveenkharwar/l/1665792">Library</a>
              </li>
            </ul>
          </nav>
        </div>
      )}

      <div className="sm:hidden fixed bottom-4 right-4 z-10">
        <button onClick={handleIconClick} aria-label="Toggle Menu">
          <MenuIcon isOpen={isDivVisible} />
        </button>
      </div>
    </>
  );
};

export default MobileMenu;
