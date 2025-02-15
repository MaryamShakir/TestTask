import React, {memo} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native';

import {Text12, Text14, Text16} from '../Text/Text';
import styles from './styles';
import {COLORS} from '../../shared/theme';
import HorizontalView from '../HorizontalView/HorizontalView';
import FbSvg from '../../assets/svgs/fbSvg';

const SocialButtons = props => (
  <TouchableOpacity
    style={{
      ...styles?.socialBtn,
      backgroundColor: props?.bgColor || COLORS?.blue,
    }}
    onPress={props?.onPress}>
    {props?.icon}
    <Text12
      textStyle={{
        color: props?.txtColor || COLORS?.btnTxt,
        ...styles?.socialBtnTxt,
      }}>
      {props?.label}
    </Text12>
  </TouchableOpacity>
);

export default memo(SocialButtons);
