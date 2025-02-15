import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {COLORS} from '../../../shared/theme';

const styles = StyleSheet?.create({
  bgImg: {
    flex: 1,
    alignItems: 'center',
  },
  label: {
    fontWeight: '400',
    textAlign: 'center',
    color: COLORS?.creamWhite,
    maxWidth: wp('58'),
  },
  container1: {
    marginTop: hp('21'),
    alignItems: 'center',
  },
  subLabel: {
    marginTop: hp('1'),
    color: COLORS?.white,
    maxWidth: wp('60'),
    textAlign: 'center',
  },
  btn: {
    position: 'absolute',
    bottom: hp('13'),
  },
});

export default styles;
