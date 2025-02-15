import {ImageBackground, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import {Text13, Text22} from '../../../components/Text/Text';
import ButtonComp from '../../../components/Button/ButtonComp';

const onBoarding = () => {
  const navigation = useNavigation();
  const onGetStartedPress = () => {
    navigation.navigate('welcome');
  };
  return (
    <ImageBackground
      source={require('../../../assets//Images/Onboarding.png')}
      style={styles?.bgImg}>
      <View style={styles?.container1}>
        <Text22 textStyle={styles.label}>
          Hi Jhon, Welcome to My Daily Therapy
        </Text22>
        <Text13 textStyle={styles?.subLabel}>
          Explore the app, Find some peace of mind to prepare for meditation.
        </Text13>
      </View>
      <View style={styles?.btn}>
        <ButtonComp label="Get Started" onPress={onGetStartedPress} />
      </View>
    </ImageBackground>
  );
};

export default onBoarding;
