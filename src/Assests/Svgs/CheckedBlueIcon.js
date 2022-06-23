import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

const CheckedBlueIcon = (props) => (
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
      fill="#2F80ED"
      stroke="#0E4B9D"
      strokeWidth={0.5}
    />
    <Path
      d="M12 7.125 7.875 11.25 6 9.375"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default CheckedBlueIcon;
