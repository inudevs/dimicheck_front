<template>
<div>
  <div class="main">
    <div class="main__left">
      <div class="login">
        <span class="login__subtitle" v-if="winwidth > 500">인원체크 도우미</span><br>
        <span class="login__maintitle">디미체크</span>
        <div class="login__form">
          <input type="text" placeholder="디미고인 아이디" class="login__text"><br>
          <input type="password" placeholder="디미고인 비밀번호" class="login__text">
        </div>
        <span class="login__loginbutton" @click="$router.push({name: 'main_page'})">
        디미고 계정으로 로그인
        </span><br>
        <button class="login__dminbutton" @click="openNewtap()">
          <img src="./../../assets/dimigoin_logo.png" id="dminlogo">
          디미고인 바로가기
        </button>
      </div>
    </div>
    <div class="main__right">
      <span>하핫</span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    openNewtap() {
      window.open('https://dimigo.in')
    },
  },
  data() {
    return {
      winwidth: screen.availWidth,
    }
  },
}
</script>

<style lang="scss" scoped>
@import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css);
@import url('https://fonts.googleapis.com/css?family=Black+Han+Sans&display=swap&subset=korean');

.main {
  display: flex;
  flex-direction: column;

  @media (min-width: 440px) {
    display: flex;
    flex-direction: row;
  }

  &__left {
    width: 100%;

    @media (min-width: 440px) {
      width: 40%
    }
  }

  &__right {
    width: 100%;
    @media (min-width: 440px) {
      width: 60%
    }
  }
}

.login {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1em;

  &__subtitle {
    margin-left: 0.4em;
    font-size: 1em;
    font-family: 'NanumSquare', sans-serif;
    font-weight: 600;
  }

  &__maintitle {
    margin-left: 0.1em;
    font-size: 2em;
    font-family: 'Black Han Sans', sans-serif;
    font-weight: 100;
    color: rgb(219, 124, 124);
  }

  &__text {
    width: 90%;
    height: 2.8em;
    margin-top: 0.4em;
    margin-bottom: 0.4em;
    margin-left: auto;
    margin-right: auto;
    background-color: rgb(243, 243, 243);
    border: 0.1em solid white;
    outline-style: none;
    //border-radius로 인해 글자 + 인풋 밀어야됨
    //placeholder에 하면 인풋하는게 안밀리고, 여기다 밀면 둘다 밀리지만 div크기보다 커짐
    padding-left: 1em;
  }

  &__loginbutton {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    color: white;
    font-family: 'NanumSquare',sans-serif;
    background-color: rgb(219, 124, 124);
  }

  //::placeholder{ padding-left: 1em; }
}

#dminlogo {
  width: 1em;
}
</style>
