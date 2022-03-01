import { fetchProducts } from '@/apis'

export const state = () => ({
  products: []
})

export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products
  }
}

export const actions = {
  async FETCH_PRODUCTS({ commit }) {
    const response = await fetchProducts()
    const products = response.data.map((item) => ({
      ...item,
      imageUrl: `${item.imageUrl}?random=${Math.random()}`
    }))
    commit('SET_PRODUCTS', products)
    return response
  }
}