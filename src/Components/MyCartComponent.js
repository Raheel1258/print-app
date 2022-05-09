import React from 'react';
import {View, Text, Image,TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import { colors,fonts } from '../Utils/theme';


const MyCartComponent = ({image, index, length, fontFamily=fonts.avenir_bold, edit, remove }) => {
  return (
    <View style={{...styles.container, borderBottomWidth : index + 1 === length ? 0 : 1 }}>
      <Image  transition={false} style={styles.cardImage} source={image} />
      <View>
        <Text numberOfLines={1} style={{...styles.cardTitle,fontFamily:fontFamily}}>Premium business name card</Text>
        <Text style={styles.cardTitle}>HK$ 85</Text>
        <View style={styles.quantityContainer}>
          <Text style={styles.quantityText}>Quantity:</Text>
          <Text style={styles.quantityText} numberOfLines={1}>100</Text>
        </View>
        <View style={styles.quantityContainer}>
          <Text style={styles.quantityText}>Size:</Text>
          <Text style={styles.quantityText} numberOfLines={1}>A4</Text>
        </View>
        <View style={styles.quantityContainer}>
          <Text style={styles.quantityText}>Paper type:</Text>
          <Text style={styles.paperTypeDes} numberOfLines={1}>Glossy Art card 140 gsm</Text>
        </View>
        <View style={styles.quantityContainer}>
          <Text style={styles.quantityText}>Folding: </Text>
          <Text style={styles.quantityText} numberOfLines={1}>Half fold</Text>
        </View>
     
        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.paddingWrapper}>
          <Text style={styles.editText}>{edit}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.paddingWrapper}>
          <Text style={styles.editText}>{remove}</Text>
          </TouchableOpacity>
        </View>
    
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container:{
    flexDirection:'row',
    marginHorizontal:'10@s',
    borderBottomColor:colors.innerBorderColor,
    borderBottomWidth:1,
    marginTop:'20@s',
  },
  quantityContainer:{
    flexDirection:'row',
    alignItems:'center',
  },
  cardImage:{
    width:'110@s',
    height:'80@s',
    borderRadius:'10@s',
    marginRight:'10@s'
  },
  cardTitle:{
    fontFamily: fonts.avenir_bold,
    fontSize: '14@s',
    fontStyle: 'normal',
    lineHeight: '20@s',
      letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.blackColor,
    width:'240@s'
  },
  OrderCardTitle:{
    fontFamily: fonts.avenir_regular,
    fontSize: '14@s',
    fontStyle: 'normal',
    lineHeight: '20@s',
      letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.blackColor,
  },
  quantityText:{
    fontFamily: fonts.avenir_light,
    fontSize: '11.5@s',
    fontStyle: 'normal',
    lineHeight: '16@s',
      letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.lightBlackColor,
    marginRight:'2@s',
  },
  paperTypeDes:{
    fontFamily: fonts.avenir_light,
    fontSize: '11.5@s',
    fontStyle: 'normal',
    lineHeight: '16@s',
      letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.lightBlackColor,
    width:'145@s',
  },
  editText:{
    fontFamily: fonts.avenir_light,
    fontSize: '11.5@s',
    fontStyle: 'normal',
    lineHeight: '16@s',
      letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.greenColor,
    marginRight:'20@s',
    marginTop:'5@s',
    marginBottom:'10@s'
    
  },
  paddingWrapper:{
    padding:'2@s'
  }
});

export default MyCartComponent;
