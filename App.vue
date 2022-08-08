<script>
	export default {
		onLaunch: function() {
			// console.log('App Launch')
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	.container{
		width: 100%;
		height: calc(100vh - 70px);
		overflow: hidden;
		
		& scroll-view{
			height: 100%;
		}
	}
	.list{
		.fixbg{
			height: 100%;
			width: 100%;
			background-color: blueviolet;
			position: fixed;
			top: 0;
			background-size: cover;
			background-position: 0 center;
			filter: blur(10px);
			transform: scale(1.1);
		}
	}
</style>
