import React, {useState,useRef} from 'react';
import {View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';

import MasterCard from '../Assests/Svgs/MasterCard';
import VisaCard from '../Assests/Svgs/VisaCard';
import CartScreen from '../Screens/CartScreen';
import {colors} from '../Utils/theme';

const CartContainer = () => {
  const addAddressRBSheet = useRef();
  const addCardetCardRBSheet = useRef();
  const creditCardRBSheet = useRef();
  const refRBSheet = useRef();
  const [textValue, setTextValue] = useState('');
  const [delivery, setDelivery] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);
  const [data , setData] = useState([
    {
      id: '1',
      title: 'Karen Chan',
      addressLineOne:'23 Wings IIIB, 19 Tong Sun Street,',
      addressLineTwo:'Ma On Shan, New Territories, Hong Kong',
      selected: true
    },
    {
      id: '2',
      title: '[Full Name]',
      companyName:'[Company Name]',
      addressLineOne:'[Address Line 1], [Address Line 2]',
      addressLineTwo:'[Area], [District], [City/Country]',
      selected: false
    },
  ]);

  const [cardData , setCardData] = useState([
    {
      id: '1',
      title: 'Mastercard (9238)',
      addressLineOne:'Peter Leung',
      addressLineTwo:'Exp: 09/23',
      children:<MasterCard/>,
      selected: true
    },
    {
      id: '2',
      title: 'Visa (1628)',
      addressLineOne:'Peter Leung',
      addressLineTwo:'Exp: 09/23',
      children:<VisaCard/>,
      selected: false
    },
  ]);
  const navigation = useNavigation();
  const navigate = (routeName, data = {}) => {
    navigation.navigate(routeName, data)
  }
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  
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
        data={data}
        cardData={cardData}
        setCardData={setCardData}
        setData={setData}
        navigate={navigate}
        delivery = {delivery}
        setDelivery = {setDelivery}
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
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
