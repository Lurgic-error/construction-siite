<template>
  <div class="section section__about">
    <div class="section__content">
      <div class="content__right">
        <h4 class="section__title">
          about <span class="text__orange">Mega Panels</span>
        </h4>
        <img
          src="../../assets/images/house-1.jpg"
          alt=""
          class="content__img"
        />
      </div>
      <div class="content__left">
        <h3 class="content__title">
          The <span class="text__orange">Future</span> of Construction
        </h3>
        <p class="content__text">
          Mega’s main objective is to provide premier, innovative and
          value-for-money housing products. We are supported by our strong
          knowledgeable workforce in discharging efficient and quality service
          to our clients. Mega seeks to be the market leader in this industry.
        </p>

        <base-button class="base__btn" name="learn more"></base-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "section__about"
};
</script>

<style lang="scss" scoped>
.section__about {
  .section__content {
    > * + * {
      margin-top: 1rem;
    }

    @include respond(desktop) {
      display: flex;
      gap: 2em;
      align-items: center;
      .content__right {
        margin-top: 0;
        flex: 0 0 50%;
        order: 2;
      }

      .content__left {
        margin-top: 0;
        flex: 0 0 50%;
      }

      .content__title {
        margin-bottom: 01rem;
      }
    }

    .section__title {
      text-transform: uppercase;

      @include respond(tab-land) {
        text-align: right;
      }
    }

    .content__title {
      font-size: 1.2rem;
      text-transform: capitalize;
    }

    .base__btn {
      margin: 1.5rem 0;
    }
  }
}

.content__img {
  height: 300px;
  width: 100%;
  object-fit: cover;
  object-position: center;

  @include respond(tab-land) {
    margin-top: 1.5rem;
  }
}
</style>
