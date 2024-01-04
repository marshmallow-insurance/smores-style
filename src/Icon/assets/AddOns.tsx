import React, { FC } from 'react'
import { Color } from 'theme'

interface Props {
  color: Color
}

export const AddOns: FC<Props> = ({ color }) => {
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
        d="M18 10.719c.477-.17.979-.275 1.5-.275 2.481 0 4.5 2.019 4.5 4.5s-2.019 4.5-4.5 4.5a4.459 4.459 0 01-1.5-.275V23a1 1 0 01-1 1h-5.556a.997.997 0 01-.71-.298l-.004-.003c-.013-.014-.022-.03-.03-.046a.239.239 0 00-.024-.037.98.98 0 01-.156-.24c-.029-.07-.038-.144-.047-.218l-.004-.033a.332.332 0 00-.012-.052c-.006-.023-.013-.047-.013-.073v-.003l.001-.003a1.005 1.005 0 01.297-.705l.003-.004c.486-.476.755-1.11.755-1.785 0-1.379-1.121-2.5-2.5-2.5a2.502 2.502 0 00-2.5 2.5c0 .675.269 1.309.755 1.785l.003.004a.99.99 0 01.297.705v.003l.001.003c0 .026-.007.05-.014.075-.005.016-.01.033-.012.051l-.005.04c-.008.071-.017.142-.045.21-.037.09-.096.166-.156.241a.227.227 0 00-.023.037.178.178 0 01-.03.045l-.004.003a.99.99 0 01-.706.297h-.002L6.556 24H1a1 1 0 01-1-1V7a1 1 0 011-1h3.775A4.459 4.459 0 014.5 4.5C4.5 2.019 6.519 0 9 0s4.5 2.019 4.5 4.5c0 .521-.105 1.023-.275 1.5H17a1 1 0 011 1v3.719zm-.285 5.97a2.475 2.475 0 001.785.755 2.501 2.501 0 002.499-2.5c0-1.379-1.121-2.5-2.5-2.5a2.484 2.484 0 00-1.787.756l-.002.002a.996.996 0 01-.705.297h-.002L17 13.5a.231.231 0 01-.064-.012.315.315 0 00-.048-.011l-.018-.002a.89.89 0 01-.247-.051.98.98 0 01-.239-.155.239.239 0 00-.037-.023.206.206 0 01-.049-.035.99.99 0 01-.297-.705v-.004L16 12.5V8h-4.5c-.005 0-.01-.001-.014-.003l-.013-.002a.056.056 0 00-.014.002 1.001 1.001 0 01-.714-1.712c.486-.476.755-1.11.755-1.785C11.5 3.121 10.379 2 9 2a2.502 2.502 0 00-2.5 2.5 2.483 2.483 0 00.756 1.786.99.99 0 01.3.71v.004c0 .026-.007.05-.014.075-.005.016-.01.033-.012.051a4.085 4.085 0 00-.005.04c-.008.07-.017.142-.045.21-.037.09-.096.166-.156.241-.01.012-.016.024-.023.037-.008.016-.017.032-.03.045a.99.99 0 01-.712.3L6.556 8H2v14h2.774a4.459 4.459 0 01-.275-1.5c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5c0 .521-.105 1.023-.275 1.5h2.775v-4.613-.003l.001-.002c.001-.13.026-.26.077-.382a1.012 1.012 0 01.223-.327c.013-.013.03-.022.045-.03a.226.226 0 00.037-.023c.075-.06.151-.119.241-.156a.869.869 0 01.244-.051l.017-.002a.33.33 0 00.047-.01.247.247 0 01.068-.013h.003a1.012 1.012 0 01.709.297l.004.004z"
        fill={color}
      />
    </svg>
  )
}