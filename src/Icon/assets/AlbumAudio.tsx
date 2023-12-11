import React, { FC } from 'react'
import { Color } from 'theme'

interface Props {
  color: Color
}

export const AlbumAudio: FC<Props> = ({ color }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.399 17.8C16.58 17.935 16.79 18 16.999 18C17.303 18 17.603 17.862 17.799 17.601C18.585 16.556 19 15.311 19 14C19 12.689 18.585 11.444 17.799 10.399C17.468 9.958 16.841 9.869 16.399 10.2C15.958 10.532 15.868 11.158 16.2 11.6C16.724 12.296 17 13.126 17 14C17 14.874 16.724 15.704 16.201 16.4C15.869 16.841 15.958 17.468 16.399 17.8ZM22 0H5C2.794 0 1 1.794 1 4V20C1 22.206 2.794 24 5 24H22C22.552 24 23 23.552 23 23V1C23 0.448 22.552 0 22 0ZM21 4H7C6.448 4 6 4.448 6 5C6 5.552 6.448 6 7 6H21V22H5C3.897 22 3 21.103 3 20V4C3 2.897 3.897 2 5 2H21V4ZM8 17H8.764L12.553 18.895C12.694 18.965 12.847 19 13 19C13.183 19 13.365 18.95 13.526 18.851C13.82 18.668 14 18.347 14 18V10C14 9.653 13.82 9.332 13.526 9.149C13.231 8.967 12.863 8.951 12.553 9.105L8.764 11H8C6.346 11 5 12.346 5 14C5 15.654 6.346 17 8 17ZM8 13H9C9.155 13 9.309 12.964 9.447 12.895L12 11.618V16.382L9.447 15.106C9.309 15.036 9.155 15 9 15H8C7.449 15 7 14.551 7 14C7 13.449 7.449 13 8 13Z"
        fill={color}
      />
    </svg>
  )
}
