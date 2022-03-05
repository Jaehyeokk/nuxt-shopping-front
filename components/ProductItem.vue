<template>
  <li class="product-item" @click.prevent="moveToProductPage">
    <div class="product-img-wrapper">
      <img :src="item.imageUrl" :alt="item.name" />
    </div>
    <div class="product-description">
      <p class="product-name">{{ item.name }}</p>
      <p class="product-price">&#36;{{ item.price }}</p>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    moveToProductPage() {
      this.$router.push(`/product/${this.item.id}`);
    },
  },
};
</script>

<style scoped>
.product-item {
  width: 250px;
  margin-bottom: 30px;
  cursor: pointer;
}

.product-img-wrapper {
  min-height: 200px;
  padding: 10px;
  border: 2px solid #41b883;
  border-radius: 4px;
  box-sizing: border-box;
}

.product-item img {
  width: 100%;
  border-radius: 4px;
}

.product-description {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.product-price {
  font-weight: 700;
  color: #41b883;
}
</style>