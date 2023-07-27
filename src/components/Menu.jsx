// Menu.js
import React from "react";

const MenuIcon = ({ isOpen }) => {
  return (
    <div className="w-8 h-8 cursor-pointer">
      {isOpen ? (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="3" x2="21" y2="21" />
          <line x1="3" y1="21" x2="21" y2="3" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
        </svg>
      )}
    </div>
  );
};

export default MenuIcon;
