<template>
  <div class="p-main-visual">
    <swiper :options="swiperOption">
      <swiper-slide>
        <img src="~/assets/img/mv-01.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="~/assets/img/mv-02.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="~/assets/img/mv-03.jpg" alt />
      </swiper-slide>
    </swiper>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        effect: 'coverflow',
        grabCursor: true,
        loopAdditionalSlides: 1,
        slidesPerView: 1.3,
        loop: true,
        centeredSlides: true,
        speed: 1000,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        breakpoints: {
          1044: {
            slidesPerView: 1
          }
        }
      }
    }
  }
}
</script>

<style lang="scss">
.p-main-visual {
  padding: 147px 0 100px;
  // padding: 0 0 100px;
  @include lg {
    padding: 117px 0 80px;
  }
  @include md {
    padding: 90px 0 70px;
  }
  @include sm {
    padding: 70px 0 60px;
  }
}
.swiper-slide {
  text-align: center;
  img {
    width: 100%;
    height: 70vh;
    @include lg {
      height: 55vh;
    }
    @include sm {
      height: 45vh;
    }
  }
}
.swiper-pagination {
  margin-top: 30px;
  left: 0;
  right: 0;
  @include lg {
    margin-top: 15px;
  }
  .swiper-pagination-bullet {
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: $gray-4;
    border-radius: 100%;
    opacity: 1;
    margin: 0 10px;
    @include lg {
      width: 15px;
      height: 15px;
    }
    @include sm {
      width: 10px;
      height: 10px;
    }
  }
  .swiper-pagination-bullet-active {
    background-color: $brown-1;
  }
}
</style>
