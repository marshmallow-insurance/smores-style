import React, { FC } from 'react'
import { Color } from 'theme'

interface Props {
  color: Color
}

export const Briefcase: FC<Props> = ({ color }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 6h-3V3.001A3.005 3.005 0 0014.999 0H9.001A3.005 3.005 0 006 3.001V6H3C1.346 6 0 7.346 0 9v12c0 1.654 1.346 3 3 3h18c1.654 0 3-1.346 3-3V9c0-1.654-1.346-3-3-3zM8 3.001C8 2.449 8.449 2 9.001 2h5.998C15.551 2 16 2.449 16 3.001V6H8V3.001zM22 21c0 .551-.448 1-1 1H3c-.552 0-1-.449-1-1v-7.514l7.905 3.649a5 5 0 004.19-.001L22 13.485V21zm0-9.717l-8.743 4.035a2.993 2.993 0 01-2.514 0L2 11.283V9c0-.551.448-1 1-1h18c.552 0 1 .449 1 1v2.283z"
        fill={color}
      />
    </svg>
  )
}
