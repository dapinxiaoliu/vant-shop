<template>
	<div class="login">
		<div class="login-container">
		    <!--登录面板内容部分-->
		    <div class="login-inner">
		        <!--面板头部-->
		        <div class="login-header">
		            <div class="login-logo">
		                <!-- <img src="./images/lk_logo_sm.png" alt="" width="300"> -->
		            </div>
		            <!--面板标题-->
		            <div class="login-header-title">
		                <a href="javascript:;" :class="{current:showLogin}" @click="changeLogin(true)">手机登录</a>
		                <a href="javascript:;" :class="{current:!showLogin}"  @click="changeLogin(false)">密码登录</a>
		            </div>
		        </div>
		        <!--面板表单部分-->
		        <div class="login-content">
		            <form>
		                <!--手机验证码登录部分-->
		                <div class="current" v-if="showLogin" >
		                    <section class="login-message">
		                        <input type="number" maxlength="11" placeholder="手机号"  v-model="phone" >
		                        <button v-if="!codeDown" :class="{phoneError:checkCode}"  class="get-verification phone_right" @click="getVerifyCode">获取验证码</button>
		                        <button v-else disabled="disabled" class="get-verification">
		                            已发送({{codeDown}}s)
		                        </button>
		                    </section>
		                    <section class="login-verification">
		                        <input type="number" maxlength="6" v-model="verifyCode" placeholder="验证码"/>
		                    </section>
		                    <section class="login-hint">
		                        温馨提示：未注册的手机号，登录时将自动注册，且代表已同意
		                        <a href="javascript:;">服务协议与隐私政策</a>
		                    </section>
		                </div>
		                <!--账号登录部分-->
		                <div v-else>
		                    <section>
		                        <section class="login-message">
		                            <input type="tel" maxlength="11" placeholder="用户名">
		                        </section>
		                        <section class="login-verification">
		                            <input  type="password" maxlength="20" placeholder="密码" autocomplete="off" />
		                            <!--<input  type="text" maxlength="20" placeholder="密码" autocomplete="off" />-->
		                            <div class="switch-show">
		                                <img src="./images/hide_pwd.png" class="on" alt="">
		                                <img src="./images/show_pwd.png" alt="" width="20">
		                            </div>
		                        </section>
		                        <section class="login-message">
		                            <input type="text" maxlength="4" placeholder="验证码">
		                            <img
		                                    class="get-verification"
		                                    src="./images/captcha.svg"
		                                    alt="captcha"
		                            >
		                        </section>
		                    </section>
		                </div>
		                <button class="login-submit" @click="login">登录</button>
		            </form>
		            <button class="login-back" @click="$router.back()">返回</button>
		        </div>
		    </div>
		</div>
	</div>
</template>

<script>
	import {Toast} from 'vant'
	import {mapMutations} from 'vuex'
	export default {
		name:'',
		data(){
			return{
				showLogin: true,
				phone:null,
				codeDown:0,
				timeId:null,
				verifyCode:'',
				userInfo:null
				

			}
		},
		computed:{
			checkCode(){
				return /^1[3,5,6,7,8,9][0-9]{9}$/.test(this.phone)
			}
		},
		methods: {
			...mapMutations(['USER_INFO','INIT_USER_INFO']),
			changeLogin(flag){
				this.showLogin = flag
			},
			getVerifyCode(){
				if(this.checkCode){
					this.codeDown = 60
					this.timeId = setInterval(() => {
						this.codeDown--
						if(this.codeDown == 0){
							clearInterval(this.timeId)
						}
					},1000)
					//获取验证码
					// console.log(this.verifyCode);
					Toast('验证码已发送，注意查收')
					
				}else{
					Toast('手机号码错误')
				}
				
			},
			login(){
				if(this.showLogin){
					//手机号登录
					if(this.checkCode == false){
						Toast('手机号码错误')
						return 
					}else if(this.verifyCode != 123456){
						Toast('验证码不正确')
						return 
					}else{
						console.log('登录成功');
						this.userInfo = {id:0, name:'小冠', token:'sflkjwlefnlsdnf'}
						// console.log(this.userInfo);
						//存储到vuex
						this.USER_INFO(this.userInfo)
						
						this.$router.back()
						
					}
					
					
				}else{
					//用户名登录
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.phoneError{
		color: #75a342 !important;
	}
	.login{
		        .login-container {
		            width: 100%;
		            height: 100%;
		            background: #fff;
					position: absolute;
					bottom: 0;
					left: 0;
					right: 0;
					top: 0;
		        }
		
		        .login-container .login-inner {
		            padding-top: 60px;
		            width: 80%;
		            margin: 0 auto;
		        }
		
		        .login-container .login-inner .login-header .login-logo {
		            font-size: 40px;
		            font-weight: bold;
		            color: #75a342;
		            text-align: center
		        }
		
		        .login-container .login-inner .login-header .login-header-title {
		            padding-top: 40px;
		            padding-bottom: 10px;
		            text-align: center;
		        }
		
		        .login-container .login-inner .login-header .login-header-title > a {
		            color: #333;
		            font-size: 14px;
		            padding-bottom: 4px;
		            text-decoration: none;
		        }
		
		        .login-container .login-inner .login-header .login-header-title > a:first-child {
		            margin-right: 40px
		        }
		
		        .login-container .login-inner .login-header .login-header-title > a.current {
		            color: #75a342;
		            font-weight: 700;
		            border-bottom: 2px solid #75a342
		        }
		

		
		        .login-container .login-inner .login-content > form > div.current {
		            display: block
		        }
		
		        .login-container .login-inner .login-content > form > div input {
		            width: 100%;
		            height: 100%;
		            padding-left: 8px;
		            box-sizing: border-box;
		            border: 1px solid #ddd;
		            border-radius: 4px;
		            outline: 0;
		            font: 400 14px Arial;
		        }
		
		        .login-container .login-inner .login-content > form > div input:focus {
		            border: 1px solid #75a342
		        }
		
		        .login-container .login-inner .login-content > form > div .login-message {
		            position: relative;
		            margin-top: 16px;
		            height: 48px;
		            font-size: 14px;
		            background: #fff;
		        }
		
		        .login-container .login-inner .login-content > form > div .login-message .get-verification {
		            position: absolute;
		            top: 50%;
		            right: 10px;
		            transform: translateY(-50%);
		            border: 0;
		            color: #ccc;
		            font-size: 10px;
		            background: transparent;
		        }
		
		        .login-container .login-inner .login-content > form > div .login-message .get-verification.phone_right {
		            color: #ccc
		        }
		
		        .login-container .login-inner .login-content > form > div .login-verification {
		            position: relative;
		            margin-top: 16px;
		            height: 48px;
		            font-size: 14px;
		            background: #fff;
		        }
		
		        .login-container .login-inner .login-content > form > div .login-verification .switch-show {
		            position: absolute;
		            right: 10px;
		            top: 12px;
		        }
		
		        .login-container .login-inner .login-content > form > div .login-verification .switch-show img {
		            display: none
		        }
		
		        .login-container .login-inner .login-content > form > div .login-verification .switch-show img.on {
		            display: block
		        }
		
		        .login-container .login-inner .login-content > form > div .login-hint {
		            margin-top: 12px;
		            color: #999;
		            font-size: 12px;
		            line-height: 20px;
		        }
		
		        .login-container .login-inner .login-content > form > div .login-hint > a {
		            color: #75a342
		        }
		
		        .login-container .login-inner .login-content > form .login-submit {
		            display: block;
		            width: 100%;
		            height: 42px;
		            margin-top: 30px;
		            border-radius: 4px;
		            background: #75a342;
		            color: #fff;
		            text-align: center;
		            font-size: 16px;
		            line-height: 42px;
		            border: 0
		        }
		
		        .login-container .login-inner .login-content .login-back {
		            display: block;
		            width: 100%;
		            height: 42px;
		            margin-top: 15px;
		            border-radius: 4px;
		            background: transparent;
		            border: 1px solid #75a342;
		            color: #75a342;
		            text-align: center;
		            font-size: 16px;
		            line-height: 42px
		        }
	}
</style>