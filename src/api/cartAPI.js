import axiosClient from './axiosClient'

const cartAPI = {
  addToCart: (userId, reqBody) => {
    const url = '/user/add-to-cart'
    return axiosClient.post(url, reqBody)
  },
  cartQuantity: (userId) => {
    const url = `/user/cart-quantity/${userId}`
    return axiosClient.get(url)
  }
}
export default cartAPI
