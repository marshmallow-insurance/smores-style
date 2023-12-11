import React, { FC } from 'react'
import { Color } from 'theme'

interface Props {
  color: Color
}

export const Medical: FC<Props> = ({ color }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 13h-3v-3a1 1 0 00-2 0v3H8a1 1 0 000 2h3v3a1 1 0 002 0v-3h3a1 1 0 000-2zm-4-7.005c.552 0 1-.453 1-1.005a1 1 0 00-2 0V5c0 .552.448.995 1 .995zM19 3h-2.432A4.988 4.988 0 0012 0a4.988 4.988 0 00-4.568 3H5C3.346 3 2 4.346 2 6v15c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3V6c0-1.654-1.346-3-3-3zm1 18c0 .551-.449 1-1 1H5c-.551 0-1-.449-1-1V6c0-.551.449-1 1-1h3.142a1 1 0 00.968-.75A2.991 2.991 0 0112 2c1.359 0 2.547.926 2.891 2.251a1 1 0 00.968.749H19c.551 0 1 .449 1 1v15z"
        fill={color}
      />
    </svg>
  )
}
