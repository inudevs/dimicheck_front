<script>
import Location from '@/components/main/Location.vue'
import Notice from '@/components/main/Notice.vue'
import Profile from '@/components/main/Profile.vue'

export default {
  name: 'Main',
  components: {
    Location,
    Notice,
    Profile,
  },
  data() {
    return {
      notice: [
        { date: new Date(), content: '국어 수능특강 검사' },
        { date: new Date(), content: '국어 수능특강 검사' },
        { date: new Date(), content: '국어 수능특강 검사' },
        { date: new Date(), content: '국어 수능특강 검사' },
        { date: new Date(), content: '국어 수능특강 검사' },
      ],
      tab: 0,
    }
  },
  computed: {
    today() {
      return this.$moment().format('YYYY년 MM월 DD일 dddd')
    },
  },
}
</script>

<template>
<div id="back">
  <div class="page">

    <div class="page__top">
      <section>
        <Profile />
        <Location />
      </section>
      <section>
        <Notice :notice="notice" />
      </section>
    </div>

    <div class="page__bottom">
      <div class="page__bottom-header">
        <span class="page__bottom-header-date">{{ today }}</span>
        <span class="page__bottom-header-select">번호로 보기</span>
      </div>
      <div class="page__bottom-content">
        <div class="page__list">
          <span
            class="page__tab"
            v-for="time in 2"
            :key="`tab-0-${time}`"
            :class="{ selected: tab === (time - 1) }"
          >
            {{ time }}타임
          </span>
        </div>
        <div class="page__list-wrap">
          <div class="page__list">
            <span
              class="page__header"
              v-for="(item, idx) in ['교실', '인강실', '동아리', '기타']"
              :key="`tab-1-${idx}`"
            >
              {{ item }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  </template>

<style lang="scss" scoped>
#back {
  background-color: #F5F5F5;
  height: 100vh;
  padding: 5rem 0;
}

.page {
  width: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;

  &__top {
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  &__bottom {

    &-header {
      margin-top: 1.5rem;
      margin-bottom: 0.8rem;
      display: flex;
      justify-content: space-between;

      &-date {
        font-weight: 700;
        font-size: 1.2rem;
      }
    }

    &-content {
      display: flex;
      flex-direction: column;
      background-color: white;
      box-shadow: 14px 10px 32px -19px rgba(0,0,0,0.17);
      border-radius: 6px;
    }
  }

  &__list {
    padding-top: 0.1rem;
    display: flex;
    justify-content: space-evenly;
    border-bottom: 1px solid #E8E8E8;
  }

  &_list-wrap {
    padding: 0 1.2rem;
  }

  &__tab {
    padding: 0.8rem 2.5rem;
    border-bottom: 1px solid transparent;
    font-weight: 700;
    color: #707070;

    &.selected {
      color: #E83C3D;
      border-bottom: 3px solid #E83C3D;
    }
  }

  section {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: stretch;

    &:first-child {
      margin-right: 1rem;
    }
  }
}
</style>
