<template>
  <div class="search-panel">
    <div class="search-top">
        <svg @click="searchPanel(false)" viewaBox="0 0 512 1024" version="1.1" xmlns=""></svg>
    </div>

    <div class="search-centainer">
        <div class="search-hot">
            <span>历史搜索</span>
        </div>
        <ul class="hot-item">
            <li>蓝牙无线耳机</li>
            <li>wacom数位板</li>
            <li>发簪diy材料包</li>
        </ul>
    </div>

    <div class="search-centainer">
        <div class="search-hot">
            <span>猜你想要</span>
        </div>
        <ul class="hot-item">
            <li>蓝牙无线耳机</li>
            <li>wacom数位板</li>
            <li>发簪diy材料包</li>
        </ul>
    </div>

    <div class="search-centainer">
        <div class="search-hot">
            <span>热门搜索</span>
        </div>

        <ul class="hot-item">
            <li>蓝牙无线耳机</li>
            <li>wacom数位板</li>
            <li>发簪diy材料包</li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    name:"SearchPanel",
    props:{
        searchPanel:{
            type: Function
        }
    },
    methods(){
        this.$refs.mySearch.focus();
    }
}
</script>

<style>

</style>