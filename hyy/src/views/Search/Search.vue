<template>
    <div>
        <search-header></search-header>
        <search-nav :searchPanel="searchPanel"></search-nav>
        <search-panel v-if="isShow" :showSearchPanel="showSearchPanel"></search-panel>
        <search-footer></search-footer>
    </div>
</template>

<script>
import SearchHeader from './components/SearchHeader.vue';
import SearchNav from './components/SearchNav.vue';
import SearchFooter from "./components/SearchFooter.vue";
import SearchPanel from "./components/SearchPanel.vue"
export default {
    name: "Search",
    components: {
      SearchHeader,
      SearchNav,
      SearchFooter,
      SearchPanel,
  },
  data(){
    return{
      isShow: false
    }
  },
  methods:{
    searchPanel(flag){
      this.isShow = flag
    }
  }
}
</script>

<style>

</style>