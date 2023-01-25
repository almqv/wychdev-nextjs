/* import Link from "next/link"; */
import * as React from "react";
import { SVGProps } from "react";
import styled from "styled-components";

const ScrollMeWrapper = styled.div`
  position: absolute;
  bottom: 6rem;
  left: 50%;
  color: var(--fg-faded);
  animation-name: scrollMeAnim;
  animation-duration: 3s;
  animation-iteration-count: infinite;

  @media only screen and (max-height: 490px) {
    display: none;
  }

  :hover {
    cursor: pointer;
  }

  svg {
    width: 1.2rem;
    height: auto;
  }

  @keyframes scrollMeAnim {
    0% {
      opacity: 0;
      transform: translateY(0);
    }

    50% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      transform: translateY(.75rem);
    }
  }
`;

const ScrollMe = (props: SVGProps<SVGSVGElement> & { href: string }) => {
  const handleScroll = () => {
    const sectionRef = document.querySelector(props.href);
    if (sectionRef) {
      sectionRef.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ScrollMeWrapper onClick={handleScroll}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 38 23"
        stroke="currentColor"
        fill="none"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.8}
          d="m2 2 15.77 17.369a2 2 0 0 0 2.96 0L36.5 2"
        />
      </svg>
    </ScrollMeWrapper>
  );
};

export default ScrollMe;
