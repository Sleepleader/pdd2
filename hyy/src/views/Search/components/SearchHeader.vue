<template>
<div>
<header class="mui-bar mui-bar-nav">
	<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
	<h1 class="mui-title">搜索</h1>
</header>
</div>

</template>
<script>
import mui from'../../../assets/mui/js/mui'
mui('.mui-scroll-wrapper').scroll({
  deceleration:0.0005
})
export default {
  name: "SearchHeader",
};
</script>
<style scoped>


</style>

