import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.BASE_URL
})

// shopping apis

// products
function fetchProducts(keyword) {
  return keyword ? instance.get('/products', {
    params: {
      name_like: keyword
    }
  }) : instance.get('/products')
}

function fetchProduct(id) {
  return instance.get(`/products/${id}`)
}

// carts
function fetchCartItems() {
  return instance.get('/carts')
}

function addCartItem(item) {
  return instance.post('/carts', item)
}

function removeCartItem(id) {
  // return instance.delete(`/carts/${id}`)
}


export { fetchProducts, fetchProduct, fetchCartItems, addCartItem, removeCartItem }