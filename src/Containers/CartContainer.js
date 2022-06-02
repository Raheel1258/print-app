import React, { useState, useRef, useEffect } from 'react';
import { View, BackHandler } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import Storage from '../Utils/Storage';
import Stripe from 'react-native-stripe-api';
import { useDispatch, useSelector } from 'react-redux';
import { getCartData, PromoCodeVerifed, deleteProduct } from '../store/actions/cartAction'
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
  const [validPromoCode, setValidPromoCode] = useState(false);
  const [promoCodeAnimation, setPromoCodeAnimation] = useState(false);
  const [textValue, setTextValue] = useState('');
  const [delivery, setDelivery] = useState(true);
  const [focused, setFocused] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState(true);
  const [paymentMethodName, setPaymentMethodName] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isPromoCodeModaVidible, setIsPromoCodeModaVidible] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [animation, setAnimation] = useState(false);
  const cartItem = useSelector(state => state?.cartReducer?.cartDetail);
  const promocodeDiscount = useSelector(state => state?.cartReducer?.promoCode)

  console.log("paymentment", paymentMethodName);

  const [data, setData] = useState([
    {
      id: '1',
      title: 'Karen Chan',
      addressLineOne: '23 Wings IIIB, 19 Tong Sun Street,',
      addressLineTwo: 'Ma On Shan, New Territories, Hong Kong',
      selected: true
    },
    {
      id: '2',
      title: '[Full Name]',
      companyName: '[Company Name]',
      addressLineOne: '[Address Line 1], [Address Line 2]',
      addressLineTwo: '[Area], [District], [City/Country]',
      selected: false
    },
  ]);

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
  }, [cartItem, promocodeDiscount])

  const navigate = (routeName, data = {}) => {
    navigation.navigate(routeName, data)
  }

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

  const handleEditProduct = (productId, cartProductId , cartTitle) => {
    navigate('editedSingleProduct', { productId: productId, cartProductId: cartProductId , productCategory:cartTitle })
  }

  const handleRemoveProduct = (_id) => {
    console.log("removed id", _id);
    dispatch(deleteProduct(setAnimation, _id, navigate));
  }

  const handlePayment = () => {
    // genToken();
    const orderObj = {
      products: cartItem,
      orderDate: "string",
      deliveryMethod: "string",
      deliveryAddress: {
        fullName: "string",
        companyName: "string",
        addressLine1: "Lahore anarkali",
        addressLine2: "string",
        area: "string",
        district: "string",
        cityCountry: "string",
        contactNumber: "string",
        primary: true
      },
      paymentMethod: "credit card",
      subTotal: subTotal,
      discount: promocodeDiscount != undefined ? parseInt(promocodeDiscount) : 0,
      total: total,
      status: "OUT_FOR_DELIVERY"

    }
    navigate('payment', { amount: total , orderObj:orderObj});
  }

  const handleTotalAmount = () => {
    cartItem && cartItem?.map((item) => {
      const quantity = item?.priceChart?.units;
      const unitPrice = item?.priceChart?.pricePerUnit;
      let sub_total = parseInt(quantity * unitPrice);
      let totalPrice = sub_total + 180;
      if (promocodeDiscount && promocodeDiscount != "") {
        totalPrice = totalPrice - parseInt(promocodeDiscount);
        setTotal(totalPrice);
      } else {
        setTotal(totalPrice);
      }
      setSubTotal(sub_total);

    })
  }

  return (
    <View style={styles.container}>
      <CartScreen
        refRBSheet={refRBSheet}
        creditCardRBSheet={creditCardRBSheet}
        addAddressRBSheet={addAddressRBSheet}
        addCardetCardRBSheet={addCardetCardRBSheet}
        textValue={textValue}
        setTextValue={setTextValue}
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
