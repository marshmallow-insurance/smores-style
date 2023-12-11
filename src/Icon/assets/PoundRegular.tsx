import React, { FC } from 'react'
import { Color } from 'theme'

interface Props {
  color: Color
}

export const PoundRegular: FC<Props> = ({ color }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.99 15.876l1.669.168c0 .685-.154 1.322-.462 1.91-.3.587-.77 1.077-1.406 1.469-.637.385-1.382.577-2.235.577H6v-1.637c.784-.392 1.43-.983 1.941-1.773.518-.791.777-1.617.777-2.477 0-.469-.07-.983-.21-1.543H6.063v-1.616h1.91a45.567 45.567 0 01-.388-1.102 8.872 8.872 0 01-.263-1.038 6.013 6.013 0 01-.126-1.176c0-.874.224-1.668.672-2.382a4.6 4.6 0 011.794-1.658A5.12 5.12 0 0112.107 3c1.456 0 2.6.378 3.432 1.133.832.756 1.273 1.735 1.322 2.939l-1.69.293a3.215 3.215 0 00-.178-.955 2.874 2.874 0 00-.472-.87c-.21-.28-.518-.5-.924-.662-.405-.168-.884-.251-1.437-.251-.889 0-1.637.293-2.246.881-.601.588-.902 1.319-.902 2.193 0 .126.007.26.02.399l.043.367c.02.105.052.245.094.42.05.175.084.304.105.388.021.077.067.22.136.43.07.21.112.343.126.4.021.048.074.195.158.44.084.238.133.374.147.41h4.712v1.615h-4.209c.133.511.2.994.2 1.448 0 1.784-.71 3.233-2.13 4.345h4.91c.518 0 .963-.077 1.333-.23.371-.162.648-.375.83-.641.181-.266.31-.528.388-.787.077-.266.115-.542.115-.83z"
        fill={color}
      />
    </svg>
  )
}
