import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.BASE_URL
})

// shopping apis
function fetchProducts() {
  return instance.get('/products')
}

export { fetchProducts }