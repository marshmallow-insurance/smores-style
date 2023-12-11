import React, { FC } from 'react'
import { Color } from 'theme'

interface Props {
  color: Color
}

export const Intercom: FC<Props> = ({ color }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.5 24s-3.535-1.391-6.395-2.505H4.078c-1.423 0-2.578-1.226-2.578-2.735V2.733C1.5 1.225 2.655 0 4.078 0h15.844c1.423 0 2.577 1.224 2.577 2.734v13.803h.001V24zm-3.104-8.986a.661.661 0 00-.97-.08c-.022.02-2.26 2.011-6.427 2.011-4.114 0-6.388-1.976-6.428-2.013a.66.66 0 00-.967.08.757.757 0 00.074 1.03c.106.096 2.652 2.362 7.321 2.362 4.67 0 7.216-2.266 7.322-2.362a.758.758 0 00.074-1.028z"
        fill={color}
      />
    </svg>
  )
}
