import React, { FC } from 'react'
import { Color } from 'theme'

interface Props {
  color: Color
}

export const Fire: FC<Props> = ({ color }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fillRule="evenodd" clipRule="evenodd">
        <path
          d="M17.5 23H8.334C4.016 23 1 19.803 1 15.225S7.245 3.275 7.512 2.961L8.334 2l.822.963c.19.223 3.43 4.056 5.264 7.896 1.179-1.87 2.367-3.323 2.464-3.444l.616-.748.616.748c.2.244 4.884 5.977 4.884 9.537C23 20.514 20.739 23 17.5 23z"
          fill="#fff"
        />
        <path
          d="M8.335.46l1.581 1.854c.168.196 2.704 3.192 4.608 6.583a37.941 37.941 0 011.565-2.09l.016-.019.007-.009L17.5 5.094l1.39 1.688c.11.134 1.361 1.665 2.59 3.627.614.98 1.235 2.087 1.705 3.194.464 1.093.815 2.263.815 3.349 0 1.992-.634 3.756-1.796 5.032C21.037 23.268 19.39 24 17.5 24H8.334c-2.417 0-4.52-.9-6.014-2.485C.83 19.935 0 17.735 0 15.226c0-1.347.453-2.816 1.065-4.206.619-1.407 1.438-2.817 2.252-4.07a48.751 48.751 0 013.434-4.637L8.334.461zm-.002 3.08l-.06.07c-.125.147-1.72 2.03-3.279 4.429-.78 1.201-1.538 2.512-2.099 3.785-.567 1.29-.895 2.46-.895 3.401 0 2.068.678 3.755 1.775 4.918C4.868 21.302 6.432 22 8.334 22H17.5c1.35 0 2.452-.511 3.225-1.361.779-.857 1.275-2.117 1.275-3.687 0-.694-.235-1.576-.656-2.567-.414-.977-.977-1.986-1.559-2.914A36.884 36.884 0 0017.5 8.245a37.123 37.123 0 00-2.234 3.147l-.967 1.534-.781-1.636C11.745 7.579 8.582 3.83 8.395 3.612l-.062-.073z"
          fill={color}
        />
        <path
          d="M14.25 23H9.667C7.507 23 6 21.478 6 19.298c0-2.18 3.122-5.691 3.256-5.84l.41-.458.412.459c.095.106 1.715 1.931 2.632 3.76.59-.89 1.183-1.583 1.232-1.64l.308-.357.308.357c.1.116 2.442 2.846 2.442 4.541 0 1.696-1.13 2.88-2.75 2.88z"
          fill="#fff"
        />
        <path
          d="M9.668 11.502l1.155 1.289a23.58 23.58 0 011.98 2.6c.191-.241.327-.401.367-.448a.88.88 0 00.008-.01l.008-.009 1.064-1.23 1.066 1.233c.06.07.703.819 1.336 1.78.316.48.643 1.034.894 1.597.244.548.454 1.187.454 1.816 0 1.073-.36 2.05-1.044 2.767-.688.72-1.643 1.113-2.706 1.113H9.667c-1.322 0-2.502-.47-3.354-1.33C5.463 21.811 5 20.624 5 19.298c0-.758.264-1.542.582-2.231a14.38 14.38 0 011.17-2.014A23.885 23.885 0 018.51 12.79l1.157-1.289zm-.002 3.013c.52.624 1.522 1.9 2.15 3.152l.774 1.544.954-1.44c.25-.378.501-.719.706-.984.212.273.473.627.731 1.02.282.428.547.882.738 1.312.199.445.281.783.281 1.001 0 .623-.205 1.085-.491 1.385-.283.297-.703.495-1.259.495H9.667c-.838 0-1.49-.291-1.933-.737C7.291 20.815 7 20.152 7 19.298c0-.332.127-.805.398-1.392a12.41 12.41 0 011.006-1.726 22.21 22.21 0 011.262-1.665z"
          fill={color}
        />
      </g>
    </svg>
  )
}
