import React, { useState, useRef, useEffect, useCallback } from 'react';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { t } from 'i18next';
import { useDispatch, useSelector } from 'react-redux';
import Toast from 'react-native-toast-message';

import { getDate } from '../Utils/helperFunctions';
import Storage from '../Utils/Storage';
import {
  getCartData, PromoCodeVerifed,
  deleteProduct,
  placeOrderOffline,
  getUserDetailForPlacingOrder,
  getAllCards,
  paymentWithSaveCard,
  makeCardPrimaryForCart,
  getPrimaryAddress,
  getPrimaryCards
} from '../store/actions/cartAction';
import { makeAddressPrimary } from '../store/actions/userPersonalDetailAction'

import MasterCard from '../Assests/Svgs/MasterCard';
import VisaCard from '../Assests/Svgs/VisaCard';
import CartScreen from '../Screens/CartScreen';
import { colors } from '../Utils/theme';

const CartContainer = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  const addAddressRBSheet = useRef();
  const addCardetCardRBSheet = useRef();
  const creditCardRBSheet = useRef();
  const authRBSheet = useRef();
  const refRBSheet = useRef();

  const [animationForCard, setAnimationForCard] = useState(false);
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [deliveryCost, setDeliveryCost] = useState(0);
  const [validPromoCode, setValidPromoCode] = useState(false);
  const [promoCodeAnimation, setPromoCodeAnimation] = useState(false);
  const [textValue, setTextValue] = useState('');
  const [delivery, setDelivery] = useState(true);
  const [deliveryMethod, setDeliveryMethod] = useState("Delivery");
  const [deliveryUserAddress, setDeliveryUserAddress] = useState("Select delivery address");
  const [animationForgettingAddress, setAnimationForgettingAddress] = useState(false)
  const [focused, setFocused] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState(true);
  const [userCardData, setUserCardData] = useState("Select card");
  const [paymentMethodName, setPaymentMethodName] = useState("Credit Card");
  const [isModalVisible, setModalVisible] = useState(false);
  const [isPromoCodeModaVidible, setIsPromoCodeModaVidible] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [animation, setAnimation] = useState(true);
  const [placeOrderAnimation, setPlaceOrderAnimation] = useState(false);
  const [promoCodeAppliedStatus, setPromoCodeAppliedStatus] = useState(false);
  const [promoCodeAppliedId, setPromoCodeAppliedId] = useState("");
  const [promoCodeType, setPromoCodeType] = useState("");
  const [discountInPercentage, setDiscountInPercentage] = useState(0);
  const cartItem = useSelector(state => state?.cartReducer?.cartDetail);
  const userDetailData = useSelector(state => state?.cartReducer?.userDetail);
  const promocodeDiscount = useSelector(state => state?.cartReducer?.promoCode);
  const userCardsDetails = useSelector(state => state?.cartReducer?.userCardsData);

  const [data, setData] = useState(userDetailData?.addresses);
  const [cardData, setCardData] = useState(userCardsDetails);
  const primaryAddress = userDetailData?.addresses?.filter((item) => item?.primary == true);
  const [renderScreen, setRenderScreen] = useState(false);
  // const [cardData, setCardData] = useState([
  //   {
  //     id: '1',
  //     title: 'Mastercard (9238)',
  //     addressLineOne: 'Peter Leung',
  //     addressLineTwo: 'Exp: 09/23',
  //     children: <MasterCard />,
  //     selected: true
  //   },
  //   {
  //     id: '2',
  //     title: 'Visa (1628)',
  //     addressLineOne: 'Peter Leung',
  //     addressLineTwo: 'Exp: 09/23',
  //     children: <VisaCard />,
  //     selected: false
  //   },
  // ]);

  // useEffect(() => {
  //   Storage.retrieveData('token').then((token) => {
  //     setUserToken(token);

  //   })

  // }, [isFocused])

  useEffect(() => {
    isFocused && Storage.retrieveData('token').then((token) => {
      setUserToken(token);
      !token && authRBSheet.current.open()
      if (token) {
        dispatch(getCartData(setAnimation, setTextValue))
        dispatch(getPrimaryAddress(setAnimation, setDeliveryUserAddress))
        dispatch(getPrimaryCards(setAnimation, setUserCardData))
      } else {
        setAnimation(false);
      }
      // token ?  : setAnimation(false);
    });
  }, [isFocused])



  useEffect(() => {
    handleTotalAmount();
  }, [cartItem, promocodeDiscount, deliveryMethod, isFocused])

  const navigate = (routeName, data = {}) => {
    navigation.navigate(routeName, data)
  }

  const handleChange = (value) => {
    setTextValue(value);
    setValidPromoCode(false)
  };

  const goBack = () => {
    navigation.goBack();
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const renderScreenForAddress = () => {
    dispatch(getPrimaryAddress(setAnimation, setDeliveryUserAddress))
  }

  const renderScreenForCard = () => {
    dispatch(getPrimaryCards(setAnimation, setUserCardData))
  }

  const promoCodeToggleModal = () => {
    setIsPromoCodeModaVidible(!isPromoCodeModaVidible);
  }

  const handlePromoCodeValidation = () => {
    dispatch(PromoCodeVerifed(setPromoCodeAnimation, textValue, promoCodeToggleModal, setValidPromoCode, setPromoCodeAppliedStatus, setPromoCodeAppliedId, setPromoCodeType, setDiscountInPercentage));
  }

  const handleEditProduct = (item) => {
    navigate('editedSingleProduct', { productId: item?.productId, cartProductId: item?._id, productCategory: item?.title, cartItem: item })
  }

  const handleRemoveProduct = (_id) => {
    dispatch(deleteProduct(setAnimation, _id, navigate));
  }

  const handleAddressForBottomSheet = () => {
    refRBSheet?.current?.open();
    dispatch(getUserDetailForPlacingOrder(setData, setAnimationForgettingAddress));
  }

  const handleCardsForBottomSheet = () => {
    creditCardRBSheet?.current?.open();
    dispatch(getAllCards(setAnimationForgettingAddress, setCardData))
  }

  const handleSelectedPrimary = (id) => {
    dispatch(makeAddressPrimary(id, true));
  }

  const handleSelectedPrimaryCard = (id) => {
    const getLastPrimary = userCardsDetails?.filter(item => item.metadata.primary === "true");
    dispatch(makeCardPrimaryForCart(id, getLastPrimary[0].id))
  }



  const handlePayment = () => {
    // genToken();
    var date = getDate();
    const orderObj = {
      products: cartItem,
      orderDate: date,
      deliveryMethod: deliveryMethod,
      deliveryAddress: {
        fullName: deliveryUserAddress?.fullName,
        companyName: deliveryUserAddress?.companyName,
        area: deliveryUserAddress?.area,
        district: deliveryUserAddress?.district,
        contactNumber: deliveryUserAddress?.contactNumber,
        addressLine1: deliveryUserAddress?.addressLine1,
        addressLine2: deliveryUserAddress?.addressLine2,
        cityCountry: deliveryUserAddress?.cityCountry,
        // firstName: userDetailData?.firstName,
        // lastName: userDetailData?.lastName,
        // phone: userDetailData?.phone,
        // email: userDetailData?.email,
        // addressLine1: deliveryMethod == 'Delivery' ? deliveryUserAddress : "11/F, 52 Hung To Road, Kwun Tong, Hong Kong"
      },
      deliveryCost: deliveryMethod == "Delivery" ? deliveryCost : 0,
      paymentMethod: paymentMethodName,
      subTotal: subTotal,
      discount: (promocodeDiscount != undefined && promoCodeType == "PERCENTAGE") ? Math.round(discountInPercentage) : (promocodeDiscount != undefined && promoCodeType == "DELIVERY_CHARGES") ? Math.round(deliveryCost) : (promocodeDiscount != undefined && promoCodeType == "AMOUNT") ? Math.round(promocodeDiscount) : 0,
      total: total >= 0 ? total : 0,
      status: "ORDER_RECIEVED",
      promoCodeApplied: promoCodeAppliedStatus,
      promoCodeId: promoCodeAppliedId
    }
    if (deliveryMethod == 'Delivery' && deliveryUserAddress == "Select delivery address") {
      Toast.show({
        type: 'error',
        text1: t('select_address'),
      });
    }
    else if (paymentMethodName == 'Credit Card' && userCardData == "Select card") {
      Toast.show({
        type: 'error',
        text1: t('select_card'),
      });
    }
    else {
      if (paymentMethodName == "Credit Card") {
        dispatch(paymentWithSaveCard(setPlaceOrderAnimation, { idCard: userCardData?.id, amount: total }, orderObj, navigate))
        // navigate('payment', { amount: total, orderObj: orderObj })
      } else dispatch(placeOrderOffline(setPlaceOrderAnimation, orderObj, navigate))
    }
  }

  const handleTotalAmount = () => {
    console.log("carts items for amount", cartItem);
    let deliveryCost = 0;
    let quantity = 0;
    let unitPrice = 0;
    let subTotal1 = 0;
    let totalPrice = 0;
    let amountInPercent = 0;
    cartItem && cartItem?.map((item) => {

      // quantity = item?.priceChart?.units;
      // unitPrice = item?.priceChart?.pricePerUnit;
      deliveryCost = Math.round(deliveryCost + item?.priceChart?.deliveryCost);
      subTotal1 = Math.round(subTotal1 + (item?.priceChart?.pricePerUnit * item?.priceChart?.units))
    });
    totalPrice = (subTotal1);
    if (promocodeDiscount !== '0' && promocodeDiscount != "" && deliveryMethod == "Delivery" && promoCodeType !== "") {
      console.log("case promocode and delivery")
      if (promoCodeType == "PERCENTAGE") {
        // totalPrice = parseFloat(totalPrice);
        amountInPercent = (parseFloat(promocodeDiscount / 100) * totalPrice);
        totalPrice = totalPrice - amountInPercent;
        totalPrice = parseFloat(totalPrice + deliveryCost);
        setTotal(totalPrice);
        setDiscountInPercentage(amountInPercent)
      } else if (promoCodeType == "DELIVERY_CHARGES") {
        totalPrice = parseFloat(totalPrice + deliveryCost);
        amountInPercent = deliveryCost;
        totalPrice = totalPrice - amountInPercent;
        setTotal(totalPrice);
        setDiscountInPercentage(amountInPercent)
      }
      else {
        totalPrice = totalPrice - parseFloat(promocodeDiscount);
        totalPrice = parseFloat(totalPrice + deliveryCost);
        setTotal(totalPrice);
        setDiscountInPercentage(amountInPercent)
      }
    } else if (deliveryMethod == "Delivery" && promocodeDiscount && promocodeDiscount == "0") {
      totalPrice = parseFloat(totalPrice + deliveryCost);
      setTotal(totalPrice)
    } else if (promocodeDiscount && promocodeDiscount != "0" && deliveryMethod !== "Delivery" && promoCodeType !== "") {
      if (promoCodeType == "PERCENTAGE") {
        amountInPercent = (parseFloat(promocodeDiscount / 100) * totalPrice);
        totalPrice = totalPrice - amountInPercent;
        setTotal(totalPrice);
        setDiscountInPercentage(amountInPercent);

      } else if (promoCodeType == "DELIVERY_CHARGES") {
        totalPrice = parseFloat(totalPrice + deliveryCost);
        amountInPercent = deliveryCost;
        totalPrice = totalPrice - amountInPercent;
        setTotal(totalPrice);
        setDiscountInPercentage(amountInPercent)
      }
      else {
        totalPrice = totalPrice - parseFloat(promocodeDiscount);
        setTotal(totalPrice)
      }

    }
    else {
      setTotal(totalPrice);
    }
    setDeliveryCost(deliveryCost);
    setSubTotal(subTotal1)
  }

  return (
    <View style={styles.container}>
      <CartScreen
        handleAddressForBottomSheet={handleAddressForBottomSheet}
        deliveryUserAddress={deliveryUserAddress}
        setDeliveryUserAddress={setDeliveryUserAddress}
        refRBSheet={refRBSheet}
        creditCardRBSheet={creditCardRBSheet}
        addAddressRBSheet={addAddressRBSheet}
        addCardetCardRBSheet={addCardetCardRBSheet}
        textValue={textValue}
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
        isPromoCodeModaVidible={isPromoCodeModaVidible}
        promoCodeToggleModal={promoCodeToggleModal}
        data={data}
        cardData={cardData}
        setCardData={setCardData}
        setData={setData}
        navigate={navigate}
        delivery={delivery}
        setDelivery={setDelivery}
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
        authRBSheet={authRBSheet}
        userToken={userToken}
        focused={focused}
        setFocused={setFocused}
        goBack={goBack}
        handlePayment={handlePayment}
        cartItem={cartItem}
        handlePromoCodeValidation={handlePromoCodeValidation}
        promoCodeAnimation={promoCodeAnimation}
        validPromoCode={validPromoCode}
        handleEditProduct={handleEditProduct}
        handleRemoveProduct={handleRemoveProduct}
        animation={animation}
        subTotal={subTotal}
        promocodeDiscount={promocodeDiscount}
        total={total}
        setPaymentMethodName={setPaymentMethodName}
        placeOrderAnimation={placeOrderAnimation}
        setDeliveryMethod={setDeliveryMethod}
        handleChange={handleChange}
        deliveryMethod={deliveryMethod}
        deliveryCost={deliveryCost}
        animationForgettingAddress={animationForgettingAddress}
        promoCodeType={promoCodeType}
        handleSelectedPrimary={handleSelectedPrimary}
        handleCardsForBottomSheet={handleCardsForBottomSheet}
        userCardData={userCardData}
        setUserCardData={setUserCardData}
        handleSelectedPrimaryCard={handleSelectedPrimaryCard}
        discountInPercentage={discountInPercentage}
        setRenderScreen={setRenderScreen}
        renderScreenForAddress={renderScreenForAddress}
        renderScreenForCard={renderScreenForCard}
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteColor,
  },
});

export default CartContainer;
