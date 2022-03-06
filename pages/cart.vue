<template>
  <div class="container">
    <div class="section">
      <h2 class="title">Cart</h2>
      <p class="cart-sub-title">
        There are {{ cartsLenghth }} products in your cart.
      </p>
      <ul class="cart-list">
        <li v-for="cart in carts" :key="cart.id" class="cart-item">
          <div class="cart-img-wrapper">
            <img :src="cart.imageUrl" :alt="cart.name" class="cart-item-img" />
          </div>
          <div class="cart-item-info">
            <p class="cart-item-title">{{ cart.name }}</p>
            <p class="cart-item-price">&#36;{{ cart.price }}</p>
          </div>
          <div class="cart-item-util">
            <button @click="removeCartItem(cart.id)">&times;</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Nuxt Shopping | Cart',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '장바구니 페이지 입니다.',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Cart',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: '장바구니 페이지 입니다.',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://nuxt-shopping-front.herokuapp.com${this.$route.path}`,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Cart',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: '장바구니 페이지 입니다.',
        },
      ],
    };
  },
  computed: {
    carts() {
      return this.$store.state.carts;
    },
    cartsLenghth() {
      return this.$store.state.carts.length;
    },
  },
  methods: {
    async removeCartItem(id) {
      await this.$store.dispatch('DELETE_CART_ITEM', id);
    },
  },
};
</script>

<style scoped>
.cart-item {
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 20px;
  border: 2px solid #41b883;
  border-radius: 4px;
}

.title {
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 32px;
  text-align: center;
}

.cart-sub-title {
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 18px;
  color: #999;
  text-align: center;
}

.cart-img-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  padding: 10px;
  border-right: 2px solid #41b883;
}

.cart-item-img {
  width: 100%;
}

.cart-item-info {
  width: 100%;
  padding: 40px;
  box-sizing: border-box;
}

.cart-item-price {
  margin-top: 10px;
}

.cart-item-util {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.cart-item-util button {
  padding: 10px;
  border: none;
  font-size: 27px;
  color: #3b8070;
  outline: none;
  background-color: #fff;
  cursor: pointer;
}
</style>