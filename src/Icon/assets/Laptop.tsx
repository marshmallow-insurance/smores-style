import React, { FC } from 'react'
import { Color } from 'theme'

interface Props {
  color: Color
}

export const Laptop: FC<Props> = ({ color }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.349 19.652L22 14.259v-9.88c0-1.653-1.346-3-3-3H5c-1.654 0-3 1.347-3 3v9.88L.651 19.653a2.98 2.98 0 00.546 2.574 2.986 2.986 0 002.365 1.153h16.877c.93 0 1.792-.421 2.364-1.153a2.984 2.984 0 00.546-2.575zM4 4.38c0-.551.448-1 1-1h14c.552 0 1 .449 1 1v9H4v-9zm17.227 16.615a.997.997 0 01-.789.385H3.562a.994.994 0 01-.788-.385.995.995 0 01-.183-.858L3.78 15.38h16.44l1.189 4.757a.994.994 0 01-.182.858z"
        fill={color}
      />
    </svg>
  )
}