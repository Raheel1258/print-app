import * as React from "react"
import Svg, { Path } from "react-native-svg"

const CartActiveIcon = (props) => (
  <Svg
    width={20}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M15.21 15.875c0 .79-.507 1.125-.789 1.125v2c1.695 0 2.79-1.567 2.79-3.125h-2ZM14.422 17c-.282 0-.79-.336-.79-1.125h-2c0 1.558 1.096 3.125 2.79 3.125v-2Zm-.79-1.125c0-.79.508-1.125.79-1.125v-2c-1.694 0-2.79 1.567-2.79 3.125h2Zm.79-1.125c.282 0 .79.336.79 1.125h2c0-1.558-1.095-3.125-2.79-3.125v2ZM6.264 15.875c0 .79-.508 1.125-.79 1.125v2c1.695 0 2.79-1.567 2.79-3.125h-2ZM5.474 17c-.282 0-.79-.336-.79-1.125h-2C2.685 17.433 3.78 19 5.475 19v-2Zm-.79-1.125c0-.79.508-1.125.79-1.125v-2c-1.695 0-2.79 1.567-2.79 3.125h2Zm.79-1.125c.282 0 .79.336.79 1.125h2c0-1.558-1.095-3.125-2.79-3.125v2Z"
      fill="#11C58F"
    />
    <Path
      d="M1 0a1 1 0 1 0 0 2V0Zm2.08 1.72-.976.22.976-.22Zm2.55 11.31.976-.22-.975.22Zm8.791 1.72a1 1 0 0 0 0-2v2ZM1 2h1.142V0H1v2Zm1.104-.06 2.551 11.31 1.951-.44L4.056 1.5l-1.952.44Zm4.464 12.81h7.853v-2H6.568v2Zm-1.913-1.5c.205.908 1.027 1.5 1.913 1.5v-2c-.004 0 0-.001.007.004a.099.099 0 0 1 .031.056l-1.95.44ZM2.142 2c.004 0 .001.001-.006-.004a.099.099 0 0 1-.032-.056l1.951-.44C3.85.592 3.028 0 2.142 0v2Z"
      fill="#11C58F"
    />
    <Path
      d="M3.685 2.55a1 1 0 0 0 0 2v-2ZM17.962 4.77l.959.282-.96-.282Zm-1.69 5.738.96.282-.96-.282Zm-10.899-.31a1 1 0 1 0 0 2v-2ZM3.685 4.55h13.339v-2H3.684v2Zm13.317-.06-1.689 5.737 1.919.565 1.689-5.738-1.919-.564Zm-1.667 5.71H5.373v2h9.962v-2Zm-.022.027a.046.046 0 0 1 .015-.023.018.018 0 0 1 .005-.003h.002v2c.867 0 1.648-.563 1.897-1.409l-1.919-.565Zm1.711-5.676c.004 0 0 0-.004-.002a.026.026 0 0 1-.01-.008.052.052 0 0 1-.008-.02.07.07 0 0 1 0-.031l1.919.564c.376-1.278-.608-2.503-1.897-2.503v2Z"
      fill="#11C58F"
    />
  </Svg>
)

export default CartActiveIcon;
