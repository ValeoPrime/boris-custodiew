<template>
  <nav class="header__navigation">
    <div class="header__content__search">
      <input class="search" type="text" />
      <img
        v-on:click="searchHandler"
        src="@/assets/img/icons/serch-icon.svg"
        alt="serch"
        class="search__icon"
      />
    </div>
    <ul class="navigation__list">
      <li class="navigation__list__item"><a href="#">биография</a></li>
      <li class="navigation__list__item"><a href="#">творчество</a></li>
      <li class="navigation__list__item"><a href="#">картины</a></li>
      <li class="navigation__list__item"><a href="#">музеи</a></li>
    </ul>

    <div class="hamburger-menu">
      <input id="menu__toggle" type="checkbox" />
      <label class="menu__btn" for="menu__toggle">
        <span></span>
      </label>

      <ul class="menu__box">
        <li class="navigation__list__item menu__item"><a  href="#">Биография</a></li>
        <li class="navigation__list__item menu__item"><a href="#">Творчество</a></li>
        <li class="navigation__list__item menu__item"><a href="#">Картины</a></li>
        <li class="navigation__list__item menu__item"><a href="#">Музеи</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    searchHandler: function() {
      const searchInput = document.querySelector(".search");
      const searchIcon = document.querySelector(".search__icon");

      searchInput.classList.toggle("show");
      searchIcon.classList.toggle("icon-show");
    },
  },
};
</script>

<style lang="sass">
.header__navigation
  position: absolute
  top: 0
  width: 100%
  display: flex
  align-items: center
  justify-content: space-between
  padding: 40px 100px 40px 80px
  .header__content__search
    position: relative
    input
      width: 0px
      outline: none
      border: none
      background-color: inherit
      color: #fff
      transition: all 1.5s
    .show
      width: 170px
      padding: 5px 25px 5px 5px
      border-bottom: 1px solid #F5F5F5;
    .icon-show
      position: absolute
      right: 0px

  .search__icon
    cursor: pointer
    transition: position 1.5s
  .navigation__list
    display: flex
    font-family: Helvetica, sans-serif
    font-size: 14px;
    line-height: 16px;
    .navigation__list__item + .navigation__list__item
      margin-left: 20px
  .hamburger-menu
    display: none

#menu__toggle
  opacity: 0;

#menu__toggle:checked ~ .menu__btn > span
  transform: rotate(45deg);

#menu__toggle:checked ~ .menu__btn > span::before
  top: 0;
  transform: rotate(0);

#menu__toggle:checked ~ .menu__btn > span::after
  top: 0;
  transform: rotate(90deg);

#menu__toggle:checked ~ .menu__box
  visibility: visible;
  left: 0;


.menu__btn
  display: flex;
  align-items: center;
  position: absolute;
  top: 32px;
  right: 20px;
  width: 24px;
  height: 14px;
  cursor: pointer;
  z-index: 1;


.menu__btn > span,
.menu__btn > span::before,
.menu__btn > span::after
  display: block;
  position: absolute;
  width: 100%;
  height: 2px;
  border-radius: 1px;
  background: #F5F5F5;
  transition-duration: .25s;

.menu__btn > span::before
  content: '';
  top: -8px;

.menu__btn > span::after
  content: '';
  top: 8px;


.menu__box
  display: block;
  position: fixed;
  visibility: hidden;
  top: 0;
  left: -100%;
  width: 280px;
  height: 100%;
  margin: 0;
  padding: 80px 0;
  list-style: none;
  background-color: #ECEFF1;
  box-shadow: 1px 0px 6px rgba(0, 0, 0, .2);
  transition-duration: .25s;
  z-index: 10


.menu__item
  display: block;
  padding: 12px 24px;
  font-family: Helvetica, sans-serif
  color: #333;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  transition-duration: .25s;

.menu__item:hover
  background-color: #CFD8DC;

@media screen and (max-width: 768px)
  .header__navigation
    padding: 50px 20px
    .navigation__list
      font-size: 18px;

@media screen and (max-width: 550px)
  .header__navigation
    padding: 30px 20px
    .hamburger-menu
      display: block
    .navigation__list
      display: none
</style>
