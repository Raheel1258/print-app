import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ActivityActiveIcon = (props) => (
  <Svg
    width={16}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M7.773 19C6.7 19 5.83 18.15 5.83 17.1h3.886c0 1.05-.87 1.9-1.943 1.9Zm7.773-2.85H0v-1.9l1.943-.95V8.075c0-3.289 1.38-5.422 3.887-6.004V0h3.886v2.071c2.506.581 3.886 2.713 3.886 6.004V13.3l1.944.95v1.9ZM7.773 3.563A3.53 3.53 0 0 0 4.737 4.94a5.316 5.316 0 0 0-.85 3.135v6.175h7.772V8.075a5.316 5.316 0 0 0-.85-3.135 3.53 3.53 0 0 0-3.036-1.378Z"
      fill="#11C58F"
    />
  </Svg>
)

export default ActivityActiveIcon;
