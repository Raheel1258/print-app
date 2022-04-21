import * as React from "react"
import Svg, { Circle } from "react-native-svg"

const UnCheckedCircleIcon = (props) => (
  <Svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle
      cx={9}
      cy={9}
      r={8.75}
      fill="#fff"
      stroke="#000"
      strokeWidth={0.5}
    />
  </Svg>
)

export default UnCheckedCircleIcon;
