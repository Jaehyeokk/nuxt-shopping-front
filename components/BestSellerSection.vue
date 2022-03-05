<template>
  <div class="best-seller-section section">
    <h2 class="section-title">Products</h2>
    <ul class="product-list">
      <ProductItem
        v-for="item in products"
        :key="item.id"
        :item="item"
      ></ProductItem>
    </ul>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue';
export default {
  components: { ProductItem },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
};
</script>

<style scoped>
.product-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.section-title {
  font-weight: 700;
  color: #41b883;
}
</style>