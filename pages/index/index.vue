<template>
	<view class="index">
		<musicHead title="网易云音乐" :icon-show="false"></musicHead>
		<view class="container">
			<scroll-view scroll-y="true" >
				<view class="index-search" @tap="handleToPage('/pages/search/search')"> 
					<text class="iconfont">&#xe617;</text>
					<input type="text" class="search-ipt" placeholder="搜索歌曲">
				</view>
				<view class="index-list">
					<view class="index-list-item" v-for="(item, index) in topList" :key="index" @tap="handleToPage('/pages/list/list', `listId=${item.id}`)">
						<view class="item-img">
							<image :src="item.coverImgUrl" mode=""></image>
							<text>{{item.updateFrequency}}</text>
						</view>
						<view class="item-text">
							<p v-for="(item, index) in item.tracks" :key="index">{{index + 1}}.{{ item.first }} - {{ item.second }}</p>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import '@/common/iconfont.css'
	import musicHead from '@/components/musicHead/musicHead.vue'
	import { topList } from '@/api/index.js'
	export default {
		data() {
			return {
				topList:[]
			}
		},
		components:{
			musicHead
		},
		onLoad() {
			topList().then((res)=>{
				this.topList = res
			})
		},
		methods: {
			handleToPage(url, pramas){
				uni.navigateTo({
					url: pramas != undefined || pramas != null ? `${url}?${pramas}` : url
				})
			}

		}
	}
</script>

<style lang="scss" scoped>
	.index{
		.container{
			.index-search{
				display: flex;
				align-items: center;
				background-color: #f7f7f7;
				height: 70rpx;
				border-radius: 50rpx;
				margin: 20rpx 30rpx 30rpx 30rpx;
				// padding: 10rpx;
				font-size: 26rpx;
				
				.iconfont{
					margin-left: 26rpx;
					margin-right: 26rpx;
				}
				.search-ipt{
					margin-left: 20rpx;
					font-size: 28rpx;
					flex: 1;
				}
			}
			.index-list{
				margin: 0 30rpx;
				.index-list-item{
					display: flex;
					margin-bottom: 34rpx;
					.item-img{
						height: 212rpx;
						width: 212rpx;
						position: relative;
						border-radius: 10rpx;
						overflow: hidden;
						image{
							height: 100%;
							width: 100%;
						}
						text{
							position: absolute;
							left:14rpx;
							bottom:12rpx;
							color: #fff;
							font-size: 12rpx;
						}
					}
					.item-text{
						margin-left: 34rpx;
						flex:1;
						display: flex;
						flex-direction: column;
						justify-content: space-around;
						font-size: 24rpx;
						color: #000;	
						p{
							display: block;
							width: 430rpx;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}
					}
				}
			}
		}
	}
</style>
