import React, { FunctionComponent } from 'react';

type LogoProps = { fill: string };

const Logo: FunctionComponent<LogoProps> = ({ fill }) => {
  return (
    <>
      <svg
        width="58px"
        height="57px"
        viewBox="0 0 58 57"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <title>Group</title>
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="Group" transform="translate(3.306905, 3.027774)">
            <path
              d="M36.5352571,7.71533894 C33.3761934,5.81353256 29.6756637,4.7196423 25.7196423,4.7196423 C14.1216626,4.7196423 4.7196423,14.1216626 4.7196423,25.7196423 C4.7196423,37.317622 14.1216626,46.7196423 25.7196423,46.7196423 C37.317622,46.7196423 46.7196423,37.317622 46.7196423,25.7196423"
              id="Path"
              stroke={fill}
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(25.719642, 25.719642) rotate(15.000000) translate(-25.719642, -25.719642) "
            />
            <circle id="Oval" fill={fill} cx="25.6930946" cy="25.9722264" r="12" opacity={0.5} />
            <circle
              id="Oval"
              stroke={fill}
              strokeWidth="4"
              transform="translate(46.988433, 26.662271) rotate(12.000000) translate(-46.988433, -26.662271) "
              cx="46.9884328"
              cy="26.6622712"
              r="3.5"
            />
          </g>
        </g>
      </svg>
    </>
  );
};

export default Logo;
