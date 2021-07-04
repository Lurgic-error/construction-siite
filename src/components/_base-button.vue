<template>
  <button class="base-btn" :class="type === 'cta' ? 'base__btn-cta' : ''">
    {{ name }}
  </button>
</template>

<script>
export default {
  name: "base-button",
  props: { name: { required: true }, type: null }
};
</script>

<style lang="scss" scoped>
.base-btn {
  outline: none;
  padding: 0.825rem 1.825rem;
  color: white;
  background-color: $primary-color;
  border: none;
  display: inline-block;
}

.base__btn-cta {
  font-weight: 600;
  background-color: $tertiary-color;
}
</style>
