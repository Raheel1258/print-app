import * as React from "react"
import Svg, { Path } from "react-native-svg"

const OrderIcon = (props) => (
  <Svg
    width={19}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M9.5 19a9.406 9.406 0 0 1-4.146-.95A9.539 9.539 0 0 1 4 17.247l-.13-.095a9.584 9.584 0 0 1-2.815-3.297A9.396 9.396 0 0 1 0 9.5a9.5 9.5 0 0 1 19 0 9.398 9.398 0 0 1-1.054 4.353 9.586 9.586 0 0 1-2.812 3.296 9.575 9.575 0 0 1-1.408.855l-.076.038A9.404 9.404 0 0 1 9.5 19Zm0-4.75a3.79 3.79 0 0 0-3.38 2.059 7.613 7.613 0 0 0 6.76 0v-.005A3.788 3.788 0 0 0 9.5 14.25Zm0-1.9a5.714 5.714 0 0 1 4.967 2.903l.015-.012.013-.012-.016.015-.01.007a7.6 7.6 0 1 0-9.937 0A5.715 5.715 0 0 1 9.5 12.35Zm0-.95a3.8 3.8 0 1 1 0-7.6 3.8 3.8 0 0 1 0 7.6Zm0-5.7a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8Z"
      fill="#CCC"
    />
  </Svg>
)

export default OrderIcon;
