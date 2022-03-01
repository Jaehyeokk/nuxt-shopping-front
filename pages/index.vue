<template>
  <div class="container">
    <BestSellerSection></BestSellerSection>
  </div>
</template>

<script>
import BestSellerSection from '../components/BestSellerSection.vue';
export default {
  name: 'IndexPage',
  components: { BestSellerSection },
  async asyncData({ store }) {
    await store.dispatch('FETCH_PRODUCTS');
  },
};
</script>
