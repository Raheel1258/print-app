import * as React from "react"
import Svg, { Path } from "react-native-svg"

const LeftArrow = (props) => (
  <Svg
    width={9}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M6.865 13.485a1 1 0 1 0 1.437-1.392l-1.437 1.392ZM1.917 6.939l-.718-.696a1 1 0 0 0 0 1.392l.718-.696Zm6.385-5.154A1 1 0 1 0 6.865.393l1.437 1.392Zm0 10.308-5.667-5.85L1.2 7.635l5.666 5.85 1.437-1.392ZM2.635 7.635l5.667-5.85L6.865.393 1.2 6.243l1.436 1.392Z"
      fill="#14181F"
    />
  </Svg>
)

export default LeftArrow;
