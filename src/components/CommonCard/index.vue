<template>
  <div class="common-card">
    <div class="title">{{title}}</div>
    <div class="value">
      {{value}}
      <slot name="value"></slot>
    </div>
    <div class="chart">
      <slot name="chart"></slot>
    </div>
    <div class="line"></div>
    <div class="total">
      {{total}}
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>

export default {
  name: 'CommonCard',
  props: {
    title: String,
    value: String,
    total: String
  }
}
</script>
<style lang="scss" scoped>
  .common-card{
    .title{
      font-size:12px;
      color:#999;
    }
    .value{
      font-size:25px;
      color:#000;
      margin-top:5px;
      letter-spacing:1px;
    }
    .chart{
      height: 50px;
      display: flex;
      flex-flow: column;
      justify-content: center;
    }
    .line{
      margin:10px 0px;
      border-top:1px solid #eee
    }
    .total{
      color:#666;
      font-size:13px;
      display: flex;
    }
  }
</style>
