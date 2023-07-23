import React from 'react';

const ArrowIcon = () => {
  const svgMarkup = `
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5253 5.49475L10.5206 7.49475L15.0782 7.50541L5.47473 17.0896L6.88752 18.5052L16.5173 8.89479L16.5065 13.5088L18.5065 13.5134L18.5253 5.51345L10.5253 5.49475Z"
        fill="currentColor"
      />
    </svg>
  `;

  return (
    <div dangerouslySetInnerHTML={{ __html: svgMarkup }} />
  );
};

export default ArrowIcon;
