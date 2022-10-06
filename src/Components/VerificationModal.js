import React from 'react';
import { ScaledSheet } from 'react-native-size-matters';

import { View, Text } from 'react-native';
import Modal from 'react-native-modal';
import { useTranslation } from 'react-i18next';

import ModalButton from '../Components/GreenButton';

import { colors, fonts } from '../Utils/theme';

const VerificationModal = ({
  toggleModal,
  isModalVisible,
  title,
  description,
  modalButton = 'OK',
  aditionalAction = () => { },
  backDrop = () => toggleModal(),

}) => {
  const { t } = useTranslation();
  return (
    <>
      <Modal isVisible={isModalVisible} onBackdropPress={backDrop}>
        <View style={styles.modalContainer}>
          <Text style={styles.sentText}>{title}</Text>
          <Text style={styles.emailDescription}>{description}</Text>
          <View style={styles.buttonWrapper}>
            <ModalButton
              backgroundColor={colors.blackColor}
              title={modalButton == "OK" ? t('ok_text') : modalButton}
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
    fontStyle: 'normal',
    lineHeight: '20@s',
    letterSpacing: '0.2@s',
    textAlign: 'center',
    marginTop: '30@s',
    color: colors.blackColor,
  },
  emailDescription: {
    fontFamily: fonts.avenir_light,
    fontSize: '12@s',
    fontStyle: 'normal',
    fontStyle: 'normal',
    lineHeight: '20@s',
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
