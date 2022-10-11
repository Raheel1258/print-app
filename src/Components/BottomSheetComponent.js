import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import RBSheet from 'react-native-raw-bottom-sheet';

import {
  ArtworkGuidelines,
  FilePickerInput,
  PreferredLanguageBottomSheet,
} from '../Components';
import CloseIcon from '../Assests/Svgs/CloseIcon';
import { colors, fonts } from '../Utils/theme';

const BottomSheetComponent = ({
  refRBSheet,
  title = undefined,
  childern,
  height = '93%',
  languageTitle = undefined,
  note = false,
  onClose = true,
  closePress = () => refRBSheet?.current?.close()
}) => {
  return (
    <View>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={onClose}
        closeOnPressMask={onClose}
        customStyles={{
          draggableIcon: {
            display: 'none',
          },
          container: {
            height: height,
            backgroundColor: colors.whiteColor,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            padding: 20,
          },
        }}>
        <View style={styles.headerContainer}>
          {title ? (
            <>
              <Text style={styles.headerTitle}>{title}</Text>
              <TouchableOpacity
                onPress={closePress}
                style={styles.iconWrapper}>
                <CloseIcon />
              </TouchableOpacity>
            </>
          ) : (
            <Text style={styles.titleText}>{languageTitle}</Text>
          )}
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {childern}
          {note && (
            <>
              <ArtworkGuidelines />
            </>

          )}
        </ScrollView>
      </RBSheet>
    </View>
  );
};

const styles = ScaledSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '2@s',
    marginHorizontal: '2@s',
    marginBottom: '25@s',
  },
  headerTitle: {
    fontFamily: fonts.avenir_bold,
    fontSize: '14@s',
    fontStyle: 'normal',
    lineHeight: '18@s',
    letterSpacing: '0.2@s',
    color: colors.blackColor,
  },
  iconWrapper: {
    padding: '7@s',
  },
  titleText: {
    fontFamily: fonts.avenir_light,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '17@s',
    letterSpacing: '0.2@s',
    color: colors.blackColor,
    textAlign: 'center',
    marginBottom: -25,
    alignItems: 'center',
    width: '100%',
  }
});

export default BottomSheetComponent;
