import React from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import {colors} from '../Utils/theme';

const CardSizeComponent = ({dotColor,borderColor,cardWidth,cardHeight,textWidth,cardStandard,cardDimensions}) => {
  return (
    <View style={styles.container}>
      <View style={{...styles.cardContainer,width:cardWidth,height:cardHeight}}>
        <Text style={styles.cardTitle} numberOfLines={1}>Julia Halvorson</Text>
        <Text style={styles.cardDirector} numberOfLines={1}>creative Director</Text>
        <View style={styles.halvorsonPositionContainer}>
        <View style={styles.contentContainer}>
          <Text style={{...styles.cardStudio,width:textWidth}}>Halvorson Studio</Text>
          <View style={{...styles.cardDot,backgroundColor:dotColor}} />
        </View>
        <View style={{...styles.cardGradientBorder,backgroundColor:borderColor}} />
        </View>
      </View>
      <View style={styles.standardPositionContainer}>
      <Text style={styles.standardText} numberOfLines={1}>{cardStandard}</Text>
      <Text style={styles.dimensionsText} numberOfLines={1}>{cardDimensions}</Text>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.innerBorderColor,
    borderRadius: '10@s',
    marginLeft:'10@s',
    padding: '8@s',
    width:'160@s',
    height:'164@s',
    marginVertical:'6@s',
    position:'relative',
  },
  cardContainer: {
    borderWidth: 1.5,
    borderColor: colors.cardBorderColor,
    padding: '6@s',
    width:'117@s',
    height:'70@s',
    alignSelf:'center',
    marginTop:'7@s',
  },
  cardTitle: {
    // fontFamily: Avenir,
    fontSize: '9@s',
    fontStyle: 'normal',
    fontWeight: '800',
    lineHeight: '9@s',
    letterSpacing: '0.4@s',
    textAlign: 'left',
    color: colors.blackColor,
    marginTop:'2@s'
  },
  cardDirector: {
    // fontFamily: Avenir,
    fontSize: '7@s',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '7@s',
    letterSpacing: '0.4@s',
    textAlign: 'left',
    color: colors.blackColor,
    marginTop: '2@s',
  },
  contentContainer: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',  
  },
  halvorsonPositionContainer:{
    position:'absolute',
    bottom:'7@s',
    width:'100%',
    marginLeft:'5@s'
  },
  standardPositionContainer:{
    position:'absolute',
    bottom:'10@s',
    width:'100%',
    marginLeft:'10@s'
  },
  cardGradientBorder: {
    backgroundColor: colors.gradientGreenColor,
    width: '100%',
    height: '3@s',
    borderRadius: '30@s',
    marginTop:'2@s',
  },
  cardStudio: {
    // fontFamily: Avenir,
    fontSize: '7@s',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '8@s',
    letterSpacing: '0.4@s',
    textAlign: 'left',
    color: colors.blackColor,
  },
  cardDot: {
    backgroundColor: colors.darkGreenColor,
    width: '6@s',
    height: '6@s',
    borderRadius: '50@s', 
  },
  standardText:{
   // fontFamily: Avenir LT Std,
   fontSize: '12@s',
   fontStyle: 'normal',
   fontWeight: '800',
   lineHeight: '13@s',
   letterSpacing: '0.4@s',
   textAlign: 'left',
   color: colors.blackColor,
  },
  dimensionsText:{
   // fontFamily: Avenir,
   fontSize: '12@s',
   fontStyle: 'normal',
   fontWeight: '400',
   lineHeight: '14@s',
   letterSpacing: '0.4@s',
   textAlign: 'left',
   color: colors.lightBlackColor,
   marginTop:'4@s'
  }
});

export default CardSizeComponent;
