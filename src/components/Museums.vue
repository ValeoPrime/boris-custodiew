<template>
  <div class="container">
    <h2 class="museums__title">музеи</h2>
    <div id="map" style="width: 100%; height: 514px"></div>
    <div class="museums__adresses">
      <div class="museum__adress">
        <h4 class="museum__title"> <a href="#">Русский музей</a> </h4>
        <div class="musseum__adress__descr">
          191186, Санкт-Петербург, <br> Инженерная ул., 4, <br> +7 (812) 595-42-40
        </div>
      </div>
      <div class="museum__adress">
        <h4 class="museum__title"> <a href="#">Третьяковская галерея</a> </h4>
        <div class="musseum__adress__descr">
          119017, Москва, <br> Лаврушинский переулок,10 <br> +7 (495) 957-07-27
        </div>
      </div>
      <div class="museum__adress">
        <h4 class="museum__title"> <a href="#">Мультимедиа Арт Музей</a> </h4>
        <div class="musseum__adress__descr">
          105064, Москва, <br> Гороховский переулок, 7 <br> +7 (495) 632–16–81
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created: function() {
    ymaps.ready(function() {
      var myMap = new ymaps.Map(
          "map",
          {
            center: [59.935291, 30.31184],
            zoom: 14,
            controls: [],
          },
          {
            searchControlProvider: "yandex#search",
          }
        ),
        myPlacemark = new ymaps.Placemark(
          [59.939204, 30.332253],
          {
            hintContent: "Русский музей",
          },
          {
            iconLayout: "default#image",
            iconImageHref: "./img/icons/MapMarker.svg",
            iconImageSize: [30, 40],
          }
        );

      myMap.geoObjects.add(myPlacemark);
    });
  },
};
</script>

<style lang="sass" scoped>
.container
    display: flex
    flex-direction: column
.museums__title
    font-family: Yeseva One,sans-serif
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 40px;
    text-align: center
    margin: 0 auto
    padding: 40px 0
    color: #202020;
.museums__adresses
    width: 940px
    margin: 0 auto
    padding: 40px 0 100px
    display: flex
.museum__adress
    padding-left: 40px
    padding-right: 70px
.museum__adress + .museum__adress
    border-left: 1px solid #E5E5E5;
.museum__title
    font-family: Helvetica-Bold, sans-serif
    font-size: 16px;
    line-height: 26px;
    color: #202020;
    padding-left: 30px
    position: relative
    &::after
        content: ""
        position: absolute
        top: 4px
        left: 0
        width: 14px
        height: 18px
        background-image: url("~@/assets/img/icons/AdressMarker--Min.svg")
.musseum__adress__descr
    font-family: Helvetica;
    font-size: 14px;
    line-height: 24px;
    color: #BFBFBF;
    margin-top: 20px

@media screen and (max-width: 1024px)
  .museums__adresses
    margin: 0 auto
    min-width: 320px
    max-width: 100%
    padding: 40px 0 100px
    display: flex
    justify-content: center
    align-items: center
  .museum__adress
      padding-left: 30px
      padding-right: 30px
@media screen and (max-width: 910px)
  .museums__adresses
    padding: 0 0 100px
    flex-direction: column
  .museum__adress
      padding-top: 40px
      padding-left: 25px
      padding-right: 80px
      padding-bottom: 40px
      width: 320px
  .museum__adress
      border-left: 0
      border-bottom: 1px solid #E5E5E5;

</style>
