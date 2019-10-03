<template>
<div class="main">
  <div class="main__left">
    <div class="loginform">
      <span class="loginform__textone">인원체크 도우미</span><br>
      <span class="loginform__texttwo">디미체크</span>
      <div class="loginbox">
        <input type="text" placeholder="디미고인 아이디" class="loginbox__text"><br>
        <input type="password" placeholder="디미고인 비밀번호" class="loginbox__text">
      </div>
      <span class="loginform__textbutton" @click="$router.push({name: 'main_page'})">
        디미고 계정으로 로그인
      </span><br>
      <button class="loginform__dminbutton" @click="openNewtap()">
        <img src="./../../assets/dimigoin_logo.png" id="dminlogo">
        디미고인 바로가기
      </button>
    </div>
  </div>
  <div class="main__right">
    <img src="./../../assets/loginpage_img.png" id="rightimg">
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
}
</script>

<style lang="scss" scoped>
@import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css);

#rightimg {
  width: 90%;
  height: auto;
  margin-top: 7rem;
}

.main {
  display: flex;
  flex-direction: row;

  &__left {
    width: 40%;
  }

  &__right {
    width: 60%;
  }
}

.loginform {
  margin-left: 8rem;
  margin-top: 9rem;
  width: 30rem;

  &__textone {
    font-size: 3rem;
    font-weight: 200;
   }

  &__texttwo {
    font-size: 4rem;
    font-weight: 400;
  }

  &__textbutton {
    float: right;
    font-size: 1rem;
    font-weight: 700;
    color: rgb(255, 81, 191);

    &:hover {
      cursor: pointer;
    }
  }

  &__dminbutton {
    margin-top: 6rem;
    width: 100%;
    text-align: left;
    font-size: 1rem;
    font-weight: 400;
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 0.4rem;
    border: 0.06em solid rgb(211, 211, 211);
    outline-style: none;

    &:hover {
      cursor: pointer;
    }
  }
}

.loginbox {
  margin-top: 3rem;

  &__text {
    width: 96%;
    height: 2.8rem;
    margin-top: 0.4rem;
    margin-bottom: 0.4rem;
    background-color: rgb(249, 249, 249);
    border-radius: 0.4rem;
    border: 0.1em solid white;
    padding-left: 1rem;
    outline-style: none;
  }

  ::placeholder {
    color: rgb(211, 211, 211);
    font-weight: 400;
  }
}

#dminlogo{
  width: 1.8rem;

}
</style>
