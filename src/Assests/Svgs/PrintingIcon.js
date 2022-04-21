import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

const PrintingIcon = (props) => (
  <Svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={15} cy={15} r={15} fill="#5DA7CE" fillOpacity={0.13} />
    <Path
      d="M17.31 19.495H12.69a.533.533 0 0 0 0 1.066h4.622a.533.533 0 0 0 0-1.066ZM17.31 17.813H12.69a.533.533 0 0 0 0 1.066h4.622a.533.533 0 0 0 0-1.067Z"
      fill="#5DA7CE"
    />
    <Path
      d="M21.756 11.184h-1.697V8.098a.533.533 0 0 0-.534-.534h-9.05a.533.533 0 0 0-.534.534v3.086H8.244c-.686 0-1.244.559-1.244 1.245v5.366c0 .686.558 1.244 1.244 1.244h1.697v2.863c0 .295.24.533.534.533h9.05a.533.533 0 0 0 .534-.533v-2.863h1.697c.686 0 1.244-.558 1.244-1.244v-5.366c0-.686-.558-1.245-1.244-1.245ZM11.008 8.631h7.984v2.553h-7.984V8.631Zm7.984 12.738h-7.984v-4.364h7.984v4.364Zm.533-7.053h-1.357a.533.533 0 1 1 0-1.067h1.357a.533.533 0 0 1 0 1.067Z"
      fill="#5DA7CE"
    />
  </Svg>
)

export default PrintingIcon;
