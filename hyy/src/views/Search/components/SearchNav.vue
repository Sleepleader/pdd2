<template>
<div>
    <div class="search-box">
        <div class="mui-input-row mui-search">
            <input type="search" class="mui-input-clear" placeholder="请输入内容" @click="searchPanel(true)">
        </div>
    </div>
</div>
</template>

<script>
import SearchPanel from './SearchPanel.vue';

export default {
    name:"SearchNav",
    components: {
        
        SearchPanel,
    },
    props:{
        searchPanel:{
            type: Function
        }
    },
}
</script>

<style>
.search-box{
    position: absolute;
    top: 100px;
    left: 15px;
    width: 485px;
}
</style>