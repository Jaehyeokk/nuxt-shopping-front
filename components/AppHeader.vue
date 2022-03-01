<template>
  <header class="header">
    <div class="container">
      <h1 class="logo">
        <NuxtLink to="/"> Nuxt-shopping </NuxtLink>
      </h1>
      <div class="util-wrapper">
        <SearchInput></SearchInput>
        <CartBtn></CartBtn>
      </div>
    </div>
  </header>
</template>

<script>
import CartBtn from './CartBtn.vue';
import SearchInput from './SearchInput.vue';
export default {
  components: { SearchInput, CartBtn },
};
</script>

<style scoped>
.header {
  padding: 15px 20px;
  background-color: skyblue;
}

.header .logo {
  font-weight: 700;
  font-size: 24px;
  color: #fafafa;
}

.header .logo a {
  color: #fff;
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
</style>