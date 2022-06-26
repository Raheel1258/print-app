import React from 'react';
import { View, Text, FlatList, ScrollView, ActivityIndicator, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScaledSheet } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';
import { EmptyCartContainer } from '../Containers';
import GreenCheckIcon from '../Assests/Svgs/GreenCheckIcon';

import {
  BackArrowHeader,
  CategoriesTitleHeader,
  MyCartComponent,
  GreenButton,
  RadioButtonComponent,
  OrderSummaryComponent,
  VerificationModal,
  BottomSheetComponent,
  DeliverAddressComponent,
  AddNewAddressForm,
  AddNewCreditCardForm,
} from '../Components';
import AuthenticationLogo from '../Assests/Svgs/AuthenticationLogo';
import PremiumBusinessCard from '../Assests/Images/Premium-business-card.png';
import SecondBusinessCard from '../Assests/Images/Premium-business-card-two.png';
import { colors, fonts } from '../Utils/theme';
import { NavigationContainer } from '@react-navigation/native';

const DATA = [
  {
    id: '1',
    image: PremiumBusinessCard,
    edit: 'Edit',
    remove: 'Remove',
  },
  {
    id: '2',
    image: SecondBusinessCard,
    edit: 'Edit',
    remove: 'Remove',
  },
];

const CartScreen = ({
  deliveryUserAddress,
  setDeliveryUserAddress,
  handleChange,
  total,
  textValue,
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
  authRBSheet,
  focused,
  setFocused,
  goBack,
  handlePayment,
  cartItem,
  isPromoCodeModaVidible,
  promoCodeToggleModal,
  handlePromoCodeValidation,
  promoCodeAnimation,
  validPromoCode,
  handleEditProduct,
  handleRemoveProduct,
  animation,
  subTotal,
  promocodeDiscount,
  setPaymentMethodName,
  placeOrderAnimation,
  setDeliveryMethod,
  deliveryMethod,
  deliveryCost,
  handleAddressForBottomSheet,
  animationForgettingAddress,
  userToken
}) => {

  const { t } = useTranslation();
  const navigation = useNavigation();
  const renderItem = ({ item, index }) => (
    <MyCartComponent
      image={item?.image}
      edit={true}
      remove={true}
      index={index}
      length={cartItem?.length}
      item={item}
      navigate={navigate}
      handleEditProduct={handleEditProduct}
      handleRemoveProduct={handleRemoveProduct}
    />
  );
  return (
    <>
      {!animation ? 
        <View style={styles.container}>
          {(cartItem?.length > 0) ? <ScrollView nestedScrollEnabled={true}>
            <BackArrowHeader
              arrow={false}
              title={t('cart_text')}
              borderBottomWidth={0}
              goBack={goBack}
            />
            <CategoriesTitleHeader title={t('my_cart')} />
            <FlatList
              data={cartItem && cartItem}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              contentContainerStyle={{ paddingBottom: 0 }}
            />
            <CategoriesTitleHeader title={t('promo_code')} />

            {/* PromoCOde */}
            <View style={styles.promoCode}>
              <Text style={styles.textInputTitle}>{t('add_promo_code')}</Text>
              <View style={styles.textInputContainer}>
                <TextInput
                  style={styles.textInput}
                  // value={textValue}
                  keyboardType="default"
                  autoCapitalize="none"
                  onChangeText={(text) => handleChange(text)}
                />
                <View>{(promocodeDiscount != "0" && textValue !== '' && validPromoCode == true) && <GreenCheckIcon />}</View>
              </View>

            </View>
            <View style={styles.buttonWrapper}>
              <GreenButton
                onPress={() => handlePromoCodeValidation()}
                backgroundColor={colors.inputBorderColor}
                color={colors.lightBlackColor}
                title={t('apply_code')}
                buttonHeight={50}
                animation={promoCodeAnimation}
              />
            </View>
            <CategoriesTitleHeader title={t('delivery_pickup_option')} />
            <RadioButtonComponent
              onPress={() => handleAddressForBottomSheet()}
              title={t('delivery_text')}
              secondTitle={t('pick_up')}
              description={deliveryUserAddress}
              secondDescription="Pick up yourself at:"
              thirdDescription="11/F, 52 Hung To Road, Kwun Tong, Hong Kong"
              radioButtonStatus={delivery}
              setRadioButtonStatus={setDelivery}
              handleCheckedOne={() => setDeliveryMethod('Delivery')}
              handleCheckedTwo={() => setDeliveryMethod('Self pickup')}
            />
            <CategoriesTitleHeader title={t('payment_method')} />
            <RadioButtonComponent
              // onPress={() => creditCardRBSheet.current.open()}
              toggleModal={toggleModal}
              title={t('cradit_card_text')}
              description="Select card"
              secondTitle={t('bank_transfer')}
              secondDescription={t("bank_detail")}
              radioButtonStatus={paymentMethod}
              setRadioButtonStatus={setPaymentMethod}
              paymentMethodName={setPaymentMethodName}
              handleCheckedOne={() => setPaymentMethodName('Credit Card')}
              handleCheckedTwo={() => setPaymentMethodName('Bank Tarnsfer')}
            />
            <CategoriesTitleHeader title={t('order_summary')} />
            <OrderSummaryComponent subTotal={subTotal} promocodeDiscount={promocodeDiscount} total={total} deliveryMethod={deliveryMethod} deliveryCost={deliveryCost} />
            <View style={styles.placeOrderContainer}>
              <Text style={styles.orderPlaceText}>
                <Text style={styles.confidenceText}>{t('order_confidence')} </Text>
                {t('all_orders')}
                <Text style={styles.fullRefundText}> {t('full_refund')} </Text>
                {t('before_production')}
              </Text>
              <GreenButton
                // onPress={() => navigate('orderReceived')}
                onPress={() => handlePayment()}
                backgroundColor={colors.blackColor}
                buttonHeight={57}
                title={t('place_order')}
                animation={placeOrderAnimation}

              />
              <VerificationModal
                title={t('pay_bank_transfer')}
                description={t('bank_transfer_description')}
                isModalVisible={isModalVisible}
                toggleModal={toggleModal}
              />

              <VerificationModal
                title={t('invalid_promocode')}
                description={t('invalid_promoCode_message')}
                isModalVisible={isPromoCodeModaVidible}
                toggleModal={promoCodeToggleModal}
              />
            </View>
          </ScrollView> : <>
            <EmptyCartContainer />
          </>
          }

          <BottomSheetComponent
            childern={
              <DeliverAddressComponent
                addNew={t('new_address')}
                setData={setData}
                data={data}
                animationForgettingAddress={animationForgettingAddress}
                setShowDetail={setDeliveryUserAddress}
                onPress={() => {
                  refRBSheet.current.close();
                  addAddressRBSheet.current.open();
                }}
              />
            }
            title={t('deviver_to')}
            note={false}
            refRBSheet={refRBSheet}
          />
          <BottomSheetComponent
            childern={
              <DeliverAddressComponent
                addNew={t('new_credit_card')}
                data={cardData}
                setData={setCardData}
                setShowDetail={setDeliveryUserAddress}
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
          <BottomSheetComponent
            childern={
              <>
                <View style={styles.logoWrapper}>
                  <AuthenticationLogo />
                </View>
                <View style={styles.signinButtonWrapper}>
                  <GreenButton
                    backgroundColor={
                      focused ? colors.greenColor : colors.whiteColor
                    }
                    color={focused ? colors.whiteColor : colors.greenColor}
                    borderWidth={2}
                    title={t('signup_text')}
                    onPress={() => {
                      authRBSheet.current.close();
                      navigate('auth', { next: 'signup' });
                      setFocused(true);
                    }}
                  />
                </View>
                <View style={styles.signinButtonWrapper}>
                  <GreenButton
                    title={t('sheet_login_in')}
                    backgroundColor={
                      focused ? colors.whiteColor : colors.greenColor
                    }
                    color={focused ? colors.greenColor : colors.whiteColor}
                    borderWidth={2}
                    onPress={() => {
                      authRBSheet.current.close();
                      navigate('auth', { next: 'signin' });
                      setFocused(false);
                    }}
                  />
                </View>
              </>
            }
            languageTitle={t('Signup_today')}
            // note={false}
            refRBSheet={authRBSheet}
            height={420}
            // onClose={false}
          />

        </View>
        : <View style={styles.loaderContainer}>
          <ActivityIndicator size="small" color="#000" animating={true} />
        </View>}
    </>
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
    letterSpacing: '0.2@s',
    color: colors.lightBlackColor,
    marginBottom: '25@s',
    marginTop: '5@s',
  },
  confidenceText: {
    fontFamily: fonts.avenir_bold,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '16@s',
    letterSpacing: '0.2@s',
    color: colors.lightBlackColor,
  },
  fullRefundText: {
    color: colors.greenColor,
  },
  logoWrapper: {
    alignItems: 'center',
    marginVertical: '15@s',
    marginBottom: '25@s'
  },
  signinButtonWrapper: {
    marginTop: '10@s',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputTitle: {
    fontFamily: fonts.avenir_regular,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '21@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.lightBlackColor,
    marginBottom: '-5@s',
  },
  textInput: {
    fontFamily: fonts.avenir_bold,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '14@s',
    color: colors.blackColor,
    letterSpacing: '0.2@s',
    paddingLeft: '0@s',
    paddingBottom: '7@s',
    textTransform: 'uppercase',
    width: '90%'
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.inputBorderColor,
  },
  promoCode: {
    marginTop: '10@s',
    marginHorizontal: '12@s'
  }
});

export default CartScreen;
