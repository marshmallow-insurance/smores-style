import React, { FC } from 'react'
import { Color } from 'theme'

interface Props {
  color: Color
}

export const Shopping: FC<Props> = ({ color }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        stroke={color}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5.5 12l5.792-8.886a.247.247 0 01.416 0L17.5 12M1 12l3.5 11h14L22 12H1zM11.5 16v3M7.5 16v3M15.5 16v3" />
      </g>
    </svg>
  )
}
