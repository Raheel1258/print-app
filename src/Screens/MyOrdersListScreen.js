import React from 'react';
import {Text, View, FlatList, ScrollView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useTranslation} from 'react-i18next';

import {
  BackArrowHeader,
  MyCartComponent,
  CategoriesTitleHeader,
  OrderDetailsComponent,
  UploadFileComponent
} from '../Components';
import PremiumBusinessCard from '../Assests/Images/Premium-business-card.png';
import SecondBusinessCard from '../Assests/Images/Premium-business-card-two.png';
import {colors, fonts} from '../Utils/theme';

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

const MyOrdersListScreen = ({goBack}) => {
  const {t} = useTranslation();
  const renderItem = ({item, index}) => (
    <MyCartComponent image={item.image} index={index} length={DATA?.length} />
  );
  return (
    <View style={styles.container}>
        <BackArrowHeader
        goBack={goBack}
          title={t('my_orders')}
          borderBottomWidth={15}
          arrow={false}
          />
          <ScrollView nestedScrollEnabled={true}>
        <View style={styles.orderRefContainer}>
          <Text style={styles.orderRefText}>Order reference:</Text>
          <Text style={styles.orderRefText}>RHF39284-23</Text>
        </View>
        <Text style={styles.orderCompleted}>Order completed</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={{paddingBottom: 0}}
        />
        <CategoriesTitleHeader title={t('order_details')} />
        <OrderDetailsComponent 
        orderDate={t('order_date')}
        deliveryMethod={t('delivery_method')}
        deliveryAddress={t('delivery_address')}
        date="22/4/2022"
        method="Courier"
        address="
        [Full name], [Company Name]
        [Address Line 1],[Address Line 2]
        [Area], [District], [City / Country]
        "
        />
        <CategoriesTitleHeader title={t('payment_details')} />
        <OrderDetailsComponent 
        orderDate={t('order_sub_total')}
        deliveryMethod={t('delivery')}
        deliveryAddress={t('total')}
        paymentMethod={t('payment_method')}
        date="HK$ 590"
        method="HK$ 590"
        address="HK$ 590"
        payment="Credit Card / Debit Card"
        />
        <CategoriesTitleHeader title={t('order_support')} />
        <UploadFileComponent title={t('email_receipt')}/>
        <UploadFileComponent title={t('contact_support')}/>
        <View style={styles.borderBottom}/>
      </ScrollView>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteColor,
  },
  orderRefContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '20@s',
    paddingHorizontal: '20@s',
  },
  orderRefText: {
    fontFamily: fonts.avenir_bold,
    fontSize: '14@s',
    fontStyle: 'normal',
    lineHeight: '14@s',
    letterSpacing: '0.5@s',
    textAlign: 'left',
    color: colors.blackColor,
    marginRight: '5@s',
  },
  orderCompleted: {
    fontFamily: fonts.avenir_bold,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '13@s',
    letterSpacing: '0.5@s',
    textAlign: 'left',
    color: colors.greenColor,
    paddingHorizontal: '20@s',
    marginTop: '5@s',
  },
  borderBottom:{
    borderBottomWidth:20,
    borderBottomColor:colors.offWhiteColor
  }
});

export default MyOrdersListScreen;