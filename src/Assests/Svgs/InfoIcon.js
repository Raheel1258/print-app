import * as React from "react"
import Svg, { Path } from "react-native-svg"

const InfoIcon = (props) => (
  <Svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M9 17.448c-4.603 0-8.333-3.754-8.333-8.385C.667 4.43 4.397.677 9 .677c4.602 0 8.333 3.754 8.333 8.386-.005 4.629-3.733 8.38-8.333 8.385ZM7.325 8.216V9.9h.833v3.354h2.517v-1.677h-.842l.008-3.362H7.325Zm.833-3.346v1.693h1.684V4.87H8.158Z"
      fill="#37CB99"
    />
  </Svg>
)

export default InfoIcon;
