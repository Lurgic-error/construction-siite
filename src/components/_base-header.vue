<template>
  <header class="base-header">
    <nav class="navbar">
      <div class="navbar__brand">
        <img
          src="http://www.mega.co.tz/images/logo.png"
          alt="Mega Panels Logo"
          class="brand__img"
        />
      </div>
      <button class="menu__toggle" @click="toggleMenu">
        <span class="icon icon-menu5"></span>
      </button>
      <ul class="base-nav" id="base-nav">
        <li class="base-nav__item">
          <a href="/" class="base-nav__link">
            Home
          </a>
        </li>
        <li class="base-nav__item">
          <a href="/" class="base-nav__link">
            Projects
          </a>
        </li>
        <li class="base-nav__item">
          <a href="/" class="base-nav__link">
            Services
          </a>
        </li>
        <li class="base-nav__item">
          <a href="/" class="base-nav__link">
            About
          </a>
        </li>
        <li class="base-nav__item">
          <a href="/" class="base-nav__link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "base-header",

  methods: {
    toggleMenu() {
      const nav = document.querySelector("#base-nav");
      nav.classList.toggle("is-active");
    }
  }
};
</script>

<style lang="scss" scoped>
.base-header {
  padding: 0.5em 0.825rem;
  background: transparent;
  position: fixed;
  width: 100%;

  @include respond(tab-land) {
    background-color: transparent;
  }

  @include respond(desktop) {
    background-color: transparent;
  }

  .navbar {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    @include respond(tab-land) {
      flex-wrap: nowrap;
    }

    &__brand {
      height: 50px;
      width: auto;

      .brand__img {
        object-fit: cover;
        object-position: center;
        height: 100%;
        width: auto;
      }
    }

    .base-nav {
      flex: 0 0 100%;
      display: none;
      background-color: $secondary-color;
      margin-top: 0.825rem;

      @include respond(tab-land) {
        flex: 0 auto;
        display: flex;
        margin-left: auto;
        margin-top: 0;
        background-color: transparent;
      }

      &__item {
        list-style: none;
      }

      &__link {
        display: block;
        text-decoration: none;
        color: rgb(223, 217, 217);
        padding: 0.5em 1.2em;
        transition: all 0.5ms ease-in;

        &:hover {
          background-color: #fff;
          color: #333;
        }
      }
    }
  }
}

.menu__toggle {
  margin-left: auto;
  outline: none;
  display: flex;
  border: none;
  background: transparent;

  @include respond(tab-land) {
    display: none;
  }
  > * {
    margin: auto;
    font-size: 1.8rem;
  }

  &:hover {
    cursor: pointer;
  }
}

.is-active {
  display: block !important;
}
</style>
