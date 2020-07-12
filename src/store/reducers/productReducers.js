import {
  SET_ERRORS,
  LOADING_DATA,
  GET_PRODUCTS,
  SET_PRODUCT,
  SET_CART,
  DELETE_PRODUCT,
} from "../types"

const initialState = {
  loading: false,
  products: [],
  errors: {},
  product: {},
  cart: [],
}

const productReducers = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      }
    case SET_ERRORS:
      return {
        ...state,
        errors: action.payload,
      }
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      }
    case SET_PRODUCT:
      return {
        ...state,
        product: action.payload,
        loading: false,
      }
    case DELETE_PRODUCT:
      return {
        ...state,
        errors: action.payload,
        loading: false,
      }
    case SET_CART:
      return {
        ...state,
        cart: action.payload,
        loading: false,
      }
    default:
      return state
  }
}

export default productReducers
