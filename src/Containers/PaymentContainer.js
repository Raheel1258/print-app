import React, {useState} from "react";
import { View, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../Utils/theme';
import { PaymentScreen } from "../Screens";
import {genToken} from "../store/actions/paymentAction"
import { useDispatch } from "react-redux";



const PaymentContainer = ({route}) => {
    const {amount, orderObj} = route.params;
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [animation, setAnimation] = useState(false);
    const [creditCardState, setCreditCardState] = useState({
        cardNumber: '',
        cardName: '',
        expiryMonth: '',
        expiryYear: '',
        cvc:'',
    })

    

    const handleCreditCard = (values) => {
        console.log("object order" , orderObj);
        dispatch(genToken(values, navigate,amount,setAnimation,orderObj));
        //navigate("orderReceived");
        // console.log("result" , result);

    }

    const goBack = () => {
        navigation.goBack();
    };

    const navigate = (routeName, data = {}) => {
        navigation.navigate(routeName, data)
    }
    return (
        <View style={styles.container}>
            <PaymentScreen goBack={goBack} 
            animation={animation} 
            handleCreditCard={handleCreditCard} 
            navigate={navigate}
            creditCardState={creditCardState}/>
        </View>
    )
}


const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.whiteColor,
    },
});


export default PaymentContainer;