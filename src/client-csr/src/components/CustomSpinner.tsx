import React, { FC } from "react";

interface Props {
  dark?: boolean;
}

export const CustomSpinner: FC<Props> = ({ dark }) => {
  return (
    <>
      {dark ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          height="28"
          viewBox="0 0 27 28"
          fill="none"
          className="animate-spin"
        >
          <rect x="10.8743" width="5" height="10" rx="2.5" fill="black" />
          <rect
            x="10.8743"
            y="18"
            width="5"
            height="10"
            rx="2.5"
            fill="black"
          />
          <rect
            y="9.16504"
            width="5"
            height="10"
            rx="2.5"
            transform="rotate(-60 0 9.16504)"
            fill="black"
          />
          <rect
            x="15.5884"
            y="18.165"
            width="5"
            height="10"
            rx="2.5"
            transform="rotate(-60 15.5884 18.165)"
            fill="black"
          />
          <rect
            x="2.5"
            y="23.165"
            width="5"
            height="10"
            rx="2.5"
            transform="rotate(-120 2.5 23.165)"
            fill="black"
          />
          <rect
            x="18.0884"
            y="14.165"
            width="5"
            height="10"
            rx="2.5"
            transform="rotate(-120 18.0884 14.165)"
            fill="black"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          height="28"
          viewBox="0 0 27 28"
          fill="none"
          className="animate-spin"
        >
          <rect x="11" width="5" height="10" rx="2.5" fill="#f8f9fa" />
          <rect x="11" y="18" width="5" height="10" rx="2.5" fill="#f8f9fa" />
          <rect
            x="0.125671"
            y="9.16504"
            width="5"
            height="10"
            rx="2.5"
            transform="rotate(-60 0.125671 9.16504)"
            fill="#f8f9fa"
          />
          <rect
            x="15.7141"
            y="18.165"
            width="5"
            height="10"
            rx="2.5"
            transform="rotate(-60 15.7141 18.165)"
            fill="#f8f9fa"
          />
          <rect
            x="2.62567"
            y="23.165"
            width="5"
            height="10"
            rx="2.5"
            transform="rotate(-120 2.62567 23.165)"
            fill="#f8f9fa"
          />
          <rect
            x="18.2141"
            y="14.165"
            width="5"
            height="10"
            rx="2.5"
            transform="rotate(-120 18.2141 14.165)"
            fill="#f8f9fa"
          />
        </svg>
      )}
    </>
  );
};
