<template>
<div>
  <div class="main">
    <div class="main__left">
      <div class="login">
        <span class="login__maintitle">디미체크</span>
        <div class="login__form">
          <input type="text" placeholder="디미고인 아이디" class="login__text"><br>
          <input type="password" placeholder="디미고인 비밀번호" class="login__text">
        </div>
        <button class="login__loginbutton" @click="$router.push({name: 'mainpage'})">
          로그인
        </button>
        <span class="login__dminbutton" @click="openNewtap()">
          디미고인 바로가기
        </span>
      </div>
    </div>
    <div class="main__right" v-if="winwidth > 500">
      <img src="./../../assets/loginpage_img.png" id="backimg">
    </div>
  </div>
  <div class="footer">
    <span class="footer__copyright">COPYRIGHT (c) 2019.Team INU</span>
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
      winheigth: screen.availHeight
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
  justify-content: center;

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
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3em;
  display: flex;
  flex-direction: column;
  @media (min-width: 440px) {
    width: 75%;
    margin-top: 10em;
    float: right;
  }

  &__maintitle {
    margin-left: 0.1em;
    font-size: 2.5em;
    font-family: 'Black Han Sans', sans-serif;
    font-weight: 100;
    color: rgb(219, 124, 124);
    @media (min-width: 440px) {
      margin-left: 0.1em;
      font-size: 3.5em;
      font-family: 'Black Han Sans', sans-serif;
      font-weight: 100;
      color: rgb(219, 124, 124);
    }
  }

  &__form {
    margin-top: 0.5em;
    @media (min-width: 440px) {
      margin-top: 3em;
    }
  }

  &__text {
    width: 100%;
    height: 3em;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    margin-left: auto;
    margin-right: auto;
    background-color: rgb(243, 243, 243);
    border: 0.1em solid white;
    outline-style: none;
    font-family: 'NanumSquare', sans-serif;
    padding-left: 1em;
  }

  // ::placeholder { 
  //   padding-left: 1em;
  //   color: rgb(146, 145, 145);
  //   font-family: 'NanumSquare', sans-serif; 
  // }

  &__loginbutton {
    width: 100%;
    height: 3em;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1em;
    color: white;
    border-radius: 0.3em;
    border: 0px;
    font-family: 'NanumSquare', sans-serif;
    font-size: 1em;
    font-weight: 500;
    background-color: rgb(218, 129, 129);

    &:hover {
      transition-property: background-color, color;
      transition-duration: 200ms;
      transition-timing-function: ease-out;
      cursor: pointer;
      background-color: rgb(214, 103, 103);
      color: white;
    }

    @media (min-width: 440px) {
      transition-property: background-color, color;
      transition-duration: 200ms;
      transition-timing-function: ease-out;
      margin-top: 0
    }
  }

  &__dminbutton {
    font-family: 'NanumSquare', sans-serif;
    color: gray;
    margin-left: auto;
    margin-top: 1em;
    &:hover {
      cursor: pointer;
    }
    @media (min-width: 440px) {
      margin-top: 3em;
    }
  }
}

#dminlogo {
  width: 1em;
}

.footer {
  background-color: rgb(231, 231, 231);
  margin-top: 1em;
  height: 7em;
  display: flex;
  justify-content: center;
  align-items: center;
  &__copyright {
    font-family: 'NanumSquare', sans-serif;
    color: gray;
    font-size: 1em;
  }

  @media (max-width: 440px) {
    margin-top: 24em;
  }
}

#backimg {
  width: 90%;
  margin-right: 2em;
  margin-top: 8em;
}
</style>
