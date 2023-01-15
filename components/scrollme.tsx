import * as React from "react"
import { SVGProps } from "react"

const ScrollMe = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
	stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.8}
      d="m2 2 15.77 17.369a2 2 0 0 0 2.96 0L36.5 2"
    />
  </svg>
)

export default ScrollMe
