<script>
import { format } from 'date-fns'

export default {
  props: {
    notice: {
      type: Array,
      default: () => [],
    },
  },
  filters: {
    filterDate: time => format(time, 'MM월 dd일'),
  },
}
</script>

<template>
  <div class="notice">
    <div class="notice__list">
      <div
        class="notice__item"
        v-for="(item, idx) in notice"
        :key="idx"
      >
        <span class="notice__date">{{ item.date | filterDate }}</span>
        <span class="notice__content">{{ item.content }}</span>
      </div>
    </div>
    <div class="notice__bottom">
      공지사항 더보기
    </div>
  </div>
</template>

<style lang="scss" scoped>
.notice {
  background-color: white;
  border-radius: 6px;
  display: flex;
  flex: 1;
  flex-direction: column;

  &__list {
    display: flex;
    flex-direction: column;
    padding: 1.6rem 1.2rem;
  }

  &__item {
    padding-bottom: 1rem;

    &:first-child {

      .notice__date,
      .notice__content {
        color: #444242;
        font-weight: 700;
      }
    }

    &:last-child {
      padding: 0;
    }
  }

  &__date {
    color: #707070;
    font-size: 19px;
    margin-right: 31px;
  }

  &__content {
    color: #707070;
    font-size: 16px;
  }

  &__bottom {
    cursor: pointer;
    display: flex;
    justify-content: center;
    margin-top: auto;
    font-size: 15px;
    font-weight: 700;
    padding: 0.9rem 0;
    border-top: 1px solid #E8E8E8;
  }
}
</style>
