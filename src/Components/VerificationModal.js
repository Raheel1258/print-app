import React, {useState} from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {View, Text, Button} from 'react-native';
import Modal from 'react-native-modal';
import {useTranslation} from 'react-i18next';

import ModalButton from '../Components/GreenButton';
import {colors, fonts} from '../Utils/theme';

const VerificationModal = ({
  toggleModal,
  isModalVisible,
  title,
  description,
  modalButton = 'Ok',
  aditionalAction = () => {},
}) => {
  const {t} = useTranslation();
  return (
    <>
      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        <View style={styles.modalContainer}>
          <Text style={styles.sentText}>{title}</Text>
          <Text style={styles.emailDescription}>{description}</Text>
          <View style={styles.buttonWrapper}>
            <ModalButton
              backgroundColor={colors.blackColor}
              title={modalButton}
              onPress={() => {
                toggleModal();
                aditionalAction();
              }}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = ScaledSheet.create({
  modalContainer: {
    backgroundColor: colors.whiteColor,
    borderRadius: '20@s',
    padding: '15@s',
    width: '100%',
    height: '240@s',
  },
  sentText: {
    fontFamily: fonts.avenir_bold,
    fontSize: '14@s',
    // fontWeight: '800',
    fontStyle: 'normal',
    lineHeight: '14@s',
    letterSpacing: '0.5@s',
    textAlign: 'center',
    marginTop: '30@s',
    color: colors.blackColor,
  },
  emailDescription: {
    fontFamily: fonts.avenir_light,
    fontSize: '12@s',
    fontStyle: 'normal',
    // fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: '17@s',
    letterSpacing: '0.2@s',
    textAlign: 'center',
    marginTop: '25@s',
    color: colors.lightBlackColor,
  },
  buttonWrapper: {
    marginTop: '30@s',
  },
});

export default VerificationModal;
