import * as React from "react"
import Svg, { Path } from "react-native-svg"

const CalendarIcon = (props) => (
  <Svg
    width={12}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10.667 13.667H1.333A1.333 1.333 0 0 1 0 12.333V3c0-.736.597-1.333 1.333-1.333h1.334V.333H4v1.334h4V.333h1.333v1.334h1.334C11.403 1.667 12 2.264 12 3v9.333c0 .737-.597 1.334-1.333 1.334Zm-9.334-8v6.666h9.334V5.667H1.333Zm0-2.667v1.333h9.334V3H1.333Zm8 8H8V9.667h1.333V11Zm-2.666 0H5.333V9.667h1.334V11ZM4 11H2.667V9.667H4V11Zm5.333-2.667H8V7h1.333v1.333Zm-2.666 0H5.333V7h1.334v1.333ZM4 8.333H2.667V7H4v1.333Z"
      fill="#999"
    />
  </Svg>
)

export default CalendarIcon;
