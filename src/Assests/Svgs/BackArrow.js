import * as React from "react"
import Svg, { Path } from "react-native-svg"

const BackArrow = (props) => (
  <Svg
    width={18}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M16.084 8.06a1 1 0 0 0 0-2v2Zm-14.167-2a1 1 0 0 0 0 2v-2Zm14.167 0H1.917v2h14.167v-2Z"
      fill="#14181F"
    />
    <Path
      d="M6.864 13.628a1 1 0 0 0 1.44-1.388l-1.44 1.388ZM1.917 7.06l-.72-.694a1 1 0 0 0 0 1.389l.72-.695Zm6.386-5.18A1 1 0 1 0 6.864.493l1.44 1.389Zm0 10.36L2.637 6.366l-1.44 1.389 5.667 5.873 1.44-1.388ZM2.637 7.755 8.303 1.88 6.864.492 1.197 6.366l1.44 1.389Z"
      fill="#14181F"
    />
  </Svg>
)

export default BackArrow;
