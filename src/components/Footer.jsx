import React, { useState } from "react";

import ArrowIcon from "./Arrow";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-wrap lg:flex-nowrap gap-x-10 gap-y-5 md:gap-y-0">
        <div className="w-full lg:w-4/6">
          <p className="text-base">
            Contact me if you need help with{" "}
            <span className="text-gray-900">WordPress</span>,{" "}
            <span className="text-gray-900">Web Development</span>,
            <span className="text-gray-900">Innovation</span>,{" "}
            <span className="text-gray-900">Strategy</span>,{" "}
            <span className="text-gray-900">Management</span>,{" "}
            <span className="text-gray-900">Support</span>.
          </p>
        </div>
        <div className="w-full lg:w-2/6">
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            <li>
              <a href="#" className="hover:text-blue-900 flex border px-2">
                LinkedIn
                <ArrowIcon />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-900 flex border px-2">
                Instagram
                <ArrowIcon />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-900 flex border px-2">
                naveenkharwar21@protonmail.com
                <ArrowIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
