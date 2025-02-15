import React, {memo} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Text18} from '../Text/Text';
import styles from './styles';
import {COLORS} from '../../shared/theme';
import {MaterialIcons} from '../../shared/vectorIcons';

const Headers = props => {
  const navigation = useNavigation();
  const onBtnPress = () => {
    navigation?.goBack();
  };
  return (
    <View>
      <TouchableOpacity
        style={styles?.header}
        onPress={onBtnPress || props?.onPress}>
        <MaterialIcons name="arrow-back" color={COLORS?.darkBlue} size={20} />
      </TouchableOpacity>
      <Text18 textStyle={styles?.label}>{props?.label}</Text18>
    </View>
  );
};

export default memo(Headers);
