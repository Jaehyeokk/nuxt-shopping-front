<template>
  <li class="product-item">
    <img :src="item.imageUrl" :alt="item.name" />
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
};
</script>

<style scoped>
.product-item {
  width: 300px;
  margin-bottom: 30px;
  cursor: pointer;
}

.product-item img {
  width: 100%;
  border-radius: 4px;
}

.product-description {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
}
</style>