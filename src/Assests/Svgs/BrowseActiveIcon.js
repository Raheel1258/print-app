import * as React from "react"
import Svg, { Path } from "react-native-svg"

const BrowseActiveIcon = (props) => (
  <Svg
    width={16}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M14.417 17.167H1.584a.917.917 0 0 1-.917-.917V7.41a.927.927 0 0 1 .269-.595L7.352.398a.917.917 0 0 1 1.297 0l6.417 6.417a.911.911 0 0 1 .268.648v8.787c0 .506-.41.917-.917.917ZM8 2.342l-5.5 5.5v7.491h11v-7.49L8 2.342ZM8 13.5c-.19-.17-.406-.347-.634-.534l-.043-.034c-1.06-.866-2.383-1.943-2.383-3.282a1.65 1.65 0 0 1 1.685-1.65A1.84 1.84 0 0 1 8 8.612C8.35 8.221 8.85 8 9.375 8a1.65 1.65 0 0 1 1.682 1.65c0 1.344-1.33 2.428-2.4 3.3l-.052.043c-.217.178-.422.346-.606.508L8 13.499Z"
      fill="#11C58F"
    />
  </Svg>
)

export default BrowseActiveIcon
