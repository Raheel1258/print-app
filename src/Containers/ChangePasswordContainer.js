import React, {useState} from 'react';
import {View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';

import ChangePasswordScreen from '../Screens/ChangePasswordScreen';
import {colors} from '../Utils/theme';

const ChangePasswordContainer = () => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <ChangePasswordScreen goBack={goBack} toggleModal={toggleModal} isModalVisible={isModalVisible}/>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.offWhiteColor,
  },
});

export default ChangePasswordContainer;
