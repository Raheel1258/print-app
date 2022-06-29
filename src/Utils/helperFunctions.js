import momet from 'moment'
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

export const handleOrderStatus = (orderNotify) => {
  if(orderNotify == "ORDER_RECIEVED"){
    return "Order recieved"
  }
  else if(orderNotify=="COMPLETED"){
    return "Order completed";
  }
  else if(orderNotify=="CANCELLED"){
    return "Cancelled";
  }
  else if(orderNotify=="OUT_FOR_DELIVERY"){
    return "Out for delivery";
  }
  else if(orderNotify=="READY_FOR_PICKUP"){
    return "Ready for pickup";
  }
  else{
    return "Printing in process" ;
  }

}

