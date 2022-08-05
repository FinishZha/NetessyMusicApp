import { BASE_URL } from '@/config/index.js'

/**
 * 获取推荐歌曲排行
 */
export const topList = function() {
	return new Promise(function(resolve, reject){
		uni.request({
			url: `${ BASE_URL }/toplist/detail`,
			method:'GET',
			data:{},
			success(res) {
				let result = res.data.list
				result.length = 4
				resolve(result)
			},
			fail() {
				
			},
			complete() {
				
			}
		})
	})
}


export const getMusic = function(id){
	return new Promise(function(resolve, reject){
		uni.request({
			url:`${BASE_URL}/playlist/detail?id=${id}`,
			method:'GET',
			success(res){
				resolve(res.data.privileges)
			}
			
		})
	})
}