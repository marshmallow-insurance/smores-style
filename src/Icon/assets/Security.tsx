import React, { FC } from 'react'
import { Color } from 'theme'

interface Props {
  color: Color
}

export const Security: FC<Props> = ({ color }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.616 15.998a1 1 0 00-1 1v1.856l-4-2.07v-3.84l4.021-1.456a3.004 3.004 0 001.799-3.842l-2.05-5.667A2.982 2.982 0 0019.837.284a2.98 2.98 0 00-2.294-.103L2.505 5.652a.997.997 0 00-.346 1.664L4.234 9.29l-3.192 1.162a1 1 0 00-.597 1.282l2.052 5.638a1.002 1.002 0 001.282.597l7.518-2.736 4.32-1.565v3.724a1 1 0 00.54.888l5.46 2.826v1.954a1 1 0 002 0v-6.062a1.002 1.002 0 00-1.001-.999zm-18.582-.252l-1.368-3.758 3.188-1.16 3.24 3.077-5.06 1.841zm7.161-2.605L4.707 6.98l13.519-4.92a.991.991 0 01.765.034.992.992 0 01.516.565l2.05 5.667a1.001 1.001 0 01-.599 1.281l-9.763 3.535z"
        fill={color}
      />
    </svg>
  )
}