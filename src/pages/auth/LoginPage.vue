<template>
<div>
  <div class="main">
    <div class="main__left">
      <div class="login">
        <span class="login__maintitle">디미체크</span>
        <div class="login__form">
          <input type="text" placeholder="디미고인 아이디" class="login__id"><br>
          <input type="password" placeholder="디미고인 비밀번호" class="login__pw">
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
      winwidth: window.screen.availWidth,
      winheigth: window.screen.availHeight,
    }
  },
}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color:rgb(211, 211, 211);

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
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  @media (min-width: 440px) {
    width: 75%;
    margin-top: 10rem;
    float: right;
  }

  &__maintitle {
    margin-left: 0.1rem;
    font-size: 2.5rem;
    font-family: 'Black Han Sans', sans-serif;
    font-weight: 100;
    color: rgb(219, 124, 124);
    @media (min-width: 440px) {
      margin-left: 0.1rem;
      font-size: 3.5rem;
      font-family: 'Black Han Sans', sans-serif;
      font-weight: 100;
      color: rgb(219, 124, 124);
    }
  }

  &__form {
    margin-top: 0.5rem;
    @media (min-width: 440px) {
      margin-top: 3rem;
    }
  }

  // &__text {
  //   width: 100%;
  //   height: 3rem;
  //   margin-top: 0.5rem;
  //   margin-bottom: 0.5rem;
  //   margin-left: auto;
  //   margin-right: auto;
  //   background-color: rgb(243, 243, 243);
  //   border: 0.1em solid white;
  //   outline-style: none;
  //   padding-left: 1rem;
  // }

  &__id {
    width: 100%;
    height: 3rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    margin-left: auto;
    margin-right: auto;
    background-color: rgb(243, 243, 243);
    border: 0.1em solid white;
    border-radius: 0.3rem;
    outline-style: none;
    padding-left: 1rem;
    box-sizing: border-box;
  }

  &__pw {
    font-family: sans-serif;
    width: 100%;
    height: 3rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    margin-left: auto;
    margin-right: auto;
    background-color: rgb(243, 243, 243);
    border: 0.1em solid white;
    border-radius: 0.3rem;
    outline-style: none;
    padding-left: 1rem;
    box-sizing: border-box;
  }

  ::placeholder {
    color: rgb(146, 145, 145);
  }

  &__loginbutton {
    width: 100%;
    height: 3rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0.5rem;
    color: white;
    border-radius: 0.3rem;
    border: 0px;
    font-size: 1rem;
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
    }
  }

  &__dminbutton {
    color: gray;
    margin-left: auto;
    margin-top: 1.25rem;
    &:hover {
      cursor: pointer;
    }
  }
}

#dminlogo {
  width: 1rem;
}

.footer {
  background-color: rgb(231, 231, 231);
  margin-top: 1rem;
  height: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  &__copyright {
    color: gray;
    font-size: 1rem;
  }

  @media (max-width: 440px) {
    margin-top: 24rem;
  }
}

#backimg {
  width: 90%;
  margin-right: 2rem;
  margin-top: 8rem;
}
</style>
