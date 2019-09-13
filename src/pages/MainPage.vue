<script>
import InfoStudent from '@/components/main/InfoStudent'
import MyLocate from '@/components/main/MyLocate'
import MainNotice from '@/components/main/MainNotice'

export default {
  name: 'Main',
  components: {
    InfoStudent,
    MyLocate,
    MainNotice
  }
}
</script>

<template>
<div id="back">
  <div class="page">
    
    <div class="page__top">
      <div class="page__left">
        <info-student />
        <my-locate />
      </div>
      <div class="page__right">
        <main-notice />
      </div>
    </div>

    <div class="page__bottom">

    </div>
  </div>
</div>
  </template>

<style lang="scss" scoped>
#back
{
  height: 58em;
  background-color: #F5F5F5;
}

.page
{
  width: 60%;
  margin: auto;
  display: flex;

  &__top {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 10em;
    height: 25em;
  }

  &__bottom {
  }

  &__left {
    margin: 0;
    width: 50%;
  }

  &__right {
    margin: 0;
    width: 50%;
  }
}
</style>
