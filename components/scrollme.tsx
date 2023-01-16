import Link from "next/link";
import * as React from "react";
import { SVGProps } from "react";

const ScrollMe = (props: SVGProps<SVGSVGElement> & { href: string }) => (
  <Link href={props.href}>
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
  </Link>
);

export default ScrollMe;
