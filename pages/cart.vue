<template>
  <div class="container">
    <div class="section">
      <h2 class="title">Cart</h2>
      <p class="cart-sub-title">
        There are {{ cartsLenghth }} products in your cart.
      </p>
      <ul class="cart-list">
        <CartItem v-for="cart in carts" :key="cart.id" :cart="cart"></CartItem>
      </ul>
    </div>
  </div>
</template>

<script>
import CartItem from '../components/CartItem.vue';
export default {
  components: { CartItem },
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
};
</script>

<style scoped>
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
</style>