<template>
<div>
  <div class="mainform">
    <ul class="mainform__list">
      <li class="mainform__item" id="hover" @click="$router.push({name: 'student'})">

    </li>
    <li class="mainform__item" id="hover" @click="$router.push({name: 'student'})">

    </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css);

.mainform {
  margin-left: 8em;
  margin-top: 5em;
  width: 370px;

  &__list {
    display: grid;
    grid-column-gap: 2em;
    grid-row-gap: 2em;
    grid-template-columns: 14em 14em 14em 14em;
    grid-template-rows: 14em 14em 14em;

  }

  &__item {
    display: block;
    padding: 1.5em;
    box-shadow: 10px 15px 20px 10px rgb(231, 231, 231);
    border-radius: 1.5em 1.5em 1.5em 1.5em;
    cursor: pointer;
  }
}
</style>
