<template>
	<view class="content">
		<text class="title">{{title}}</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello World!'
			}
		},
		onLoad() {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.title {
		margin-top: 100rpx;
		font-size: 50rpx;
		color: #00acec;
	}
</style>
