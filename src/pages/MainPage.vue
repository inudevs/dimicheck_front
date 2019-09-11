<template>
<div>
  <div class="top">
    <div class="top__left">
      <div class="userinfo">
        <span>안녕하세요</span>
      </div>
    </div>
    <div class="top__right">

    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css);

.top {
  margin-left: auto;
  margin-right: auto;
  margin-top: 5rem;
  display: flex;
  width: 80%;

  &__left {
    width: 50%;
    background-color: green;
  }

  &__right {
    width: 50%;
    background-color: yellow;
  }
}
</style>
