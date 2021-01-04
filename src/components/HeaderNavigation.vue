<template>
  <nav class="header__navigation">
    <div class="header__content__search">
      <img src="@/assets/img/serch-icon.svg" alt="serch" class="search__icon" />
    </div>
    <ul class="navigation__list">
      <li class="navigation__list__item"><a href="#">биография</a></li>
      <li class="navigation__list__item"><a href="#">творчество</a></li>
      <li class="navigation__list__item"><a href="#">картины</a></li>
      <li class="navigation__list__item"><a href="#">музеи</a></li>
    </ul>
  </nav>
</template>

<style lang="sass">
.header__navigation
  position: absolute
  top: 0
  width: 100%
  display: flex
  align-items: center
  justify-content: space-between
  padding: 40px 100px 40px 80px
  .navigation__list
    display: flex
    font-family: Helvetica, sans-serif
    font-size: 14px;
    line-height: 16px;
    .navigation__list__item + .navigation__list__item
      margin-left: 20px
</style>
