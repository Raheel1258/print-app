import * as React from "react"
import Svg, { Path } from "react-native-svg"

const OrdersActiveIcon = (props) => (
  <Svg
    width={20}
    height={13}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m13 12.411-2.7-2.7 1.414-1.416L13 9.583l5.008-5L19.419 6 13 12.41v.001ZM9 10H0V8h9v2Zm4-4H0V4h13v2Zm0-4H0V0h13v2Z"
      fill="#11C58F"
    />
  </Svg>
)

export default OrdersActiveIcon;
