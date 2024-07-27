import axiosClient from './axiosClient'

const cartAPI = {
  addToCart: (userId, reqBody) => {
    const url = '/user/add-to-cart'
    return axiosClient.post(url, reqBody)
  },
  cartQuantity: (userId) => {
    const url = `/user/cart-quantity/${userId}`
    return axiosClient.get(url)
  },
  getMyCart: (userId) => {
    const url = '/user/my-cart'
    return axiosClient.get(url)
  },
  updateCartItem: (userId, reqBody) => {
    const url = '/user/update-cart-quantity'
    return axiosClient.post(url, reqBody)
  },
  deleteCartItem: (userId, bookId) => {
    const url = `/user/delete-cart-item/${bookId}`
    return axiosClient.delete(url)
  }
}
export default cartAPI
