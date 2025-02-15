import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../shared/theme';

const styles = StyleSheet.create({
  btn: {
    width: wp('85'),
    height: hp('6%'),
    borderRadius: 36,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnTxt: {
    color: COLORS.btnTxt,
    fontWeight: '700',
  },
  socialBtn: {
    width: wp('80'),
    height: hp('5.5%'),
    borderRadius: 38,
    alignSelf: 'center',
    alignItems: 'center',
    paddingHorizontal: wp('7'),
    marginTop: hp('1.5'),
    borderWidth: 1,
    borderColor: COLORS?.white,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  socialBtnTxt: {
    fontWeight: '500',
    left: wp('10'),
  },
});

export default styles;
