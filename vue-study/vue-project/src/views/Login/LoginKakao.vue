<template>
    <div>
        <div id="custom-login-btn" @click="kakaoLogin()">
            <img src="../../assets/media/kakao_login/ko/kakao_login_large_narrow.png" alt="카카오로그인">
        </div>
        <br/>
        <button @click="kakaoLogout">로그아웃</button>
    </div>
</template>
<script>
export default {
    methods:{
        kakaoLogin(){
            window.Kakao.Auth.login({
                scope: 'profile_nickname, profile_image, account_email',
                success: this.getkakaoAccount
            })
        },
        getkakaoAccount(){
            window.Kakao.API.request({
                url: '/v2/user/me',
                success: res => {
                    const kakao_account = res.kakao_account;
                    const nickname = kakao_account.profile_nickname;
                    const email = kakao_account.email;
                    console.log('nickname:', nickname);
                    console.log('email:', email);
                },
                fail: error => {
                    console.log(error);
                }
            })
        },
        kakaoLogout(){
            window.Kakao.Auth.logout((response) =>{
                console.log('logout:', response);
            })
        }
    }
}
</script>
<style scoped>
    #custom-login-btn > img{
        width: 222px;
    }
</style>