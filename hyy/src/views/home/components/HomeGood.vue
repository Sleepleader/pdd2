<template>
<div>
    
<router-link  tag="div" to="Banner"  class="banner-box01">
<div class="card01">
    <div class="mui-card">
	<!--内容区-->
        <div class="mui-card-content">
        </div>
	<!--页脚，放置补充信息或支持的操作-->
	    <div class="mui-card-footer" >
            <p style="font-size:14px;font-weight: bold;">
                贵州茅台
                茅台飞天酒53度
                53度飞天出口版
                酱香型白酒
                500ml 单瓶
            </p>
            <h3 style="color: #000;">￥69</h3>
        </div>
    </div>
</div>
</router-link>  

<div class="card02">
    <div class="mui-card">
	<!--内容区-->
	    <div class="mui-card-content">
            <img src="" alt="">
        </div>
	<!--页脚，放置补充信息或支持的操作-->
	    <div class="mui-card-footer">
            <p style="font-size:14px;font-weight: bold;">
                ikbc 高达独角兽/机械键盘
                游戏办公电脑笔记本
                Z98 高达1.0 有线 红轴
            </p>
            <h3 style="color: #000;">￥269</h3>
        </div>
    </div>
</div>

<div class="card03">
    <div class="mui-card">
	<!--内容区-->
	    <div class="mui-card-content">
            <img src="" alt="">
        </div>
	<!--页脚，放置补充信息或支持的操作-->
	    <div class="mui-card-footer">
            <p style="font-size:14px;font-weight: bold;">
                清风抽纸 
                花萃4层90抽*16包M码 
                亲肤无刺激 
                卫生纸 纸巾 餐巾纸 整箱
            </p>
            <h3 style="color: #000;">￥67.9</h3>
        </div>
    </div>
</div>

<div class="card04">
    <div class="mui-card">
	<!--内容区-->
	    <div class="mui-card-content">
            <img src="" alt="">
        </div>
	<!--页脚，放置补充信息或支持的操作-->
	    <div class="mui-card-footer">
            <p style="font-size:14px;font-weight: bold;">
                蓝月亮洗衣液袋装补充装
                补充液香味持久薰衣草 
                整箱批家用实惠装 1kg袋*3
            </p>
            <h3 style="color: #000;">￥35.9</h3>
        </div>
    </div>
</div>

</div>
</template>

<script>
export default {
  name: "HomeGood",
};
</script>

<style lang="stylus" scoped>。mui-card
.mui-card{
    height: 300px;
    width: 230px;
}
.card01{
    position: absolute;
    top: 390px;
    left: 10px;
    .mui-card-content{
        background: white url(https://img10.360buyimg.com/seckillcms/s280x280_jfs/t20260510/127553/40/30600/130243/645cc71aFd731a667/fd86dbb745804df2.jpg.webp) no-repeat center center;
        background-size: contain;
        height: 200px;
        width: 230px;
    }
}
.card02{
    position: absolute;
    top: 390px;
    left: 255px;
    .mui-card-content{
        background: white url(https://img14.360buyimg.com/seckillcms/s280x280_jfs/t20260517/168414/34/37770/22955/6465d12eFa4ebac3f/e1d1e9285d9e6dc5.jpg.webp) no-repeat center center;
        background-size: contain;
        height: 200px;
        width: 230px;
    }
}
.card03{
    position: absolute;
    top: 700px;
    left: 10px;
    .mui-card-content{
        background: white url(https://img14.360buyimg.com/seckillcms/s280x280_jfs/t20260517/168319/26/27486/81525/6465e623F370e2ada/59e70bef7e714281.jpg.webp) no-repeat center center;
        background-size: contain;
        height: 200px;
        width: 230px;
    }
}
.card04{
    position: absolute;
    top: 700px;
    left: 255px;
    .mui-card-content{
        background: white url(https://img11.360buyimg.com/seckillcms/s280x280_jfs/t20260508/220429/5/29541/39828/6459ba7cF4f5456cd/3b3045f5252f9071.jpg.webp) no-repeat center center;
        background-size: contain;
        height: 200px;
        width: 230px;
    }
}

</style>
