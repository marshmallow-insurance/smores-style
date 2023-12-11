import React, { FC } from 'react'
import { Color } from 'theme'

interface Props {
  color: Color
}

export const People: FC<Props> = ({ color }) => {
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
        d="M8 12.111c3.033 0 5.5-2.49 5.5-5.55 0-3.062-2.467-5.552-5.5-5.552S2.5 3.5 2.5 6.56s2.467 5.551 5.5 5.551zm0 2.019c-4.411 0-8 2.885-8 6.434v1.64c0 .558.448 1.009 1 1.009s1-.451 1-1.01v-1.64c0-2.434 2.691-4.415 6-4.415s6 1.981 6 4.416v1.64c0 .558.448 1.009 1 1.009s1-.451 1-1.01v-1.64c0-3.548-3.589-6.433-8-6.433zm3.5-7.57c0-1.948-1.57-3.532-3.5-3.532S4.5 4.612 4.5 6.56s1.57 3.533 3.5 3.533 3.5-1.585 3.5-3.533zm5.674 7.645a1.001 1.001 0 00-1.109.886 1.006 1.006 0 00.877 1.119c2.883.34 5.058 2.213 5.058 4.354v1.64c0 .558.448 1.009 1 1.009s1-.451 1-1.01v-1.64c0-3.216-2.871-5.89-6.826-6.358zM16 1.01c3.033 0 5.5 2.49 5.5 5.551s-2.467 5.551-5.5 5.551c-.343 0-.66-.046-.923-.09a1.009 1.009 0 01-.818-1.165.998.998 0 011.154-.826c.191.032.386.063.587.063 1.93 0 3.5-1.585 3.5-3.533S17.93 3.028 16 3.028c-.202 0-.396.03-.588.062a1 1 0 01-1.153-.825 1.008 1.008 0 01.818-1.164A5.4 5.4 0 0116 1.01z"
        fill={color}
      />
    </svg>
  )
}
