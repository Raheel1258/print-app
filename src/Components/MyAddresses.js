import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import MasterCard from '../Assests/Svgs/MasterCard';
import { colors, fonts } from '../Utils/theme';

const MyAddresses = ({ title, description, address, index=undefined , card }) => {
  console.log("index" , index);
  return (
    <View style={styles.container}>
      
      {address && address.map((item, index)=> {
        return <>
        <View style={styles.header}>
        <Text style={styles.headerTitle}>{title}</Text>
        <Text style={styles.headerPrimary}>{description}</Text>
      </View>
              <View>
          <Text style={styles.addressText}>Room D, 12/F, The Sunshine Tower,</Text>
          <Text style={styles.addressText}>Kowloon Tong, Kowloon, Hong Kong</Text>
        </View>
        <View style={styles.editableContainer}>
        <TouchableOpacity style={styles.paddingWrapper}><Text style={styles.editableText}>Edit</Text></TouchableOpacity>
        {!description && <TouchableOpacity style={styles.paddingWrapper}><Text style={styles.editableText}>Make Primary</Text></TouchableOpacity>}
        <TouchableOpacity style={styles.paddingWrapper}><Text style={styles.editableText}>Remove</Text></TouchableOpacity>
      </View>
       {index != address?.length-1 && <View style={styles.borderBottom}/> }

        </>
      })}
      {/* {address ?
        <>
        <View>
          <Text style={styles.addressText}>Room D, 12/F, The Sunshine Tower,</Text>
          <Text style={styles.addressText}>Kowloon Tong, Kowloon, Hong Kong</Text>
        </View>
        
        </>
        : */}
        {card &&
        <>
        <View style={styles.header}>
        <Text style={styles.headerTitle}>{title}</Text>
        <Text style={styles.headerPrimary}>{description}</Text>
      </View>
        <View>
          <View style={styles.cardPrivacyContainer}>
            <Text style={styles.cardNumText}>Card number:</Text>
            <Text style={styles.masterCardText}>Master (9881)</Text>
            <MasterCard />
          </View>
          <View style={styles.cardPrivacyContainer}>
            <Text style={styles.cardNumText}>Expiry:</Text>
            <Text style={styles.cardNumText}>12 / 25</Text>
          </View>
          <View style={styles.cardPrivacyContainer}>
            <Text style={styles.cardNumText}>CVV:</Text>
            <Text style={styles.cardNumText}>***</Text>
          </View>
          <View style={styles.editableContainer}>
        <TouchableOpacity style={styles.paddingWrapper}><Text style={styles.editableText}>Edit</Text></TouchableOpacity>
        {!description && <TouchableOpacity style={styles.paddingWrapper}><Text style={styles.editableText}>Make Primary</Text></TouchableOpacity>}
        <TouchableOpacity style={styles.paddingWrapper}><Text style={styles.editableText}>Remove</Text></TouchableOpacity>
      </View>
        </View>
        </>
        }

      {/* } */}

      {/* <View style={styles.editableContainer}>
        <TouchableOpacity style={styles.paddingWrapper}><Text style={styles.editableText}>Edit</Text></TouchableOpacity>
        {!description && <TouchableOpacity style={styles.paddingWrapper}><Text style={styles.editableText}>Make Primary</Text></TouchableOpacity>}
        <TouchableOpacity style={styles.paddingWrapper}><Text style={styles.editableText}>Remove</Text></TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    marginHorizontal: '15@s',
    marginTop: '20@s',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '7@s',
  },
  headerTitle: {
    fontFamily: fonts.avenir_bold,
    fontSize: '12@s',
    fontStyle: 'normal',
    fontStyle: 'normal',
    lineHeight: '12@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.blackColor,
  },
  headerPrimary: {
    fontFamily: fonts.avenir_bold,
    fontSize: '12@s',
    fontStyle: 'normal',
    fontStyle: 'normal',
    lineHeight: '12@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.lightBlackColor,
  },
  editableContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '60%',
    marginTop: '7@s'
  },
  addressText: {
    fontFamily: fonts.avenir_light,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '16@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.lightBlackColor,
  },
  editableText: {
    fontFamily: fonts.avenir_light,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '16@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.greenColor,
    marginLeft: '-2@s',
    marginRight: '5@s'
  },
  paddingWrapper: {
    padding: '4@s'
  },
  cardPrivacyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardNumText: {
    fontFamily: fonts.avenir_light,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '16@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.lightBlackColor,
    width: '110@s',
    marginTop: '2@s'
  },
  masterCardText: {
    fontFamily: fonts.avenir_light,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '16@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.lightBlackColor,
    marginTop: '2@s',
    marginRight: '7@s'
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: colors.inputBorderColor,
    marginHorizontal: '20@s',
    marginTop: '20@s',
  },
});

export default MyAddresses;
