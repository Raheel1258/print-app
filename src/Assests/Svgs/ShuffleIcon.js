import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ShuffleIcon = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M17.293 19.293a1 1 0 0 0 1.414 1.414l-1.414-1.414ZM21 17l.707.707a1 1 0 0 0 0-1.414L21 17Zm-2.293-3.707a1 1 0 0 0-1.414 1.414l1.414-1.414Zm0 7.414 3-3-1.414-1.414-3 3 1.414 1.414Zm3-4.414-3-3-1.414 1.414 3 3 1.414-1.414ZM18.707 3.293a1 1 0 1 0-1.414 1.414l1.414-1.414ZM21 7l.707.707a1 1 0 0 0 0-1.414L21 7Zm-3.707 2.293a1 1 0 0 0 1.414 1.414l-1.414-1.414Zm0-4.586 3 3 1.414-1.414-3-3-1.414 1.414Zm3 1.586-3 3 1.414 1.414 3-3-1.414-1.414Z"
      fill="#000"
    />
    <Path
      d="M21 8a1 1 0 1 0 0-2v2ZM3 16a1 1 0 1 0 0 2v-2Zm7.6.8a1 1 0 1 0-1.2-1.6l1.2 1.6Zm2.8-9.6a1 1 0 1 0 1.2 1.6l-1.2-1.6ZM21 6h-4v2h4V6ZM7 16H3v2h4v-2Zm2.4-.8c-.669.503-1.498.8-2.4.8v2c1.35 0 2.598-.447 3.6-1.2l-1.2-1.6ZM17 6c-1.35 0-2.598.447-3.6 1.2l1.2 1.6A3.978 3.978 0 0 1 17 8V6ZM3 6a1 1 0 0 0 0 2V6Zm18 12a1 1 0 1 0 0-2v2ZM3 8h4V6H3v2Zm14 10h4v-2h-4v2Zm-6-6a6 6 0 0 0 6 6v-2a4 4 0 0 1-4-4h-2ZM7 8a4 4 0 0 1 4 4h2a6 6 0 0 0-6-6v2Z"
      fill="#000"
    />
  </Svg>
)

export default ShuffleIcon;