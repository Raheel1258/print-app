import React, { useState, useRef, useEffect } from 'react';
import { View} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { getDate } from '../Utils/helperFunctions';
import Storage from '../Utils/Storage';
import { useDispatch, useSelector } from 'react-redux';
import { getCartData, PromoCodeVerifed, deleteProduct,placeOrderOffline,getUserDetailForPlacingOrder } from '../store/actions/cartAction';
import Toast from 'react-native-toast-message';

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

  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [deliveryCost , setDeliveryCost] = useState(0);
  const [validPromoCode, setValidPromoCode] = useState(false);
  const [promoCodeAnimation, setPromoCodeAnimation] = useState(false);
  const [textValue, setTextValue] = useState('');
  const [delivery, setDelivery] = useState(true);
  const [deliveryMethod, setDeliveryMethod] = useState("Delivery");
  const [deliveryUserAddress, setDeliveryUserAddress] = useState("Select delivery address");
  const [focused, setFocused] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState(true);
  const [paymentMethodName, setPaymentMethodName] = useState("Credit Card");
  const [isModalVisible, setModalVisible] = useState(false);
  const [isPromoCodeModaVidible, setIsPromoCodeModaVidible] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [animation, setAnimation] = useState(false);
  const [placeOrderAnimation , setPlaceOrderAnimation] = useState(false);
  const cartItem = useSelector(state => state?.cartReducer?.cartDetail);
  const userDetailData = useSelector(state => state?.cartReducer?.userDetail);
  const promocodeDiscount = useSelector(state => state?.cartReducer?.promoCode);

console.log("address" ,userDetailData );
  // const [data, setData] = useState([
  //   {
  //     id: '1',
  //     title: 'Karen Chan',
  //     addressLineOne: '23 Wings IIIB, 19 Tong Sun Street,',
  //     addressLineTwo: 'Ma On Shan, New Territories, Hong Kong',
  //     selected: true
  //   },
  //   {
  //     id: '2',
  //     title: '[Full Name]',
  //     companyName: '[Company Name]',
  //     addressLineOne: '[Address Line 1], [Address Line 2]',
  //     addressLineTwo: '[Area], [District], [City/Country]',
  //     selected: false
  //   },
  // ]);
  const [data, setData] = useState(userDetailData?.addresses);
console.log('data', userDetailData?.addresses);
  const [cardData, setCardData] = useState([
    {
      id: '1',
      title: 'Mastercard (9238)',
      addressLineOne: 'Peter Leung',
      addressLineTwo: 'Exp: 09/23',
      children: <MasterCard />,
      selected: true
    },
    {
      id: '2',
      title: 'Visa (1628)',
      addressLineOne: 'Peter Leung',
      addressLineTwo: 'Exp: 09/23',
      children: <VisaCard />,
      selected: false
    },
  ]);

  useEffect(() => {
    dispatch(getCartData(setAnimation, navigate));
  }, [isFocused])

  useEffect(() => {
    isFocused && Storage.retrieveData('token').then((token) => {
      setUserToken(token);
      !token && authRBSheet.current.open()
    });
  }, [isFocused])

  useEffect(() => {
  }, [authRBSheet]);

  useEffect(() => {
    handleTotalAmount();
  }, [cartItem, promocodeDiscount, deliveryMethod])

  useEffect(()=>{
    dispatch(getUserDetailForPlacingOrder(setData));

  },[isFocused])

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

  const handlePromoCodeValidation = () => {
    if (textValue.length == 0) {
      Toast.show({
        type: 'error',
        text1: 'Enter Promo Code',
      });
      setValidPromoCode(false);
    }
    else {
      dispatch(PromoCodeVerifed(setPromoCodeAnimation, textValue, promoCodeToggleModal, setValidPromoCode));
    }
  }

  const handleEditProduct = (item) => {
    navigate('editedSingleProduct', { productId: item?.productId, cartProductId: item?._id , productCategory:item?.title, cartItem:item })
  }

  const handleRemoveProduct = (_id) => {
    dispatch(deleteProduct(setAnimation, _id, navigate));
  }

  const handlePayment = () => {
    // genToken();
    var date = getDate();
    const orderObj = {
      products: cartItem,
      orderDate: date,
      deliveryMethod: deliveryMethod,
      deliveryAddress: {
        firstName:userDetailData?.firstName,
        lastName:userDetailData?.lastName,
        phone:userDetailData?.phone,
        email:userDetailData?.email,
        addressLine1: deliveryMethod == 'Delivery' ? deliveryUserAddress : "11/F, 52 Hung To Road, Kwun Tong, Hong Kong"
      },
      paymentMethod: paymentMethodName,
      subTotal: subTotal,
      discount: promocodeDiscount != undefined ? parseInt(promocodeDiscount) : 0,
      total: total,
      status: "OUT_FOR_DELIVERY"

    }
    if(paymentMethodName == "Credit Card"){
      navigate('payment', { amount: total , orderObj:orderObj})

    }else dispatch(placeOrderOffline(setPlaceOrderAnimation, orderObj, navigate))

    
  }

  const handleTotalAmount = () => {
    let deliveryCost = 0;
    let quantity = 0;
    let unitPrice = 0;
    let subTotal = 0;
    let totalPrice = 0;
    cartItem && cartItem?.map((item) => {
      quantity = item?.priceChart?.units;
      unitPrice = item?.priceChart?.pricePerUnit;
      deliveryCost = deliveryCost + item?.priceChart?.deliveryCost;
      subTotal = parseInt(quantity * unitPrice);
      totalPrice = subTotal;
    });

    if(deliveryMethod == "Delivery"){
      totalPrice = totalPrice + deliveryCost;
    }
    else{
      totalPrice = totalPrice;
    }
    if (promocodeDiscount && promocodeDiscount != "") {
      totalPrice = totalPrice - parseInt(promocodeDiscount);
      setTotal(totalPrice);
    } else {
      setTotal(totalPrice);
    }
    setSubTotal(subTotal);
    setDeliveryCost(deliveryCost);

  }

  return (
    <View style={styles.container}>
      <CartScreen
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
