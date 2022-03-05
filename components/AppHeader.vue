<template>
  <header class="header">
    <div class="container">
      <h1 class="logo">
        <NuxtLink to="/"> Nuxt Shopping </NuxtLink>
      </h1>
      <div class="util-wrapper">
        <SearchInput v-model="searchKeyword" @search="onSearch"></SearchInput>
        <CartBtn class="cart-btn"></CartBtn>
      </div>
    </div>
  </header>
</template>

<script>
import CartBtn from './CartBtn.vue';
import SearchInput from './SearchInput.vue';
export default {
  components: { SearchInput, CartBtn },
  data() {
    return {
      searchKeyword: '',
    };
  },
  methods: {
    onSearch() {
      const keyword = this.searchKeyword;
      this.$store.dispatch('FETCH_PRODUCTS', keyword);
    },
  },
};
</script>

<style scoped>
.header {
  padding: 15px;
  background-color: #35495e;
}

.header .logo {
  font-weight: 700;
  font-size: 24px;
  color: #fafafa;
}

.header .logo a {
  color: #41b883;
  text-decoration: none;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.util-wrapper {
  display: flex;
}

.cart-btn {
  margin-left: 20px;
}

@media screen and (max-width: 768px) {
  .header .logo a {
    font-size: 18px;
  }
}
</style>