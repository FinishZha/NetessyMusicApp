<template>
	<view class="list">
		<musicHead :iconShow="true" title="歌单" color="#fff"></musicHead>
		<scroll-view scroll-y="true">
			<view></view>
		</scroll-view>
	</view>
</template>

<script>
	import musicHead from '@/components/musicHead/musicHead.vue'
	import { getMusic } from '@/api/index.js'
	export default {
		data() {
			return {
				musicList:[],
				listLength:20.,
				listId:''
			};
		},
		components:{
			musicHead
		},
		methods:{
			getMusicList(listId, length){
				getMusic(listId).then((res)=>{
					this.musicList = res.slice(0, length)
					console.log(this.musicList);
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

<style lang="scss">

</style>
