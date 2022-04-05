import React from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import {ImageBackArrowHeader, ImageSlider} from '../Components';
import {colors} from '../Utils/theme';


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];


const ProductsListingScreen = () => {
  const renderItem = ({ item }) => (
    <ImageSlider title={item.title} />
  );
  return (
    <View style={styles.container}>
      <ImageBackArrowHeader />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatlistContainer}
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteColor,
  },
  flatlistContainer:{
    paddingBottom: '80@s',
  }
});

export default ProductsListingScreen;
