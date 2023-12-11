import React, { FC } from 'react'
import { Color } from 'theme'

interface Props {
  color: Color
}

export const ClosePanel: FC<Props> = ({ color }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 3.5h15M0 11.5h15M1 7.5h7M3 9.5l-2.286-2L3 5.5"
        stroke={color}
      />
    </svg>
  )
}
