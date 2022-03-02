<template>
  <NuxtLink to="/" class="cart-link">
    <i class="fa fa-shopping-cart cart-icon" aria-hidden="true"></i>
    <div class="cart-number">1</div>
  </NuxtLink>
</template>

<script>
export default {};
</script>

<style scoped>
.cart-link {
  position: relative;
  width: 30px;
  height: 30px;
}

.cart-icon {
  font-size: 30px;
  color: #fff;
}

.cart-number {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  bottom: 0;
  width: 15px;
  height: 15px;
  border: 1px solid #fff;
  border-radius: 50%;
  background-color: pink;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: #fff;
}
</style>