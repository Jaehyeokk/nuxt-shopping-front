import { fetchProducts, fetchProduct } from '@/apis'

export const state = () => ({
  products: [],
  product: {}
})

export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products
  },
  SET_PRODUCT(state, product) {
    state.product = product
  }
}

export const actions = {
  async FETCH_PRODUCTS({ commit }, keyword) {
    const response = await fetchProducts(keyword)
    const products = response.data.map((item) => ({
      ...item,
      imageUrl: `${item.imageUrl}?random=${Math.random()}`
    }))
    commit('SET_PRODUCTS', products)
    return response
  },

  async FETCH_PRODUCT({ commit }, id) {
    const response = await fetchProduct(id)
    const product = response.data
    commit('SET_PRODUCT', product)
    return response
  }
}