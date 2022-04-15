import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"
const ThankyouIcon = (props) => (
  <Svg
    width={312}
    height={219}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Path fill="url(#a)" d="M0 0h312v219H0z" />
    <Defs>
      <Pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#b" transform="matrix(.00069 0 0 .00098 0 0)" />
      </Pattern>
      <Image
        id="b"
        width={1454}
        height={1022}
      />
    </Defs>
  </Svg>
)
export default ThankyouIcon;