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
    }
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

    </div>
  </div>
</div>
  </template>

<style lang="scss" scoped>
#back {
  background-color: #F5F5F5;
}

.page {
  width: 60%;
  margin: auto;
  display: flex;

  &__top {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 10em;
    height: 18em;
  }

  section {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: stretch;
    margin: .5rem;
  }
}
</style>
