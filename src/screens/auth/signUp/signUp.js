import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
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
import CheckSvg from '../../../assets/svgs/checkSvg';
import EyeClose from '../../../assets/svgs/eyeCloseSvg';
import Rectangle from '../../../assets/svgs/rectangleSvg';

const signUp = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const onSignInPress = () => {
    navigation?.navigate('login');
  };
  const onSignUpPress = () => {};

  return (
    <SafeAreaView style={styles?.container}>
      <Header label="Create your account " />
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
          placeholder="Name"
          value={name}
          onChangeText={val => setName(val)}
          rightIcon={<CheckSvg />}
        />
        <TextInputComp
          placeholder="Email address"
          value={email}
          onChangeText={val => setEmail(val)}
          rightIcon={<CheckSvg />}
        />

        <TextInputComp
          placeholder="Password"
          value={password}
          onChangeText={val => setPassword(val)}
          secureTextEntry={true}
          rightIcon={<EyeClose />}
        />

        <View style={{...styles?.row, marginTop: hp('6')}}>
          <Text13 textStyle={styles?.txt}>i have read the </Text13>
          <Text13 textStyle={{...styles?.txt, ...styles?.txt1}}>
            Privacy Policy
          </Text13>
          <Rectangle />
        </View>
        <View style={styles?.bottomContainer}>
          <ButtonComp label="SIGN UP" onPress={onSignUpPress} />

          <View style={styles?.row}>
            <Text13 textStyle={styles?.txt}>ALREADY HAVE AN ACCOUNT?</Text13>
            <Text13
              textStyle={{...styles?.txt, ...styles?.txt1}}
              onPress={onSignInPress}>
              SIGN IN
            </Text13>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default signUp;
