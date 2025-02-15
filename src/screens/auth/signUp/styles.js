import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {COLORS} from '../../../shared/theme';

const styles = StyleSheet?.create({
  container: {
    flex: 1,
    backgroundColor: COLORS?.whiteBg,
    paddingHorizontal: wp('5'),
  },
  container1: {
    alignItems: 'center',
    flex: 1,
  },

  txt12: {
    color: COLORS?.gray,
    fontWeight: '400',
    textAlign: 'center',
    marginVertical: hp('4'),
  },
  bottomContainer: {
    marginTop: hp('2'),
  },

  row: {
    flexDirection: 'row',
    marginTop: hp('2'),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  txt: {
    color: COLORS?.gray,
    fontWeight: '500',
  },
  txt1: {color: COLORS?.darkGreen, marginLeft: wp('2')},
  icon: {marginLeft: wp('2')},
});

export default styles;
