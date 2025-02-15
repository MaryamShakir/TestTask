import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {COLORS} from '../../../shared/theme';

const styles = StyleSheet?.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS?.whiteBg,
  },
  label: {
    fontWeight: '700',
    textAlign: 'center',
    color: COLORS?.darkGreen,
  },
  container1: {
    marginTop: hp('10'),
    alignItems: 'center',
  },
  imgStyle: {
    width: 332,
    height: 242,
    top: 36,
  },

  btn: {
    position: 'absolute',
    bottom: hp('13'),
  },
  heading: {
    color: COLORS?.blusih,
    fontWeight: '600',
  },
  subHeading: {
    color: COLORS?.blusih,
    fontWeight: '400',
    maxWidth: wp('65'),
    textAlign: 'center',
    marginTop: hp('2'),
  },
  bottomContainer: {
    position: 'absolute',
    bottom: hp('8'),
    alignItems: 'center',
  },
  btnContainer: {
    marginTop: hp('6'),
  },
  row: {
    flexDirection: 'row',
    marginTop: hp('1'),
    justifyContent: 'center',
  },
  txt: {
    color: COLORS?.gray,
    fontWeight: '500',
  },
  txt1: {color: COLORS?.darkGreen, marginLeft: wp('2')},
});

export default styles;
