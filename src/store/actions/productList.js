import Toast from 'react-native-toast-message';
import Storage from '../../Utils/Storage';
import axios from 'axios';
import * as types from '../types/types'

import { t } from 'i18next';
import { Api } from '../../Utils/Api'


export const setProductList = (data) => {
  return {
    type: types.PRODUCT_LIST,
    data,
  };
}

export const setPriceChart = (priceChart) => {
  return {
    type: types.PRODUCT_PRICE_CHART,
    priceChart
  }
}

export const setPriceChartOnEdit = (priceChart) => {
  return {
    type: types.PRODUCT_PRICE_CHART_EDIT,
    priceChart
  }
}

export const setSingleProduct = (data) => {
  return {
    type: types.SINGLE_PRODUCT,
    data
  }
}


export const getCategoriesProduct = (category, setAnimation) => {
  return async (dispatch) => {
    setAnimation(true);
    axios.get(`${Api}/products/find/${category}`)
      .then(async (res) => {
        dispatch(setProductList(res?.data));
        setAnimation(false);
      })
      .catch((err) => {
        setAnimation(false);

        Toast.show({
          type: 'error',
          text1: t('general_message')
        });
      });
  }
};

//Selecting Product Price chart
export const getPriceChart = (setPriceChartAnimation, defaultValuesObject, setSelectedPriceChart) => {

  let values = defaultValuesObject;

  if (values?.product !== "Spot UV Business Card") {
    delete values['spotuvside'];
  }

  if (values?.product !== "Flyer (A4)") {
    delete values['folding'];
  }

  if (values?.product == "Flyer (A4)" && values?.size == "210 x 148") {
    values['product'] = "Flyer (A5)"
  }

  if (values?.product == "Spot UV Business Card" && values?.corner == "Round Corner") {
    values['product'] = "Spot UV Business Card ";
  }

  if (values?.product == "Matte / Glossy Business Card" && values?.corner == "Round Corner") {
    values['product'] = "Matte / Glossy Business Card "
  }

  if (values?.product == "Classy Pearl (Textured Paper) Business Card" && values?.corner == "Round Corner") {
    values['product'] = "Classy Pearl (Textured Paper) Business Card "
  }


  return async (dispatch) => {
    setPriceChartAnimation(true);
    const accessToken = await Storage.retrieveData('token')
    let query = "";
    Object.keys(values).forEach(key => {
      if (key !== "category") {
        query = query + key + "=" + values[key] + "&"
      }
    })
    axios.get(`${Api}/price-chart/${values.category}?${query}`)
      .then(async (res) => {
        dispatch(setPriceChart(res?.data));
        setSelectedPriceChart(res?.data[0]);
        // // setPriceChart(res?.data);
        setPriceChartAnimation(false);
      })
      .catch((err) => {
        setPriceChartAnimation(false);
        if (err?.response?.status == 401) {
          Toast.show({
            type: 'error',
            text1: t("user_not_logged")
          });
        } else
          Toast.show({
            type: 'error',
            text1: t('general_message')
          });
      });
  }
};

//Edit product
export const getPriceChartOnEdited = (setPriceChartAnimation, defaultValuesObject, setSelectedPriceChart) => {

  let values = defaultValuesObject;

  if (values?.product !== "Spot UV Business Card") {
    delete values['spotuvside'];
  }

  if (values?.product !== "Flyer (A4)") {
    delete values['folding'];
  }

  if (values?.product == "Flyer (A4)" && values?.size == "210 x 148") {
    values['product'] = "Flyer (A5)"
  }

  if (values?.product == "Spot UV Business Card" && values?.corner == "Round Corner") {
    values['product'] = "Spot UV Business Card ";
  }

  if (values?.product == "Matte / Glossy Business Card" && values?.corner == "Round Corner") {
    values['product'] = "Matte / Glossy Business Card "
  }

  if (values?.product == "Classy Pearl (Textured Paper) Business Card" && values?.corner == "Round Corner") {
    values['product'] = "Classy Pearl (Textured Paper) Business Card "
  }

  return async (dispatch) => {
    setPriceChartAnimation(true);
    const accessToken = await Storage.retrieveData('token')
    let query = "";
    Object.keys(values).forEach(key => {
      if (key !== "category") {
        query = query + key + "=" + values[key] + "&"
      }
    })
    axios.get(`${Api}/price-chart/${values.category}?${query}`)
      .then(async (res) => {
        dispatch(setPriceChartOnEdit(res?.data));
        setSelectedPriceChart(res?.data[0]);
        // // setPriceChart(res?.data);
        setPriceChartAnimation(false);
      })
      .catch((err) => {
        setPriceChartAnimation(false);
        Toast.show({
          type: 'error',
          text1: t('general_message')
        });
      });
  }
};

export const getProductById = (id, setAnimation) => {
  return async (dispatch) => {
    const accessToken = await Storage.retrieveData('token');
    setAnimation(true);
    axios.get(`${Api}/products/findById/${id}`, { headers: { "Authorization": `Bearer ${accessToken}` } })
      .then(async (res) => {
        setAnimation(false);
        dispatch(setSingleProduct(res?.data));
      })
      .catch((err) => {
        setAnimation(false);
        Toast.show({
          type: 'error',
          text1: t('general_message')
        });
      });
  }
};


//Upload file
export const uploadFile = (formData, setAnimation, setResult) => {
  return async (dispatch) => {
    setAnimation(true);
    axios.post(`${Api}/upload-file/image`, formData, {headers:{
      accept: 'application/json',
      'Content-Type':'multipart/form-data; boundary=testing'
    }})
      .then(async (res) => {
        setAnimation(false);
        setResult((prev) => {
          return [...prev, res?.data?.Location];
        });
      })
      .catch((err) => {
        setAnimation(false);
        Toast.show({
          type: 'error',
          text1: t('general_message')
        });
      });
  }
};


// export const uploadFile = (formData, setAnimation, setResult) => {
//   return async (dispatch) => {
//     setAnimation(true);
//     axios({
//       method: 'post',
//       url: 'https://print-backend-app.herokuapp.com/api/v1/upload-file/image',
//       data:formData

//     })
//       .then(async (res) => {
//         setAnimation(false);
//         setResult((prev) => {
//           return [...prev, res?.data?.Location];
//         });
//       })
//       .catch((err) => {
//         setAnimation(false);
//         Toast.show({
//           type: 'error',
//           text1: t('general_message')
//         });
//       });
//   }
// };

