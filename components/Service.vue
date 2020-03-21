<template>
  <div class="p-service">
    <ul class="p-service__items">
      <li class="p-service__item" data-aos="fade-up">
        <a href="/" class="p-service__link">
          <p class="p-service__text">客室1</p>
          <img src="~/assets/img/material01.jpg" alt />
        </a>
      </li>
      <li class="p-service__item" data-aos="fade-up">
        <a href="#" class="p-service__link">
          <p class="p-service__text">朝食</p>
          <img src="~/assets/img/material05.jpg" alt />
        </a>
      </li>
      <li class="p-service__item" data-aos="fade-up">
        <a href="#" class="p-service__link">
          <p class="p-service__text">夕食</p>
          <img src="~/assets/img/material03.jpg" alt />
        </a>
      </li>
      <li class="p-service__item" data-aos="fade-up">
        <a href="#" class="p-service__link">
          <p class="p-service__text">客室2</p>
          <img src="~/assets/img/material04.jpg" alt />
        </a>
      </li>
      <!-- <li class="p-service__item" data-aos="fade-up">
        <a href="#" class="p-service__link">
          <p class="p-service__text">客室3</p>
          <img src="~/assets/img/material02.jpg" alt />
        </a>
      </li>
      <li class="p-service__item" data-aos="fade-up">
        <a href="#" class="p-service__link">
          <p class="p-service__text">温泉</p>
          <img src="~/assets/img/material06.jpg" alt />
        </a>
      </li>-->
    </ul>
    <div class="btn-wrap" data-aos="zoom-in">
      <a href="/" class="btn">詳細を見る</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.p-service {
  &__items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @include md {
      flex-direction: column;
    }
  }
  &__item {
    width: calc(100% / 2 - 1%);
    overflow: hidden;
    &:nth-child(n + 3) {
      margin-top: 20px;
    }
    @include md {
      width: 100%;
      &:nth-child(n + 2) {
        margin-top: 20px;
      }
    }
  }
  &__item {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(#888, 0.8);
      opacity: 0;
    }
    &.aos-animate::before {
      animation-name: cover-slide;
      animation-iteration-count: 1;
      animation-duration: 1.6s;
      animation-fill-mode: forwards;
      animation-timing-function: ease-in-out;
      opacity: 1;
      // &:nth-of-type(even) {
      //   animation-delay: 6s;
      // }
    }
  }
  &__link {
    display: block;
    &::after {
      transition: all 0.3s;
      content: '';
      position: absolute;
      background-color: rgba(#000, 0.4);
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      opacity: 0;
    }
    img {
      transition: all 0.3s;
    }
    @media (min-width: $lg) {
      &:hover {
        &::after {
          opacity: 1;
        }
        .p-service__text {
          opacity: 1;
          transform: translate(-50%, -50%);
        }
        img {
          transform: scale(1.1);
        }
      }
    }
  }
  &__text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% + 20px));
    z-index: 2;
    color: #fff;
    font-weight: 600;
    opacity: 0;
    transition: all 0.3s;
  }
}
@keyframes cover-slide {
  0% {
    left: 0;
    right: 100%;
  }
  50% {
    left: 0;
    right: 0;
  }
  100% {
    left: 100%;
    right: 0;
  }
}
</style>