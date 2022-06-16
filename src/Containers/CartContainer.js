import React, { useState, useRef, useEffect, useCallback } from 'react';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { getDate } from '../Utils/helperFunctions';
import Storage from '../Utils/Storage';
import { useDispatch, useSelector } from 'react-redux';
import { getCartData, PromoCodeVerifed, deleteProduct, placeOrderOffline, getUserDetailForPlacingOrder, getAllCards } from '../store/actions/cartAction';
import Toast from 'react-native-toast-message';

import MasterCard from '../Assests/Svgs/MasterCard';
import VisaCard from '../Assests/Svgs/VisaCard';
import CartScreen from '../Screens/CartScreen';
import { colors } from '../Utils/theme';
import { t } from 'i18next';

const CartContainer = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  const addAddressRBSheet = useRef();
  const addCardetCardRBSheet = useRef();
  const creditCardRBSheet = useRef();
  const authRBSheet = useRef();
  const refRBSheet = useRef();

  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [deliveryCost, setDeliveryCost] = useState(0);
  const [validPromoCode, setValidPromoCode] = useState(false);
  const [promoCodeAnimation, setPromoCodeAnimation] = useState(false);
  const [textValue, setTextValue] = useState('');
  const [delivery, setDelivery] = useState(true);
  const [deliveryMethod, setDeliveryMethod] = useState("Delivery");
  const [deliveryUserAddress, setDeliveryUserAddress] = useState("Select delivery address");
  const [userCardData, setUserCardData] = useState("Select card");
  const [animationForgettingAddress, setAnimationForgettingAddress] = useState(false)
  const [focused, setFocused] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState(true);
  const [paymentMethodName, setPaymentMethodName] = useState("Credit Card");
  const [isModalVisible, setModalVisible] = useState(false);
  const [isPromoCodeModaVidible, setIsPromoCodeModaVidible] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [animation, setAnimation] = useState(false);
  const [placeOrderAnimation, setPlaceOrderAnimation] = useState(false);
  const [promoCodeAppliedStatus , setPromoCodeAppliedStatus] = useState(false);
  const [promoCodeAppliedId , setPromoCodeAppliedId] = useState("");
  const cartItem = useSelector(state => state?.cartReducer?.cartDetail);
  const userDetailData = useSelector(state => state?.cartReducer?.userDetail);
  const promocodeDiscount = useSelector(state => state?.cartReducer?.promoCode);
  const userCardsDetails = useSelector(state => state?.cartReducer?.userCardsData);


  const [data, setData] = useState(userDetailData?.addresses);
  const [cardData, setCardData] = useState(userCardsDetails);

  console.log("data into card  container" , userCardsDetails);
  console.log("data into card satet state state container" , cardData);
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
      token && dispatch(getCartData(setAnimation, setTextValue));
    });
  }, [isFocused])

  useEffect(() => {
  }, [authRBSheet]);

  useEffect(() => {
    handleTotalAmount();
  }, [cartItem, promocodeDiscount, deliveryMethod])

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

  const promoCodeToggleModal = () => {
    setIsPromoCodeModaVidible(!isPromoCodeModaVidible);
  }

  const handlePromoCodeValidation =() =>{
    dispatch(PromoCodeVerifed(setPromoCodeAnimation, textValue, promoCodeToggleModal, setValidPromoCode, setPromoCodeAppliedStatus, setPromoCodeAppliedId));
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

  const handlePayment = () => {
    // genToken();
    var date = getDate();
    const orderObj = {
      products: cartItem,
      orderDate: date,
      deliveryMethod: deliveryMethod,
      deliveryAddress: {
        firstName: userDetailData?.firstName,
        lastName: userDetailData?.lastName,
        phone: userDetailData?.phone,
        email: userDetailData?.email,
        addressLine1: deliveryMethod == 'Delivery' ? deliveryUserAddress : "11/F, 52 Hung To Road, Kwun Tong, Hong Kong"
      },
      deliveryCost: deliveryMethod == "Delivery" ? deliveryCost : 0,
      paymentMethod: paymentMethodName,
      subTotal: subTotal,
      discount: promocodeDiscount != undefined ? parseInt(promocodeDiscount) : 0,
      total: total,
      status: "ORDER_RECIEVED",
      promoCodeApplied:promoCodeAppliedStatus,
      promoCodeId: promoCodeAppliedId
    }
    if (deliveryMethod == 'Delivery' && deliveryUserAddress == "Select delivery address") {
      Toast.show({
        type: 'error',
        text1: t('select_address'),
      });
    } else {
      if (paymentMethodName == "Credit Card") {
        navigate('payment', { amount: total, orderObj: orderObj })
      } else dispatch(placeOrderOffline(setPlaceOrderAnimation, orderObj, navigate))
    }
  }

  const handleTotalAmount = () => {
    let deliveryCost = 0;
    let quantity = 0;
    let unitPrice = 0;
    let subTotal1 = 0;
    let totalPrice = 0;
    cartItem && cartItem?.map((item) => {
      quantity = item?.priceChart?.units;
      unitPrice = item?.priceChart?.pricePerUnit;
      deliveryCost = parseFloat(deliveryCost + item?.priceChart?.deliveryCost);
      subTotal1 = parseFloat(quantity * unitPrice);
      totalPrice = parseFloat(subTotal1);
    });
    if(promocodeDiscount !=='0' && promocodeDiscount != "" && deliveryMethod == "Delivery"){
      console.log(1);
      totalPrice = parseFloat(totalPrice + deliveryCost);
      totalPrice = totalPrice - parseFloat(promocodeDiscount);
      setTotal(totalPrice);
    }else if(deliveryMethod == "Delivery" && promocodeDiscount && promocodeDiscount == "0"){
      console.log(2);
      totalPrice = parseFloat(totalPrice + deliveryCost);
      setTotal(totalPrice)
    }else if(promocodeDiscount && promocodeDiscount != "0" && deliveryMethod !== "Delivery"){
      console.log(3);
      totalPrice = totalPrice - parseFloat(promocodeDiscount);
      setTotal(totalPrice)
    }
    else {
      console.log(4);
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
        handleCardsForBottomSheet={handleCardsForBottomSheet}
        userCardData={userCardData} 
        setUserCardData={setUserCardData}
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
