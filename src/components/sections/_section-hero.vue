<template>
  <div class="section section__hero">
    <div class="section__content">
      <h2>Your Ideal Construction Solution</h2>
      <p>
        From stylish home units to practical spaces and functional office
        structures, Mega Panels can help you build your dream project.
      </p>
      <base-button name="Get in touch" type="cta"></base-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "section-hero"
};
</script>

<style lang="scss" scoped>
.section__hero {
  margin: 0;
  background-image: url("../../assets/images/house-3.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 60%;
  display: flex;
  padding: 0 1rem;

  @include respond(tab-land) {
    height: 80%;
    padding: 0 2rem;
  }

  @include respond(desktop) {
    height: 100%;
  }
}

.section__content {
  margin: auto;
  > * + * {
    margin-top: 1.5rem;
  }
  h2 {
    color: $secondary-color;
  }
}
</style>
