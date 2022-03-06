import { removeCartItem } from '../apis'
import { fetchProducts, fetchProduct, fetchCartItems, addCartItem } from '@/apis'

export const state = () => ({
  products: [],
  product: {},
  carts: []
})

export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products
  },
  SET_PRODUCT(state, product) {
    state.product = product
  },
  SET_CART_ITEMS(state, items) {
    state.carts = items
  },
  ADD_CART_ITEM(state, item) {
    state.carts.push(item)
  },
  DELETE_CART_ITEM(state, id) {
    state.carts = state.carts.filter(item => item.id !== id)
  }
}

export const actions = {
  async nuxtServerInit(storeCtx, nuxtCtx) {
    await storeCtx.dispatch('FETCH_CART_ITEMS')
  },
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
  },

  async FETCH_CART_ITEMS({ commit }) {
    const response = await fetchCartItems()
    const items = response.data.map(item => ({
      ...item,
      imageUrl: `${item.imageUrl}?random=${Math.random()}`
    }))
    commit('SET_CART_ITEMS', items)
    return response
  },

  async ADD_CART_ITEM({ commit }, item) {
    const response = await addCartItem()
    commit('ADD_CART_ITEM', item)
    return response
  },

  async DELETE_CART_ITEM({ commit }, id) {
    const response = await removeCartItem(id)
    commit('DELETE_CART_ITEM', id)
    return response
  }
}