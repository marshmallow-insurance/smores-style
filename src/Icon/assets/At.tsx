import React, { FC } from 'react'
import { Color } from 'theme'

interface Props {
  color: Color
}

export const At: FC<Props> = ({ color }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10a1 1 0 100-2c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8c0 1.103-.897 2-2 2s-2-.897-2-2c0-2.206-1.794-4-4-4s-4 1.794-4 4 1.794 4 4 4c1.2 0 2.266-.542 3-1.382.734.84 1.8 1.382 3 1.382 2.206 0 4-1.794 4-4 0-5.514-4.486-10-10-10zm0 12c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"
        fill={color}
      />
    </svg>
  )
}
