<template>
  <div class="section section__choose-us">
    <div class="section-content">
      <h4 class="section__title">
        why choose <span class="text__orange">Mega Panels</span>
      </h4>
      <div class="advantage__list">
        <div class="advantage__item">
          <h4 class="advantage__title">
            innovative
          </h4>
          <p class="advantage__desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Aspernatur, totam commodi aliquam adipisci beatae sed voluptates
            odit nobis impedit cupiditate illum natus libero nostrum voluptas
            iusto, deleniti dolor autem asperiores!
          </p>
        </div>
        <div class="advantage__item">
          <h4 class="advantage__title">Fast Construction</h4>
          <p class="advantage__desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Aspernatur, totam commodi aliquam adipisci beatae sed voluptates
            odit nobis impedit cupiditate illum natus libero nostrum voluptas
            iusto, deleniti dolor autem asperiores!
          </p>
        </div>
        <div class="advantage__item">
          <h4 class="advantage__title">Save money</h4>
          <p class="advantage__desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Aspernatur, totam commodi aliquam adipisci beatae sed voluptates
            odit nobis impedit cupiditate illum natus libero nostrum voluptas
            iusto, deleniti dolor autem asperiores!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "section-choose-us"
};
</script>

<style lang="scss" scoped>
.section__choose-us {
  .section__content {
    .section__title {
      margin-bottom: 1rem;
      text-align: left;
    }
  }
}

.advantage__list {
  margin-top: 1.5em;
  display: grid;
  //   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-columns: repeat(auto-fit, 1fr);
  grid-auto-rows: auto;
  gap: 1em;

  @include respond(tab-land) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2em;
  }

  @include respond(desktop) {
    grid-template-columns: repeat(3, 1fr);
  }

  .advantage__item {
    .advantage__title {
      margin-bottom: 1rem;
      text-transform: capitalize;
      font-size: 1.2rem;
    }
  }
}
</style>
