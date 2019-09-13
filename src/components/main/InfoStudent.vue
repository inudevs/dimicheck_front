<script>
export default {
    name: 'InfoStudent'
}
</script>

<template>
    <div class="info">
        <div class="info__base">
            <div class="info__picture" id="pic">
                <img src="./../../assets/프사.jpg" id="profile">
            </div>
            <div class="info__name">
                1학년 6반 11번 문형일
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.info
{
    display: flex;
    border-radius: 0.5em 0.5em 0.5em 0.5em;
    margin: 0em 3em 0em 3em;
    background-color: #FFFFFF;
    height: 5em;

    &__base {
        margin: auto;
        padding: auto;
        width: 80%;
        height: 50%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    &__picture {
        margin: 0;
        width: 30%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    &__name {
        margin: 0;
        width: 70%;
        padding-left: 1rem;
        font-size: 1.3rem;
    }
}
#profile
{
    width: 50px;
    height: 50px;
    border: 1px solid #e7e7e7;
    border-radius: 50%;
    -o-object-fit: cover;
    object-fit: cover;
}
#pic {
    display: flex;
    justify-content: left;
}
</style>