import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

const OrderPicupIcon = (props) => (
  <Svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={15} cy={15} r={15} fill="#2E9C96" fillOpacity={0.13} />
    <Path
      d="m22.734 10.353-7.578-4.375a.313.313 0 0 0-.312 0l-7.578 4.375a.313.313 0 0 0-.157.272v8.75a.312.312 0 0 0 .157.272l7.578 4.375a.312.312 0 0 0 .312 0l7.578-4.375a.313.313 0 0 0 .157-.272v-8.75a.313.313 0 0 0-.157-.272ZM15 6.609l6.953 4.016-3.487 2.012-6.457-4.3L15 6.61Zm0 8.031-6.953-4.015 3.36-1.94 6.456 4.302L15 14.64Zm7.266 4.553-6.953 4.016v-8.028l2.812-1.634v2.434a.313.313 0 1 0 .625 0v-2.794l3.5-2.022.016 8.029Z"
      fill="#2E9C96"
    />
  </Svg>
)

export default OrderPicupIcon;
