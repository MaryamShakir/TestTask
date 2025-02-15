import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../shared/theme';

const styles = StyleSheet.create({
  header: {
    borderColor: COLORS?.white,
    borderWidth: 1,
    borderRadius: 20,
    width: wp('11'),
    height: hp('5'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontWeight: '700',
    color: COLORS?.darkBlue,
    marginVertical: hp('2'),
    textAlign: 'center',
  },
});

export default styles;
