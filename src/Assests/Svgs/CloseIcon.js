import * as React from "react"
import Svg, { Path } from "react-native-svg"

const CloseIcon = (props) => (
  <Svg
    width={21}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10 20A9.99 9.99 0 0 1 0 10v-.2a10.005 10.005 0 0 1 17.074-6.874A10 10 0 0 1 10 20Zm0-8.59L12.59 14 14 12.59 11.41 10 14 7.41 12.59 6 10 8.59 7.41 6 6 7.41 8.59 10 6 12.59 7.41 14 10 11.411Z"
      fill="#CCC"
    />
  </Svg>
)

export default CloseIcon;
