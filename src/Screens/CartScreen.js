import React from 'react';
import {View, Text, FlatList, ScrollView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useTranslation} from 'react-i18next';

import {
  BackArrowHeader,
  CategoriesTitleHeader,
  MyCartComponent,
  PromoCodeInput,
  GreenButton,
  RadioButtonComponent,
  OrderSummaryComponent,
  VerificationModal,
  BottomSheetComponent,
  DeliverAddressComponent,
  AddNewAddressForm,
  AddNewCreditCardForm,
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

const CartScreen = ({
  textValue,
  setTextValue,
  isModalVisible,
  toggleModal,
  refRBSheet,
  data,
  cardData,
  setCardData,
  setData,
  creditCardRBSheet,
  addAddressRBSheet,
  addCardetCardRBSheet,
  navigate,
  delivery, 
  setDelivery,
  paymentMethod,
  setPaymentMethod,
}) => {
  const {t} = useTranslation();
  const renderItem = ({item, index,}) => (
    <MyCartComponent image={item.image} index={index} length={DATA?.length} />
  );
  return (
    <View style={styles.container}>
      <ScrollView nestedScrollEnabled={true}>
        <BackArrowHeader arrow={false} title={t('cart_text')} borderBottomWidth={0} />
        <CategoriesTitleHeader title={t('my_cart')} />
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={{paddingBottom: 0}}
        />
        <CategoriesTitleHeader title={t('promo_code')} />
        <PromoCodeInput textValue={textValue} setTextValue={setTextValue} />
        <View style={styles.buttonWrapper}>
          <GreenButton
           onPress={() => navigate("emptyCart")}
            backgroundColor={colors.inputBorderColor}
            color={colors.lightBlackColor}
            title={t('apply_code')}
            buttonHeight={50}
          />
        </View>
        <CategoriesTitleHeader title={t('delivery_pickup_option')} />
        <RadioButtonComponent
          onPress={() => refRBSheet?.current?.open()}
          title={t('delivery_text')}
          secondTitle={t('pick_up')}
          description="Select delivery address"
          secondDescription="Pick up yourself at:"
          thirdDescription="11/F, 52 Hung To Road, Kwun Tong, Hong Kong"
          radioButtonStatus={delivery}
          setRadioButtonStatus={setDelivery}
        />
        <CategoriesTitleHeader title={t('payment_method')} />
        <RadioButtonComponent
          onPress={() => creditCardRBSheet.current.open()}
          title={t('cradit_card_text')}
          secondTitle={t('bank_transfer')}
          description="Select card"
          secondDescription="Bank account info available after checkout"
          radioButtonStatus={paymentMethod}
          setRadioButtonStatus={setPaymentMethod}
        />
        <CategoriesTitleHeader title={t('order_summary')} />
        <OrderSummaryComponent />
        <View style={styles.placeOrderContainer}>
          <Text style={styles.orderPlaceText}>
            <Text style={styles.confidenceText}>{t('order_confidence')} </Text>
            {t('all_orders')}
            <Text style={styles.fullRefundText}> {t('full_refund')} </Text>
            {t('before_production')}
          </Text>
          <GreenButton
            onPress={toggleModal}
            backgroundColor={colors.blackColor}
            buttonHeight={57}
            title={t('place_order')}
          />
          <VerificationModal
            title={t('pay_bank_transfer')}
            description={t('curabitur_aliquet')}
            isModalVisible={isModalVisible}
            toggleModal={toggleModal}
          />
        </View>
      </ScrollView>
      <BottomSheetComponent
        refRBSheet={refRBSheet}
        childern={
          <DeliverAddressComponent
            addNew={t('new_address')}
            setData={setData}
            data={data}
            onPress={() => {
              refRBSheet.current.close();
              addAddressRBSheet.current.open();
            }}
          />
        }
        title={t('deviver_to')}
        note={false}
      />
      <BottomSheetComponent
        childern={
          <DeliverAddressComponent
            addNew={t('new_credit_card')}
            data={cardData}
            setData={setCardData}
            onPress={() => {
              creditCardRBSheet.current.close();
              addCardetCardRBSheet.current.open();
            }}
          />
        }
        title={t('credit_cards')}
        note={false}
        refRBSheet={creditCardRBSheet}
      />
      <BottomSheetComponent
        childern={<AddNewAddressForm />}
        title={t('add_new_address')}
        note={false}
        refRBSheet={addAddressRBSheet}
      />
      <BottomSheetComponent
        childern={<AddNewCreditCardForm />}
        title={t('add_new_cardet_card')}
        note={false}
        refRBSheet={addCardetCardRBSheet}
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteColor,
  },
  buttonWrapper: {
    marginHorizontal: '12@s',
    marginVertical: '15@s',
  },
  placeOrderContainer: {
    paddingBottom: '80@s',
    backgroundColor: colors.offWhiteColor,
    padding: '15@s',
    marginTop: '10@s',
  },
  orderPlaceText: {
    fontFamily: fonts.avenir_light,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '16@s',
    letterSpacing: '0.5@s',
    color: colors.lightBlackColor,
    marginBottom: '25@s',
    marginTop: '5@s',
  },
  confidenceText: {
    fontFamily: fonts.avenir_bold,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '16@s',
    letterSpacing: '0.5@s',
    color: colors.lightBlackColor,
  },
  fullRefundText: {
    color: colors.greenColor,
  },
});

export default CartScreen;
