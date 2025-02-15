import React, {memo} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native';

import {Text16} from '../Text/Text';
import styles from './styles';
import {COLORS} from '../../shared/theme';

const ButtonComp = props => (
  <TouchableOpacity style={styles?.btn} onPress={props?.onPress}>
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={[COLORS?.lightGreen, COLORS?.darkGreen]}
      style={styles?.btn}>
      <Text16 textStyle={props?.style || styles?.btnTxt}>{props?.label}</Text16>
    </LinearGradient>
  </TouchableOpacity>
);

export default memo(ButtonComp);
