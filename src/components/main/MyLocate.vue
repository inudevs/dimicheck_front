<script>
export default {
  name: 'MyLocate',
}
</script>

<template>
    <div class="base">
        <div class='title'>
            <p class='title__fonts'>
                내 위치
            </p>
        </div>
        <div class='content'>

        </div>
    </div>
</template>

<style lang="scss" scoped>
@import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css);
@import url('https://fonts.googleapis.com/css?family=Black+Han+Sans&display=swap&subset=korean');
.base
{
    border-radius: 0.5em 0.5em 0.5em 0.5em;
    margin: 2em 3em 0em 3em;
    background-color: #FFFFFF;
    height: 15em;
    display: flex;
    flex-direction: column;
}

.title{
    flex: 3;
    justify-content: center;
    align-content: center;
    border-bottom: 0.1rem solid;
    &__fonts{
        font-family: 'NanumSquare', sans-serif;
        font-size: 20px;
        text-align: center;
        padding-top: 0.4rem;
        padding-bottom: 0.1rem;
    }
}

.content{
    flex: 7;
}

</style>
