import React, { FC } from 'react'
import { Color } from 'theme'

interface Props {
  color: Color
}

export const Leaks: FC<Props> = ({ color }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.716 8.63403L3.992 8.16203C3.747 8.00303 3.443 7.95803 3.164 8.04103C2.883 8.12303 2.653 8.32403 2.533 8.59103L2.179 9.38103C1.876 10.057 -0.751999 16.075 0.219001 19.375C1.065 22.248 3.349 23.997 5.987 23.996C6.572 23.996 7.175 23.91 7.782 23.731C11.13 22.745 12.811 19.482 11.779 15.972C10.803 12.661 5.34 9.03903 4.716 8.63403ZM7.217 21.813C4.906 22.491 2.866 21.286 2.138 18.81C1.523 16.72 3.088 12.332 3.881 10.479C5.551 11.603 9.242 14.438 9.86 16.537C10.588 19.013 9.526 21.133 7.217 21.813ZM18.186 12.083C18.68 12.083 19.166 12.022 19.636 11.898C21.153 11.497 22.431 10.463 23.235 8.98803C24.879 5.97403 23.778 2.53603 20.619 0.81303C17.66 -0.79997 11.336 0.47003 10.624 0.61903L9.793 0.79503C9.507 0.85603 9.262 1.03803 9.122 1.29503C8.982 1.55203 8.961 1.85603 9.065 2.13003L9.367 2.92203C9.625 3.60103 11.974 9.60003 14.945 11.219C15.994 11.79 17.107 12.083 18.186 12.083ZM11.354 2.51203C13.895 2.01503 17.975 1.65103 19.661 2.57003C21.872 3.77603 22.602 5.97003 21.478 8.03203C20.932 9.03403 20.118 9.70303 19.124 9.96503C18.111 10.235 16.996 10.062 15.903 9.46403C14.038 8.44603 12.094 4.35503 11.354 2.51203ZM22.528 16.241C20.773 14.486 16.186 14.089 15.668 14.049L15.077 14.003C14.785 13.982 14.499 14.086 14.293 14.293C14.086 14.499 13.981 14.786 14.003 15.077L14.049 15.67C14.116 16.516 14.534 20.822 16.241 22.528C17.156 23.443 18.299 23.966 19.458 23.998C19.497 23.999 19.536 24 19.574 24C20.713 24 21.808 23.53 22.669 22.669C24.491 20.848 24.432 18.145 22.528 16.241ZM21.255 21.255C20.75 21.76 20.141 22.018 19.514 21.999C18.858 21.98 18.216 21.675 17.655 21.114C16.82 20.279 16.298 17.847 16.099 16.099C17.808 16.293 20.281 16.822 21.114 17.655C21.675 18.216 21.98 18.858 21.999 19.514C22.017 20.148 21.759 20.75 21.255 21.255Z"
        fill={color}
      />
    </svg>
  )
}
