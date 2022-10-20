<template>
	<div>
		<div class="searchWrapper">
			<div class="searchBox">
				<div class="iconSearchWrapper">
					<svg viewBox="0 0 32 32" class="icon iconSearch"><path fill="#999" fill-rule="evenodd" d="M23.624 21.503c3.47-4.51 3.14-11.003-.992-15.135-4.491-4.49-11.773-4.49-16.264 0-4.49 4.491-4.49 11.773 0 16.264 4.132 4.131 10.625 4.462 15.135.992l4.66 4.66a1.5 1.5 0 1 0 2.121-2.121l-4.66-4.66zm-3.114-.993A8.5 8.5 0 1 0 8.49 8.49a8.5 8.5 0 0 0 12.02 12.02z"></path></svg>
				</div>
				<span class="searchPrompt">输入律师、助理姓名</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'',
		data(){
			return{}
		},
		methods: {
		}
	}
</script>

<style lang="less" scoped>
        .searchWrapper {
            background: #FFF;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            border-bottom: solid 1px #E6E6E6;
            z-index: 999;
			height: 1rem;
			display: flex;
			align-items: center;
			.searchBox {
			    display: block;
			    height: .7rem;
				width: 100%;
			    line-height: .7rem;
			    font-size: 0.3rem;
			    background: #F2F2F2; 
				// border: 1px solid red;
				margin: 0 .2rem;
				border-radius: .5rem;
				display: flex;
				justify-content: start;
				align-items: center;
				padding-left: .2rem;
				// overflow: hidden;
				.iconSearchWrapper {
					display: flex;
					align-items: center;
					.iconSearch {
						fill: #999;
						width: .4rem;
						height: .4rem;
						margin-right: .1rem;
					}
				}
				.searchPrompt{
					color: gray;
					font-size: .28rem;
				}
			}
        }









</style>