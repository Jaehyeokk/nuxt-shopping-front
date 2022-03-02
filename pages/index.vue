<template>
  <div class="container">
    <BestSellerSection></BestSellerSection>
    <div class="cart-btn-wrapper">
      <CartBtn></CartBtn>
    </div>
  </div>
</template>

<script>
import BestSellerSection from '../components/BestSellerSection.vue';
import CartBtn from '../components/CartBtn.vue';
export default {
  name: 'IndexPage',
  components: { BestSellerSection, CartBtn },
  async asyncData({ store }) {
    await store.dispatch('FETCH_PRODUCTS');
  },
};
</script>

<style scoped>
.cart-btn-wrapper {
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  right: 0;
  bottom: 50px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: pink;
}
</style>