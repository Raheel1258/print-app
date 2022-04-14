import React from 'react';
import {Text, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import {colors, fonts} from '../Utils/theme';
import DeliverAndCreditCard from './DeliverAndCreditCard';

const DeliverAddressComponent = ({onPress, data, addNew, setData}) => {

  const handleData = (id) => {
    setData((prev)=> {
      return prev.map((x)=>{
        if(x?.id == id){
        return {...x, selected: true}
        }else{
          return {...x, selected: false}
        }
      })
    })
  }

const renderItem = ({item}) => <DeliverAndCreditCard onPress={() => handleData(item?.id)} title={item?.title} companyName = {item?.companyName} addressLineOne={item.addressLineOne} addressLineTwo={item.addressLineTwo} children={item?.children} selected={item?.selected}/>;

  return (
    <ScrollView>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity style={styles.touchableText} onPress = {onPress}>
        <Text style={styles.newAddressText}>{addNew}</Text>
      </TouchableOpacity>
    </ScrollView>
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
    letterSpacing: '0.4@s',
    textAlign: 'left',
    color: colors.greenColor,
    marginTop: '2@s',
    marginLeft: '5@s',
  },
});

export default DeliverAddressComponent;
