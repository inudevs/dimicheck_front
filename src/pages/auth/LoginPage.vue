@import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css);
<template>
<div>
<div class="loginform">
  <span class="loginform__textone">인원체크 도우미</span><br>
  <span class="loginform__texttwo">디미체크</span>
  <div class="loginbox">
    <input type="text" placeholder="디미고인 아이디" class="loginbox__text"><br>
    <input type="password" placeholder="디미고인 비밀번호" class="loginbox__text">
  </div>
  <span class="loginform__textbutton" @click="$router.push({name: 'main_page'})">디미고 계정으로 로그인</span>
  <button  class="dimigoin" onclick="window.open('https://dimigo.in') "><img src="./../../assets/dimigoin_logo.png" class="dimigoinimg">디미고인 바로가기</button>
</div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.loginform{
  margin-left: 8em;
  margin-top: 9em;
  width: 370px;
  &__textone{
    font-size: 3em;
    font-family: 'NanumSquare',sans-serif;
    font-weight: 200;
  }
  &__texttwo{
    font-size: 4em;
    font-family: 'NanumSquare',sans-serif;
    font-weight: 400;
  }
  &__textbutton{
    float: right;
    font-size: 1em;
    font-family: 'NanumSquare',sans-serif;
    font-weight: 700;
    color: rgb(255, 81, 191);
    &:hover{
      cursor: pointer;
    }
  }
}
.loginbox{
  margin-top: 3em;
  &__text{
    width: 100%;
    height: 2.8em;
    margin-top: 0.4em;
    margin-bottom: 0.4em;
    background-color: rgb(249, 249, 249);
    border-radius: 0.4em;
    border: 0.1em solid white;
    padding-left: 1em;
    outline-style: none;
    
  }
  ::placeholder{
    color: rgb(211, 211, 211);
    font-family: 'NanumSquare',sans-serif;
    font-weight: 400;
  }
}

.dimigoin{
  background-color:#ffffff;
  border:1px solid #cbcbcb;
  font-family: 'NanumSquare',sans-serif;
  font-weight: 400;
  font-size:1em;
  border-radius: 0.4em;
  width:104%;
  margin-top:6rem;
}

.dimigoinimg{
  width:34px;
 vertical-align: bottom;
 margin:auto;
 float:left;
}

*:focus { outline:none; }
</style>
