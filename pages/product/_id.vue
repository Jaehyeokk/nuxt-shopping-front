<template>
  <div class="container">
    <div class="section product-wrapper">
      <img :src="product.imageUrl" :alt="product.name" class="product-img" />
      <div class="product-info-wrapper">
        <p class="product-title">{{ product.name }}</p>
        <p class="product-price">&#36;{{ product.price }}</p>
        <div class="product-btns-wrapper">
          <button disabled>Buy</button>
          <button class="product-btn" @click="addToCart">Add To Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ store, params }) {
    await store.dispatch('FETCH_PRODUCT', params.id);
  },
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  methods: {
    async addToCart() {
      await this.$store.dispatch('ADD_CART_ITEM', this.product);
      this.$router.push('/cart');
    },
  },
};
</script>

<style scoped>
.product-wrapper {
  display: flex;
  position: relative;
}

.product-img {
  width: 50%;
  margin-right: 60px;
  border-radius: 4px;
}

.product-info-wrapper {
  position: relative;
  padding-bottom: 30px;
  box-sizing: border-box;
}

.product-title {
  font-weight: 700;
  font-size: 32px;
}

.product-price {
  margin-top: 20px;
  font-weight: 500;
  font-size: 24px;
  text-align: right;
}

.product-btns-wrapper {
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
}

.product-btns-wrapper button {
  width: calc(50% - 10px);
  height: 50px;
  border: 2px solid #41b883;
  border-radius: 4px;
  outline: none;
  background-color: #fff;
  cursor: pointer;
}

.product-btns-wrapper button:disabled {
  border: 2px solid #ccc;
}

@media screen and (max-width: 768px) {
  .product-wrapper {
    flex-wrap: wrap;
  }

  .product-img {
    width: 100%;
    margin: 0;
  }

  .product-title {
    margin: 20px 0;
  }

  .product-info-wrapper {
    width: 100%;
    padding-bottom: 70px;
  }
}

@media screen and (max-width: 480px) {
  .product-title {
    font-size: 24px 
  }

  .product-price {
    font-size: 21px;
  }
}
</style>