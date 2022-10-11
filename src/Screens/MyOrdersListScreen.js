import React from 'react';
import { Text, View, FlatList, ScrollView } from 'react-native';

import { ScaledSheet } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next'

import {
  BackArrowHeader,
  MyCartComponent,
  CategoriesTitleHeader,
  OrderDetailsComponent,
  UploadFileComponent,
} from '../Components';

import { handleOrderStatus, getObjKey } from '../Utils/helperFunctions';
import { colors, fonts } from '../Utils/theme';
import { chi_eng } from '../Utils/mockData';


const MyOrdersListScreen = ({
  goBack,
  orderData,
  handleReceiptEmail,
  handlerSupportEmail,
  userToken,
}) => {
  const { t } = useTranslation();
  const renderItem = ({ item, index }) => (
    <MyCartComponent
      image={
        item?.image
          ? item?.image
          : 'https://jubilantconsumer.com/wp-content/themes/jubilant/assets/img/product.png'
      }
      index={index}
      length={item?.length}
      item={item}
    />
  );
  return (
    <>
      {userToken ? (
        <>
          <View style={styles.container}>
            <BackArrowHeader
              goBack={goBack}
              title={t('my_orders')}
              borderBottomWidth={15}
              arrow={false}
            />
            <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>
              <View style={styles.orderRefContainer}>
                <Text style={styles.orderRefText}>{t('order_reference')}</Text>
                <Text style={styles.orderRefText}>
                  {orderData?.orderRefrence && orderData?.orderRefrence}
                </Text>
              </View>
              <Text style={styles.orderCompleted}>
                {handleOrderStatus(orderData?.status, t)}
              </Text>
              <FlatList
                data={orderData?.products && orderData?.products}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={{ paddingBottom: 0 }}
              />
              <CategoriesTitleHeader title={t('order_details')} />
              <OrderDetailsComponent
                orderDate={t('order_date')}
                deliveryMethod={t('delivery_method')}
                deliveryAddress={t('delivery_address')}
                date={orderData?.orderDate}
                method={i18n.language == "en" ? orderData?.deliveryMethod : getObjKey(chi_eng, orderData?.deliveryMethod)}
                address={
                  orderData?.deliveryMethod === 'Delivery'
                    ? orderData?.deliveryAddress
                    : 'NA'
                }
              />
              <CategoriesTitleHeader title={t('payment_details')} />
              <OrderDetailsComponent
                orderDate={t('order_sub_total')}
                deliveryMethod={t('delivery')}
                discount={t('discount_text')}
                deliveryAddress={t('total')}
                paymentMethod={t('payment_method')}
                date={`HK$ ${Math.round(orderData?.subTotal)}`}
                method={`HK$ ${Math.round(orderData?.deliveryCost)}`}
                address={`HK$ ${Math.round(orderData?.total)}`}
                payment={i18n.language == "en" ? orderData?.paymentMethod : getObjKey(chi_eng, orderData?.paymentMethod)}
                discountAmount={`(HK$${Math.round(orderData?.discount)})`}
              />
              <CategoriesTitleHeader title={t('order_support')} />
              <UploadFileComponent
                onPress={() => handleReceiptEmail(orderData?.orderRefrence)}
                width={300}
                title={t('email_receipt')}
              />
              <UploadFileComponent
                onPress={() => handlerSupportEmail(orderData?.orderRefrence)}
                width={300}
                title={t('contact_support')}
              />
              <View style={styles.borderBottom} />
            </ScrollView>
          </View>
        </>
      ) : (
        <View style={styles.noProduct}>
          <Text>No order Detail</Text>
        </View>
      )}
    </>
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
    lineHeight: '18@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.blackColor,
    marginRight: '5@s',
  },
  orderCompleted: {
    fontFamily: fonts.avenir_bold,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '16@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.greenColor,
    paddingHorizontal: '20@s',
    marginTop: '5@s',
  },
  borderBottom: {
    borderTopWidth: 30,
    borderTopColor: colors.offWhiteColor,
    paddingBottom: '50@s',
  },
  noProduct: {
    fontFamily: fonts.avenir_light,
    fontSize: '12@s',
    fontStyle: 'normal',
    fontWeight: '600',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.blackColor,
  },
});

export default MyOrdersListScreen;
