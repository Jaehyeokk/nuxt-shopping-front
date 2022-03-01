<template>
  <div class="search-wrapper">
    <input type="text" class="search-input" />
    <button class="search-btn" type="button">
      <i class="fa fa-search" aria-hidden="true"></i>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.search-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.search-input {
  width: 100%;
  height: 50%;
  border: none;
  border-radius: 4px;
  padding: 6px 16px 6px 30px;
  background-color: #fff;
}

.search-input:focus {
  outline: 1px solid pink;
}

.search-btn {
  position: absolute;
  left: 0;
  top: 0;
  width: 28px;
  height: 28px;
  outline: none;
  border: none;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
}

.search-btn i {
  color: pink;
  line-height: 28px;
}
</style>