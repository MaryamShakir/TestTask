import React from 'react';
import {
  StyleSheet,
  TextInput,
  Platform,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {Text10} from '../Text/Text';
import {COLORS} from '../../shared/theme';

const TextInputComp = props => {
  return (
    <View style={[styles.container, props.containerStyle]}>
      <TextInput
        ref={props.ref1}
        maxLength={props.maxLength}
        keyboardType={props.keyboardType}
        disabled={props.disabled}
        readOnly={props?.readOnly}
        label={props?.label}
        selectionColor={
          Platform.OS == 'ios'
            ? props?.cursorColor
              ? props?.cursorColor
              : COLORS.black
            : COLORS.lightGray
        }
        multiline={props.multiline}
        numberOfLines={props.lines}
        placeholder={props?.placeholder || 'placeHolder'}
        placeholderTextColor={props.phColor || COLORS.darkBlue}
        placeholderStyle={{marginLeft: wp('1')}}
        style={[
          styles.inputStyle,
          props.inputStyle,
          props.height && {height: props.height},
          props.backgroundColor
            ? {backgroundColor: props.backgroundColor}
            : COLORS.white,
          // Adjust padding to prevent text from going behind the icon
          props.rightIcon && {paddingRight: wp('12')},
        ]}
        onSubmitEditing={props?.onSubmitEditing}
        secureTextEntry={props.secureTextEntry}
        value={props?.value}
        onChangeText={props?.onChangeText}
      />
      {props.rightIcon && (
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={props.onIconPress}
          disabled={!props.onIconPress}>
          {props.rightIcon}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TextInputComp;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    width: wp('85%'),
    alignSelf: 'center',
  },
  inputStyle: {
    textAlign: 'auto',
    width: '100%',
    height: hp('6.5'),
    marginTop: hp('1.5'),
    borderWidth: 1,
    borderRadius: 15,
    fontSize: 15,
    paddingHorizontal: wp('4'),
    borderColor: COLORS.txtInputBg,
    color: COLORS?.gray_700,
    backgroundColor: COLORS?.txtInputBg,
  },
  iconContainer: {
    position: 'absolute',
    right: wp('4'),
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
