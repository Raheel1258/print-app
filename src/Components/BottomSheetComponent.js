import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import RBSheet from 'react-native-raw-bottom-sheet';

import {ArtworkGuidelines,FilePickerInput} from '../Components';
import CloseIcon from '../Assests/Svgs/CloseIcon';
import {colors} from '../Utils/theme';

const BottomSheetComponent = ({refRBSheet,title, childern}) => {
  return (
    <View>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          draggableIcon: {
            display: 'none',
          },
          container: {
            height: '93%',
            backgroundColor: colors.whiteColor,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            padding: 20,
          },
        }}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>{title}</Text>
          <TouchableOpacity onPress = {() => refRBSheet.current.close()} style={styles.iconWrapper}>
          <CloseIcon/>
          </TouchableOpacity>
        </View>
        {childern}
        <ArtworkGuidelines/>
      </RBSheet>
    </View>
  );
};

const styles = ScaledSheet.create({
  headerContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:'2@s',
    marginHorizontal:'5@s',
    marginBottom:'40@s'
  },
  headerTitle:{
      // fontFamily:Avenir LT Std,
      fontSize: '14@s',
      fontStyle: 'normal',
      fontWeight: '800',
      fontStyle: 'normal',
      lineHeight: '14@s',
      letterSpacing: '0.3@s',
      color: colors.blackColor,
  },
  iconWrapper:{
    padding:'7@s',
  }
});

export default BottomSheetComponent;
