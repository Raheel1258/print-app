import momet from 'moment';
export const getDate = () => {
    var day = new Date().getDate();
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear();
      var date = day + '/' + month + '/' + year;
      return date;
}
export const getCurrentDate = () => {
  var date = momet(new Date()).format('YYYY-MM-DD')
    return date;
}

export const getDateFormat = (date) => {
  var date = momet(date).format('DD MMMM YYYY')
  return date;
}

export const getTimeFormat = (dateTime) => {
  var time = momet(dateTime).format('h:mm a'); 
  return time;
}

export const handleOrderStatus = (orderNotify, t) => {
  if(orderNotify == "ORDER_RECIEVED"){
    return t('order_received_status')
  }
  else if(orderNotify=="COMPLETED"){
    return t('order_completed_status')
  }
  else if(orderNotify=="CANCELLED"){
    return t('order_cancelled_status') 
  }
  else if(orderNotify=="OUT_FOR_DELIVERY"){
    return t('order_out_for_delivery_status')
  }
  else if(orderNotify=="READY_FOR_PICKUP"){
    return t('order_ready_for_pickup_status')
  }
  else{
    return t('order_printing_in_process_status')
  }

}

