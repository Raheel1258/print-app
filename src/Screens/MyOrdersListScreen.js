import React from 'react';
import { Text, View, FlatList, ScrollView } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';
import { handleOrderStatus } from '../Utils/helperFunctions';

import {
  BackArrowHeader,
  MyCartComponent,
  CategoriesTitleHeader,
  OrderDetailsComponent,
  UploadFileComponent
} from '../Components';
import PremiumBusinessCard from '../Assests/Images/Premium-business-card.png';
import SecondBusinessCard from '../Assests/Images/Premium-business-card-two.png';
import { colors, fonts } from '../Utils/theme';

// const DATA = [
//   {
//     "image": [
//       "https://print-print-app.s3.amazonaws.com/1.jpg",
//       "https://print-print-app.s3.ap-south-1.amazonaws.com/Business_Card_Mockup_038.jpg"

//     ],
//     "title": "BUSINESS_CARD",
//     "category": {
//       "productType": "BizCard-Premium",
//       "name": "Premium (Thick) Business Card",
//       "pricePerHunderd": "68",
//       "description": "Thick, smooth and premium. The Premium Business Card is a popular choice for professionals.",
//       "paperType": "Woodfree Card(350g)",
//       "leadTime": "2-3 business days",
//       "colour": "CYMK",
//       "Sizes": "3 sizes"
//     },

//     "size": 
//       {
//         "name": "Standard",
//         "height": "90",
//         "width": "54",
//         "image": "https://print-print-app.s3.ap-south-1.amazonaws.com/standard.png"
//       },
    
//     "priceChart": {
//       "quantity": "100",
//       "unitPrice": "0.5"
//     },
//     "preview": true,
//     "designUrl": "string",
//     "remarks": "string",
//     "corner":
//     {
//       "cornerName": "Square",
//       "cornerDescription": "Traditional",
//       "image": "https://print-print-app.s3.ap-south-1.amazonaws.com/square-image.png",
//     },
//   },
  // {
  //   id: '2',
  //   image: SecondBusinessCard,
  // },
//];

const MyOrdersListScreen = ({ goBack, orderData,handleReceiptEmail, handlerSupportEmail, userToken }) => {
  const { t } = useTranslation();
  const renderItem = ({ item, index }) => (
    <MyCartComponent fontFamily={fonts.avenir_regular} image={item?.image ? item?.image : 'https://jubilantconsumer.com/wp-content/themes/jubilant/assets/img/product.png'} index={index} length={item?.length} item={item} />
  );
  return (
    <>
    {userToken ?
    <>
     <View style={styles.container}>
      <BackArrowHeader
        goBack={goBack}
        title={t('my_orders')}
        borderBottomWidth={15}
        arrow={false}
      />
      <ScrollView nestedScrollEnabled={true}>
        <View style={styles.orderRefContainer}>
          <Text style={styles.orderRefText}>{t('order_reference')}</Text>
          <Text style={styles.orderRefText}>{orderData?.orderRefrence && orderData?.orderRefrence}</Text>
        </View>
        <Text style={styles.orderCompleted}>{handleOrderStatus(orderData?.status, t)}</Text>
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
          method={orderData?.deliveryMethod}
          address={orderData?.deliveryMethod === "Delivery" ? orderData?.deliveryAddress : "NA" }
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
          payment={orderData?.paymentMethod}
          discountAmount = {`(HK$${Math.round(orderData?.discount)})`}
        />
        <CategoriesTitleHeader title={t('order_support')} />
        <UploadFileComponent onPress={()=>handleReceiptEmail(orderData?.orderRefrence)} width={300} title={t('email_receipt')} />
        <UploadFileComponent onPress={()=>handlerSupportEmail(orderData?.orderRefrence)} width={300} title={t('contact_support')} />
        <View style={styles.borderBottom} />
      </ScrollView>
    </View>   
    </>:<View style={styles.noProduct}><Text>No order Detail</Text></View>
    }
    
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
    lineHeight: '14@s',
  letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.blackColor,
    marginRight: '5@s',
  },
  orderCompleted: {
    fontFamily: fonts.avenir_bold,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '13@s',
  letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.greenColor,
    paddingHorizontal: '20@s',
    marginTop: '5@s',
  },
  borderBottom: {
    borderTopWidth: 30,
    borderTopColor: colors.offWhiteColor,
    paddingBottom: '50@s'
  },
  noProduct: {
    fontFamily: fonts.avenir_light,
    fontSize: '12@s',
    fontStyle: 'normal',
    fontWeight: '600',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.blackColor
  },
});

export default MyOrdersListScreen;
