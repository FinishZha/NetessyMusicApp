<template>
	<view class="list">
		<view class="fixbg"></view>
		<musicHead :iconShow="true" title="歌单" color="#fff"></musicHead>
		<view class="container">
			<scroll-view scroll-y="true">
				<view class="list-head">
					<view class="list-head-img">
						<image :src="coverImgUrl" alt="">
						<span class="iconfont icon-yousanjiao">30亿</span>
					</view>
					<view class="list-head-text">
						<view>
							{{ listname }}
						</view>
						<view>
							<img src="@/static/logo1.png" alt="">
							<span>{{nickname}}</span>
						</view>
						<view>
							{{ descripation }}
							<span class="iconfont icon-huitui"></span>
						</view>
					</view>
				</view>
				<!-- #ifdef MP-WEIXIN -->
				<button class="list-share" open-type="share">
					<span class="iconfont icon-fenxiang"></span>分享给微信朋友
				</button>
				<!-- #endif -->
				<!-- #ifdef H5 -->
				<button class="list-share" open-type="share">
					<span class="iconfont icon-fenxiang"></span>分享给微信朋友
				</button>
				<!-- #endif -->
				<view class="music-list">
					<view class="music-list-head">
						<span class="iconfont icon-bofang"></span>
						<span>播放全部</span>
						<span>（共100首）</span>
					</view>
					<view class="music-list-item">
						<view class="music-list-num">1</view>
						<view class="music-list-name">
							<view>与我无关</view>
							<view>
								阿冗 - 与我无关
							</view>
						</view>
						<span class="iconfont icon-24gl-playCircle" v-if="!isPlaying"></span>
						<span class="iconfont icon-zanting" v-else></span>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import musicHead from '@/components/musicHead/musicHead.vue'
	import { getMusic } from '@/api/index.js'
	import '@/common/iconfont.css'
	export default {
		data() {
			return {
				musicList:[],
				listLength:20.,
				listId:'',
				coverImgUrl:'https://p1.music.126.net/pcYHpMkdC69VVvWiynNklA==/109951166952713766.jpg',
				listname:'飙升榜',
				nickname:'网易云音乐',
				descripation:'云音乐中每天热度上升最快的100首单曲，每日更新。',
				isPlaying:true
			};
		},
		components:{
			musicHead
		},
		methods:{
			getMusicList(listId, length){
				getMusic(listId).then((res)=>{
					if(res != null){
						this.musicList = res.privileges.slice(0, length)
					}
					console.log(res);
				})
			},
			//获取跟多的歌曲，懒加载
			getMoreMusic(){
				this.listLength += 20
				this.getMusicList(this.listId, this.listLength)
			}
		},
		onLoad(pramas) {
			this.listId = pramas.listId
			this.getMusicList(pramas.listId, 20)
		}
	}
</script>

<style lang="scss" scoped>
.fixbg{
	background: url("@/static/logo.png");
}
.list-head{
	display: flex;
	margin: 30rpx;
	.list-head-img{
		background-color: antiquewhite;
		height: 264rpx;
		width: 264rpx;
		border-radius: 15rpx;
		overflow: hidden;
		position: relative;
		margin-right: 64rpx;
		image{
			height: 264rpx;
			width: 264rpx;
		}
		span{
			position: absolute;
			top: 8rpx;
			right: 8rpx;
			font-size: 26rpx;
			color:white
		}
	}
	.list-head-text{
		color:white;
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	
	.list-head-text view:nth-child(1){
		font-size: 34rpx;
	}
	.list-head-text view:nth-child(2){
		display: flex;
		align-items: center;
		font-size: 24rpx;
		margin: 20rpx 0;
		img{
			height: 54rpx;
			width: 54rpx;
			border-radius: 50%;
			overflow: hidden;
			background-position: center;
			margin: 0 20rpx 0 20rpx;
		}
		span{
			opacity: 0.8;
		}
		
	}
	.list-head-text view:nth-child(3){
		line-height: 32rpx;
		font-size: 22rpx;
		opacity: 0.7;
		
		span{
			font-size: 22rpx;
			display: inline-block;
			transform: rotate(180deg);
		}
	}
}

.list-share{
	width: 330rpx;
	height: 74rpx;
	margin: 0 auto;
	background-color: rgba(217, 217, 217, 0.4);
	line-height: 74rpx;
	border-radius: 50rpx;
	text-align: center;
	font-size: 28rpx;
	color: white;
	span{
		margin-right: 16rpx;
		
	}
}

.music-list{
	background-color: #fff;
	min-height: 1200rpx;
	height: auto;
	border-radius: 50rpx;
	margin: 40rpx 0 10rpx 0;
	overflow: hidden;
	.music-list-head{
		height: 50rpx;
		display: flex;
		align-items: center;
		margin: 30rpx 0 0 22rpx;
		display: flex;
		align-items: flex-end;
	}
	.music-list-head span:nth-child(1){
		height: 50rpx;
		font-size: 50rpx;
		margin-right: 26rpx;
	}
	.music-list-head span:nth-child(2){
		font-size: 30rpx;
		margin-right: 10rpx;
	}
	.music-list-head span:nth-child(3){
		font-size: 26rpx;
		color: #b2b2b2;
	}
	.music-list-item{
		height: 120rpx;
		width: 90%;
		display: flex;
		align-items: center;
		margin: 0 32rpx 66rpx 46rpx;
		display: flex;
		
		.music-list-num{
			width: 58rpx;
			color: #959595;
			font-size: 40rpx;
		}
		
		.music-list-name{
			flex: 1;
		}
		.music-list-name view:nth-child(2){
			font-size: 22rpx;
			color: #959595;
		}
		
		.iconfont{
			font-size: 50rpx;
			color: #c7c7c7;
		}
	}
}
</style>
