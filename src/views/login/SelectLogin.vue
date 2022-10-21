<template>
	<div class="selectlogin">
		<div class="select-login">
		    <div class="bottom">
		       <h2></h2>
		    </div>
		    <h4>您还未登录</h4>
			<router-link to="/login" class="goToLogin">登录</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name:'selectlogin',
		data(){
			return{}
		},
		methods: {
		}
	}
</script>

<style lang="less" scoped>
		.selectlogin{
			        .select-login{
			            background-color: #f5f5f5;
			            width: 100%;
			            height: 100%;
			            position: fixed;
			            left: 0;
			            top: 0;
			            bottom: 3.5rem;
			            display: flex;
			            flex-direction: column;
			            justify-content: center;
			            align-items: center;
			        }
			        .goToLogin{
			            width: 80%;
			            height: 38px;
			            background-color: #2eba5a;
			            border: none;
			            border-radius: 5px;
			            font-size: 20px;
			            color: #fff;
			            margin-top: 30px;
						text-align: center;
						line-height: 38px;
			        }
			        
		}

</style>