import * as React from "react"
import Svg, { Path } from "react-native-svg"

const FaqsIcon = (props) => (
  <Svg
    width={21}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10.49 20.083A9.583 9.583 0 1 1 10.51.916a9.583 9.583 0 0 1-.02 19.167Zm-7.656-9.418a7.667 7.667 0 1 0 0-.165v.165Zm8.625 4.627H9.542v-1.917h1.917v1.917Zm0-3.834H9.542v-5.75h1.917v5.75Z"
      fill="#000"
    />
  </Svg>
)

export default FaqsIcon;
