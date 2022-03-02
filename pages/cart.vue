<template>
  <div class="container">
    <div class="section">
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
  computed: {
    carts() {
      return this.$store.state.carts;
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
  border: 1px solid #ccc;
  border-radius: 4px;
}

.cart-img-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  padding: 10px;
  border-right: 1px solid #ccc;
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
  outline: none;
  background-color: #fff;
  cursor: pointer;
}
</style>