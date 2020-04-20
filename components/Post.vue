<template>
  <div class="p-post" data-aos="fade-up">
    <ul class="p-post__catItems">
      <li
        v-for="(tab, index) in tabs"
        :key="index"
        :id="tab.id"
        :class="['p-post__catItem',{ 'is-active': tab.id === currentTab }]"
        @click="tabChange(tab.id)"
      >{{ tab.title }}</li>
    </ul>
    <div class="p-post__contents">
      <template v-for="post in postData">
        <div class="p-post__content" v-if="post.id === currentTab" :key="post.id">
          <div class="p-post__block" v-for="(list,index) in post.item" :key="index">
            <span class="p-post__date">{{list.date}}</span>
            <h3 class="p-post__title">{{list.text}}</h3>
          </div>
          <div class="p-post__btnWrap">
            <nuxt-link :to="post.href" class="c-button">一覧を見る</nuxt-link>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  data() {
    return {
      tabs: [
        { title: 'お料理', id: 'cooking' },
        { title: '客室', id: 'rooms' },
        { title: '交通', id: 'access' }
      ],
      postData: [
        {
          id: 'cooking',
          href: '/',
          item: [
            { date: '2020.04.17', text: 'テキスト１テキスト１' },
            { date: '2020.04.09', text: 'テキスト１' },
            { date: '2020.02.21', text: 'テキスト１テキスト１' }
          ]
        },
        {
          id: 'rooms',
          href: '/',
          item: [
            { date: '2020.04.11', text: 'テキスト2' },
            { date: '2020.03.21', text: 'テキスト2テキスト2テキスト2' },
            { date: '2020.02.01', text: 'テキスト2テキスト2' }
          ]
        },
        {
          id: 'access',
          href: '/',
          item: [
            { date: '2020.01.01', text: 'テキスト3テキスト3' },
            { date: '2019.12.21', text: 'テキスト3テキスト3テキスト3' },
            { date: '2019.11.11', text: 'テキスト3' }
          ]
        }
      ]
    }
  },
  computed: {
    ...mapState(['currentTab'])
  },
  methods: {
    ...mapMutations(['tabChange'])
  }
}
</script>

<style lang="scss">
.p-post {
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
    padding: 25px 0;
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
    padding: 40px 80px 60px;
    @include sm {
      padding: 20px 20px 40px;
    }
  }

  &__content {
  }

  &__block {
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
</style>

