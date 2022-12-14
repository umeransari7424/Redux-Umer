import { ADD_TO_CART,REMOVE_TO_CART } from "../Constant"

export  function addToCart(data) {
  //console.log("Data",data)
  return {
    type : ADD_TO_CART,
    data:data
  }
}
export  function removeToCart() {
  //console.log("Data",data)
  return {
    type : REMOVE_TO_CART,
  }
}

