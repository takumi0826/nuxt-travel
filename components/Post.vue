<template>
  <div class="p-post" data-aos="fade-up">
    <ul class="p-post__catItems">
      <li
        id="cooking"
        class="p-post__catItem"
        @click="tabChange(1)"
        :class="{ 'is-active': tabNumber === 1 }"
      >お料理</li>
      <li
        id="rooms"
        class="p-post__catItem"
        @click="tabChange(2)"
        :class="{ 'is-active': tabNumber === 2 }"
      >客室</li>
      <li
        id="access"
        class="p-post__catItem"
        @click="tabChange(3)"
        :class="{ 'is-active': tabNumber === 3 }"
      >交通</li>
    </ul>
    <ul class="p-post__contents">
      <li class="p-post__content" v-if="tabNumber === 1">
        <div class="p-post__contentBlock">
          <span class="p-post__date">2020.01.12</span>
          <h3 class="p-post__title">テキスト1テキスト1テキスト1</h3>
        </div>
        <div class="p-post__contentBlock">
          <span class="p-post__date">2020.01.12</span>
          <h3 class="p-post__title">テキスト1テキスト1テキスト1</h3>
        </div>
        <div class="p-post__contentBlock">
          <span class="p-post__date">2020.01.12</span>
          <h3 class="p-post__title">テキスト1テキスト1テキスト1</h3>
        </div>
        <div class="p-post__btnWrap">
          <a href="/topic" class="c-button">一覧を見る</a>
        </div>
      </li>
      <li class="p-post__content" v-if="tabNumber === 2">
        <div class="p-post__contentBlock">
          <span class="p-post__date">2020.01.12</span>
          <h3 class="p-post__title">テキスト2テキスト2テキスト2</h3>
        </div>
        <div class="p-post__contentBlock">
          <span class="p-post__date">2020.01.12</span>
          <h3 class="p-post__title">テキスト2テキスト2テキスト2</h3>
        </div>
        <div class="p-post__contentBlock">
          <span class="p-post__date">2020.01.12</span>
          <h3 class="p-post__title">テキスト2テキスト2テキスト2</h3>
        </div>
        <div class="p-post__btnWrap">
          <a href="/news" class="c-button">一覧を見る</a>
        </div>
      </li>
      <li class="p-post__content" v-if="tabNumber === 3">
        <div class="p-post__contentBlock">
          <span class="p-post__date">2020.01.12</span>
          <h3 class="p-post__title">テキスト3テキスト3テキスト3</h3>
        </div>
        <div class="p-post__contentBlock">
          <span class="p-post__date">2020.01.12</span>
          <h3 class="p-post__title">テキスト3テキスト3テキスト3</h3>
        </div>
        <div class="p-post__contentBlock">
          <span class="p-post__date">2020.01.12</span>
          <h3 class="p-post__title">テキスト3テキスト3テキスト3</h3>
        </div>
        <div class="p-post__btnWrap">
          <a href="/column" class="c-button">一覧を見る</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  computed: {
    tabNumber() {
      return this.$store.state.tabNumber
    }
  },
  methods: {
    ...mapMutations(['tabChange'])
  }
}
</script>

<style lang="scss">
.p-post {
  padding-bottom: 60px;
  background-color: #fff;
  @include sm {
    margin: 0 -20px;
  }
  &__catItems {
    display: flex;
  }
  &__catItem {
    background-color: #f0efef;
    width: calc(100% / 3);
    text-align: center;
    transition: all 0.3s;
    position: relative;
    font-size: 2.4rem;
    padding: 30px 0;
    @include xl {
      padding: 20px 0;
      font-size: 1.8rem;
    }
    @include sm {
      padding: 16px 0;
    }
    &.is-active {
      color: #fff;
      background-color: $brown-1;
      position: relative;
      &::before {
        content: '';
        display: inline-block;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 8px 8.5px 0 8.5px;
        border-color: $brown-1 transparent transparent transparent;
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translate(-50%, 100%);
      }
    }
  }
  &__list {
    padding: 40px;
    background-color: #fff;
    @include sm {
      padding: 30px 20px;
    }
  }
  &__contents {
    padding: 20px 80px 0;
    @include sm {
      padding: 20px 20px 0;
    }
  }
  &__content {
  }
  &__contentBlock {
    padding: 24px 0;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
    &:last-child {
      border-bottom: none;
    }
    @include sm {
      padding: 16px 0;
      flex-direction: column;
    }
  }
  &__date {
    font-size: 1.4rem;
    color: #969696;
    width: 96px;
    @include sm {
      width: 100%;
    }
  }
  &__title {
    @include sm {
      display: block;
      width: 100%;
      margin-top: 8px;
    }
  }
  &__btnWrap {
    margin-top: 30px;
    text-align: center;
  }
  .c-button {
    display: inline-block;
    border-radius: 25px;
    border: 1px solid #eee;
    width: 260px;
    line-height: 50px;
    position: relative;
    overflow: hidden;
    z-index: 0;
    transition: all 0.3s;
    @include lg {
      background-color: $brown-1;
      color: #fff;
      border: 1px solid $brown-1;
    }
    @media (min-width: $lg) {
      &:after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: $brown-1;
        transform: translateX(-100%);
        z-index: -1;
        transition: all 0.3s ease;
        opacity: 0;
      }
      &:hover {
        color: #fff;
        border: 1px solid $brown-1;
        &::after {
          transform: none;
          opacity: 1;
        }
      }
    }
  }
}
</style>

