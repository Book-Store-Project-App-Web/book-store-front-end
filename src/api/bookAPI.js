import axiosClient from './axiosClient'

const bookAPI = {
  getAllBook: () => {
    const url = '/book'
    return axiosClient.get(url)
  }
}
export default bookAPI
