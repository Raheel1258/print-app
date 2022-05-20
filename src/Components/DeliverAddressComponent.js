import React, {useState} from 'react';
import { Text, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import { colors, fonts } from '../Utils/theme';
import DeliverAndCreditCard from './DeliverAndCreditCard';

const DeliverAddressComponent = ({ onPress, data, addNew, setData , }) => {
  console.log("data inside the deliver component" , data);
  const [selected, setSelected] = useState(false);

  // const handleData = (id) => {
  //   console.log("id" , id);

  //   setData((prev) => {
  //     return prev.map((x) => {
  //       if (x?.id == id) {
  //         setSelected(true)
  //         // return { ...x, selected: true }
  //       } else {
  //         setSelected(false);
  //         // return { ...x, selected: false }
  //       }
  //     })
  //   })
  // }

  const renderItem = ({ item }) => {
    return( <>
    <DeliverAndCreditCard onPress={() => setSelected(true)}
      title={"asdasd"}
      addressLineOne={item?.addressLine1}
      addressLineTwo={item?.addressLine2}
      // children={item?.children}
      selected={selected} 
      />
      </>)
  }

  return (
    <ScrollView>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity style={styles.touchableText} onPress={onPress}>
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
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.greenColor,
    marginTop: '2@s',
    marginLeft: '5@s',
  },
});

export default DeliverAddressComponent;
