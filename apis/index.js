import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.BASE_URL
})

// shopping apis
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

export { fetchProducts, fetchProduct }