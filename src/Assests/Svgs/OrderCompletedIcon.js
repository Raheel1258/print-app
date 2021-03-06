import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

const OrderCompletedIcon = (props) => (
  <Svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={15} cy={15} r={15} fill="#37CB99" fillOpacity={0.13} />
    <Path
      d="M21.719 16.453v-5.828a.313.313 0 0 0-.157-.272l-7.578-4.375a.313.313 0 0 0-.312 0l-7.578 4.375a.313.313 0 0 0-.157.272v8.75a.313.313 0 0 0 .157.272l7.578 4.375a.313.313 0 0 0 .312 0l2.847-1.644a3.98 3.98 0 0 0 6.315.218 3.982 3.982 0 0 0-1.427-6.155v.012Zm-7.89-9.844 6.952 4.016-3.487 2.012-6.457-4.3 2.991-1.728Zm0 8.032-6.954-4.016 3.36-1.94 6.453 4.303-2.86 1.653Zm2.265 5.437c0 .612.143 1.215.415 1.763l-2.368 1.368v-8.028l2.812-1.634v2.434a.312.312 0 1 0 .625 0v-2.793l3.5-2.022v5.065a3.885 3.885 0 0 0-1.015-.137 3.987 3.987 0 0 0-3.97 3.984Zm5.937-1.25L19.875 21.7a.313.313 0 0 1-.24.125.314.314 0 0 1-.238-.11l-1.272-1.493a.313.313 0 0 1 .478-.403l1.016 1.194 1.944-2.557a.312.312 0 0 1 .567.143.312.312 0 0 1-.07.235l-.029-.006Z"
      fill="#37CB99"
    />
  </Svg>
)

export default OrderCompletedIcon;
