import * as React from 'react';
import Svg, {Rect} from 'react-native-svg';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
const Rectangle = props => (
  <Svg
    width={20}
    height={20}
    style={{marginLeft: wp('2')}}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect
      x={1}
      y={1}
      width={22.1672}
      height={22.1672}
      rx={3}
      stroke="#A1A4B2"
      strokeWidth={2}
    />
  </Svg>
);
export default Rectangle;
