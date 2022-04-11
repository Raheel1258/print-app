import React from 'react';
import {View, Text, FlatList, ScrollView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useTranslation} from 'react-i18next';

import {
  BackArrowHeader,
  CategoriesTitleHeader,
  MyCartComponent,
} from '../Components';
import PremiumBusinessCard from '../Assests/Images/Premium-business-card.png';
import SecondBusinessCard from '../Assests/Images/Premium-business-card-two.png';
import {colors} from '../Utils/theme';


const DATA = [
  {
    id: '1',
    image: PremiumBusinessCard,
  },
  {
    id: '2',
    image: SecondBusinessCard,
  },
];

const CartScreen = () => {
  const {t} = useTranslation();
  const renderItem = ({item, index}) => (
    <MyCartComponent
      image={item.image}
      index={index}
      length={DATA?.length}
    />
  );
  return (
    <View style={styles.container}>
      <ScrollView nestedScrollEnabled={true}>
      <BackArrowHeader title={t('cart_text')} borderBottomWidth={0} />
      <CategoriesTitleHeader title={t('my_cart')} />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom:0 }}
      />
      <CategoriesTitleHeader title={t('promo_cord')} />
        
      </ScrollView>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteColor,
  },
});

export default CartScreen;
