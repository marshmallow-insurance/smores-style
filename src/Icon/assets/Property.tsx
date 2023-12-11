import React, { FC } from 'react'
import { Color } from 'theme'

interface Props {
  color: Color
}

export const Property: FC<Props> = ({ color }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#property)">
        <path
          d="M19 7.075c.552 0 1-.451 1-1.01v-.01a1 1 0 00-1-1.004c-.552 0-1 .457-1 1.015 0 .558.448 1.009 1 1.009zm-11 1c0-.559-.448-1.01-1-1.01H1c-.552 0-1 .45-1 1.01v15.138c0 .558.448 1.01 1 1.01h6c.552 0 1-.452 1-1.01s-.448-1.01-1-1.01H2V9.084h5c.552 0 1-.45 1-1.009zm11 3.027c.552 0 1-.451 1-1.01v-.01a1 1 0 00-1-1.004c-.552 0-1 .456-1 1.015 0 .558.448 1.009 1 1.009zM5 16.143c-.552 0-1 .456-1 1.014s.448 1.01 1 1.01 1-.452 1-1.01v-.01a1 1 0 00-1-1.004zm1-3.033a1 1 0 00-1-1.004c-.552 0-1 .456-1 1.014 0 .559.448 1.01 1 1.01s1-.452 1-1.01v-.01zm13 2.029c.552 0 1-.451 1-1.01v-.01a1 1 0 00-1-1.004c-.552 0-1 .457-1 1.015 0 .558.448 1.009 1 1.009zm-4 0c.552 0 1-.451 1-1.01v-.01a1 1 0 00-1-1.004c-.552 0-1 .457-1 1.015 0 .558.448 1.009 1 1.009zM23 0H11c-.552 0-1 .451-1 1.01v22.203c0 .558.448 1.01 1 1.01h12c.552 0 1-.452 1-1.01V1.009C24 .451 23.552 0 23 0zm-1 22.204H12V2.019h10v20.185zm-7-11.102c.552 0 1-.451 1-1.01v-.01a1 1 0 00-1-1.004c-.552 0-1 .456-1 1.015 0 .558.448 1.009 1 1.009zm0-4.027c.552 0 1-.451 1-1.01v-.01a1 1 0 00-1-1.004c-.552 0-1 .457-1 1.015 0 .558.448 1.009 1 1.009z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="property">
          <path fill="#fff" d="M0 0h24v24.222H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
