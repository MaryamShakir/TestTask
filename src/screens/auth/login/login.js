import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';

import styles from './styles';
import {Text12, Text13} from '../../../components/Text/Text';
import ButtonComp from '../../../components/Button/ButtonComp';
import Header from '../../../components/Headers/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import SocialButtons from '../../../components/Button/SocialButtons';
import FbSvg from '../../../assets/svgs/fbSvg';
import GoogleSvg from '../../../assets/svgs/googleSvg';
import {COLORS} from '../../../shared/theme';
import TextInputComp from '../../../components/TextInputComp/TextInputComp';

const login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLoginPress = () => {};
  const onSignUpPress = () => {
    navigation.navigate('signUp');
  };

  return (
    <SafeAreaView style={styles?.container}>
      <Header label="Welcome Back!" />
      <View style={styles?.container1}>
        <SocialButtons label="CONTINUE WITH FACEBOOK" icon={<FbSvg />} />
        <SocialButtons
          label="CONTINUE WITH GOOGLE"
          icon={<GoogleSvg />}
          txtColor={COLORS?.darkBlue}
          bgColor={COLORS?.whiteBg}
        />
        <Text12 textStyle={styles?.txt12}>OR LOG IN WITH EMAIL</Text12>

        <TextInputComp
          placeholder="Email address"
          value={email}
          onChangeText={val => setEmail(val)}
        />
        <TextInputComp
          placeholder="Password"
          value={password}
          onChangeText={val => setPassword(val)}
        />
        <View style={styles?.bottomContainer}>
          <ButtonComp label="LOG IN" onPress={onLoginPress} />

          <Text13 textStyle={styles?.forgetTxt}>Forgot Password?</Text13>

          <View style={styles?.row}>
            <Text13 textStyle={styles?.txt}>ALREADY HAVE AN ACCOUNT?</Text13>
            <Text13
              textStyle={{...styles?.txt, ...styles?.txt1}}
              onPress={onSignUpPress}>
              SIGN UP
            </Text13>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default login;
