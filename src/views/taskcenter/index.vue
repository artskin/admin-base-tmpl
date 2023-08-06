<template>
	<div class="task-app hidden">
		<h3 class="title">任务中心-我在父级</h3>
		<micro-app class="micro-app-layer" name='task-center' url='http://127.0.0.1:3301/' baseroute='/' iframe></micro-app>
	</div>
</template>

<script lang="ts">

import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class TaskCenter extends Vue {

}
</script>

<style lang="less" scoped>
.title{
	padding: 0 20px;
}
	.task-app {
		height: 100%;
		.micro-app-layer{
			height: calc(100% - 60px);
			overflow: auto;
		}
	}
</style>