<template>
    <div>
    <banner-header></banner-header>
    <banner-footer></banner-footer>
    <banner-middle></banner-middle>
    </div>
</template>

<script>
import BannerHeader from "./components/BannerHeader.vue"
import BannerFooter from './components/BannerFooter.vue';
import BannerMiddle from './components/BannerMiddle.vue';
export default {
    name:'Banner',
    components:{ 
        BannerHeader,
        BannerFooter,
        BannerMiddle,
    },
}
</script>

<style>

</style>