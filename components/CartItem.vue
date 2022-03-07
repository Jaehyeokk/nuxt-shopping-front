<template>
  <li class="cart-item">
    <div class="cart-img-wrapper" @click="moveToItem">
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
</template>

<script>
export default {
  props: {
    cart: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async removeCartItem(id) {
      await this.$store.dispatch('DELETE_CART_ITEM', id);
    },
    moveToItem() {
      this.$router.push(`/product/${this.cart.id}`);
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

.cart-img-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  padding: 10px;
  border-right: 2px solid #41b883;
  cursor: pointer;
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