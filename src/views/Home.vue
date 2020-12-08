<template>
  <div class="home">
    <top-view></top-view>
    <sales-view></sales-view>
    <map-view></map-view>
    <bottom-view></bottom-view>
  </div>
</template>

<script>
import TopView from '../components/TopView'
import SalesView from '../components/SalesView'
import MapView from '../components/MapView'
import BottomView from '../components/BottomView'
import { wordCloud } from '../api'
export default {
  name: 'Home',
  components: {
    TopView,
    SalesView,
    MapView,
    BottomView
  },
  data() {
    return {
      wordCloud: null
    }
  },
  provide() {
    return {
      getWordCloud: this.getWordCloudFun // 指向
    }
  },
  async mounted() {
    const data = await wordCloud()
    this.wordCloud = data
  },
  methods: {
    getWordCloudFun() {
      return this.wordCloud
    }
  }
}
</script>
<style lang="scss" scoped>
  .home{
    background: #eee;
    width: 100%;
    min-height: 100%;
    padding: 20px;
    box-sizing: border-box;
  }
</style>
