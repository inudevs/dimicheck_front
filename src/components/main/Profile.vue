<template>
  <div class="profile">
    <div class="profile__left">
      <img
        class="profile__image"
        :src="require('../../assets/profile.jpg')"
      />
      <span class="profile__serial">1학년 6반</span>
      <span class="profile__name">문형일</span>
    </div>
    <div class="profile__right">
      <img
        class="profile__icon"
        :src="require('../../assets/icons/cog-solid.svg')"
      />
      <img
        class="profile__icon"
        :src="require('../../assets/icons/power-off-solid.svg')"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.profile {
  background-color: white;
  border-radius: 6px;
  padding: 1.2rem 1.5rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  &__image {
    height: 50px;
    width: 50px;
    border-radius: 25px;
    margin-right: 16px;
  }

  &__left {
    display: flex;
    align-items: center;
  }

  span {
    font-size: 17px;
  }

  &__serial {
    color: #434242;
    margin-right: 13px;
  }

  &__name {
    font-weight: 700;
  }

  &__right {
    display: flex;
    align-items: center;
  }

  &__icon {
    height: 20px;
    width: 20px;

    &:first-child {
      margin-right: 1rem;
    }
  }
}
</style>
