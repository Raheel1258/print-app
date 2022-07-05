import React,{useState} from 'react';
import {Text, TouchableOpacity, FlatList, ScrollView, View, ActivityIndicator} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import {colors, fonts} from '../Utils/theme';
import DeliverAndCreditCard from './DeliverAndCreditCard';

const DeliverAddressComponent = ({onPress, data, addNew, setData, setShowDetail, animationForgettingAddress, handleSelectedPrimary}) => {
  const handleData = (id) => {
    setData((prev)=> {
      return prev?.map((x,i)=>{
        if(x?._id == id){
          setShowDetail(x);
        return {...prev[i], primary: true}
        }else{
          return {...prev[i], primary: false}
        }
      })
    })
  }

const renderItem = ({item}) => <DeliverAndCreditCard onPress={() => {handleData(item?._id), handleSelectedPrimary(item?._id)}} title={item?.fullName} companyName = {item?.companyName} addressLineOne={item.addressLine1} addressLineTwo={item?.addressLine2} children={item?.children} selected={item?.primary} />;

  return (
    
      <>
    {animationForgettingAddress ?
    <View style={styles.loaderContainer}>
    <ActivityIndicator size="small" color="#000" animating={true} />
  </View>
    : <ScrollView>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity style={styles.touchableText} onPress={onPress}>
        <Text style={styles.newAddressText}>{addNew}</Text>
      </TouchableOpacity>
    </ScrollView> }
    </>
  );
};

const styles = ScaledSheet.create({
  touchableText: {
    width: '50%',
    padding: '5@s',
  },
  newAddressText: {
    fontFamily: fonts.avenir_light,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '16@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.greenColor,
    marginTop: '2@s',
    marginLeft: '5@s',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default DeliverAddressComponent;
