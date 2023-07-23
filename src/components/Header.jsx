import React, { useState } from 'react';

const Header = () => {
  return (
    <header>
      <div className="container mx-auto hidden md:flex items-center justify-normal lg:justify-center py-4">
        <nav className="block">
          <ul className="flex flex-wrap gap-x-10 text-2xl">
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
		</div>
    </header>
  );
};

export default Header;