<template>
	<view class="music-icon" :style="{ color : color }">
		<view class="music-head-icon" v-if="iconShow">
			<text class='iconfont' @tap="handleToBack()">&#xe665;</text> <text class="sx">|</text> <text class='iconfont' @tap="handleToHome()">&#xe751;</text>
		</view>
		{{ title }}
	</view>
</template>

<script>
	export default {
		props:{
			title:{
				type:String,
				default:"页面标题",
				require: false
			},
			iconShow:{
				type:Boolean,
				default: true
			},
			color:{
				type: String,
				default: '#000'
			}
		},
		name:"musicHead",
		data() {
			return {
				
			};
		},
		methods:{
			handleToBack(){
				uni.navigateBack()
			},
			handleToHome(){
				uni.navigateTo({
					url:'/pages/index/index',
					success:()=>{
						console.log('返回了首页');
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.music-icon{
		height: 75px;
		width: 100%;
		font-size: 16px;
		line-height: 80px;
		text-align: center;
		color: #000000;
		position: relative;
		
		.music-head-icon{
			position: absolute;
			left: 8px;
			top: 24px;
			width: 90px;
			height: 30px;
			background-color: rgba(0, 0, 0, 0.4);
			color: #fff;
			line-height: 31px;
			border-radius: 15px;
			display: flex;
			justify-content: space-evenly;
			
			.sx{
				color: aliceblue;
				position: relative;
				top: -2px;
			}
		}
	}
	
</style>