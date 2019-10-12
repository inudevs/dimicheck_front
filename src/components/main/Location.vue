<script>
export default {
  props: {
    location: {
      type: Array,
      default: () => ['교실', '교실'],
    },
  },
}
</script>

<template>
  <div class="location">
    <div class="location__content">
      <div class="location__top">
        내 위치 선택
      </div>
      <div class="location__col">
        <div
          class="location__row"
          v-for="time in 2"
          :key="`row-${time}`"
        >
          <span class="location__time">{{ `${time}타임` }}</span>
          <span
            class="location__loc"
            v-for="(item, idx) in ['교실', '인강실', '동아리', '기타']"
            :key="idx"
            :class="{ selected: (item === location[time - 1]) }"
          >
            {{ item }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.location {
  background-color: white;
  border-radius: 6px;
  display: flex;
  flex: 1;
  font-weight: 700;

  &__content {
    width: 100%;
    font-size: 19px;
  }

  &__top {
    border-bottom: 1px solid #E8E8E8;
    display: flex;
    justify-content: center;
    padding: 0.7rem 0;
  }

  &__col {
    display: flex;
    flex-direction: column;
    padding: 0 2.2rem;
  }

  &__row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid #E8E8E8;
    padding: 1.1rem 0;

    &:last-child {
      border: none;
    }
  }

  &__loc {
    color: #444242;
    cursor: pointer;

    &.selected {
      color: #E83C3D;
      font-weight: 800;
    }
  }
}
</style>
