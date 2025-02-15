import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

import styles from './styles';
import {Text12, Text13, Text20} from '../../../components/Text/Text';
import ButtonComp from '../../../components/Button/ButtonComp';

const welcome = () => {
  const navigation = useNavigation();

  const onSignUpPress = () => {
    navigation.navigate('signUp');
  };
  const onLoginPress = () => {
    navigation.navigate('login');
  };

  return (
    <View style={styles?.container}>
      <View style={styles?.container1}>
        <Text13 textStyle={styles.label}>Logo Here!</Text13>
      </View>
      <FastImage
        resizeMode={FastImage?.resizeMode?.contain}
        source={require('../../../assets/Images/welcome.png')}
        style={styles?.imgStyle}
      />
      <View style={styles?.bottomContainer}>
        <Text20 textStyle={styles.heading}>We are what we do</Text20>
        <Text12 textStyle={styles.subHeading}>
          Thousand of people are usign silent moon for smalls meditation{' '}
        </Text12>
        <View style={styles?.btnContainer}>
          <ButtonComp label="SIGN UP" onPress={onSignUpPress} />
          <View style={styles?.row}>
            <Text13 textStyle={styles?.txt}>ALREADY HAVE AN ACCOUNT?</Text13>
            <Text13
              textStyle={{...styles?.txt, ...styles?.txt1}}
              onPress={onLoginPress}>
              LOG IN
            </Text13>
          </View>
        </View>
      </View>
    </View>
  );
};

export default welcome;
