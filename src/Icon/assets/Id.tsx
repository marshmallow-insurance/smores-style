import React, { FC } from 'react'
import { Color } from 'theme'

interface Props {
  color: Color
}

export const Id: FC<Props> = ({ color }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 3H3C1.346 3 0 4.346 0 6v12c0 1.654 1.346 3 3 3h18c1.654 0 3-1.346 3-3V6c0-1.654-1.346-3-3-3zM5.184 19A2.996 2.996 0 018 17c1.302 0 2.402.839 2.816 2H5.184zM21 19c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1H3c-.551 0-1 .449-1 1v12c0 .551.449 1 1 1h.101A5.009 5.009 0 018 15a5.009 5.009 0 014.899 4H21zM19 8h-4a1 1 0 000 2h4a1 1 0 000-2zm-4 4h4a1 1 0 010 2h-4a1 1 0 010-2zM8 7c-1.93 0-3.5 1.57-3.5 3.5S6.07 14 8 14s3.5-1.57 3.5-3.5S9.93 7 8 7zm-1.5 3.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5S8.827 9 8 9s-1.5.673-1.5 1.5z"
        fill={color}
      />
    </svg>
  )
}
