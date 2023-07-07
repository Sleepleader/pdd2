<template>
  <div>
<header class="mui-bar mui-bar-nav">
	<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
	<h1 class="mui-title">拼多多主页</h1>
</header>
	<div class="mui-content">
			<div id="slider" class="mui-slider ">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							推荐
						</a>
						<a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
							食品
						</a>
						<a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
							水果
						</a>
						<a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
							百货
						</a>
						<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							手机
						</a>
            			<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							饰品
						</a>
            			<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							运动
						</a>
					</div>
				</div>
			</div>
		</div></div>
</template>
<script>
import mui from'../../../assets/mui/js/mui'
mui('.mui-scroll-wrapper').scroll({
  deceleration:0.0005
})
export default {
  name: "HomeHeader",
};
</script>
<style scoped>
.mui-content
  .mui-slider
    .mui-active{
  color:rgb(46, 179, 75)  !important
}

</style>

