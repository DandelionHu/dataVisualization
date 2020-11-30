<!--今日交易用户数-->
<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
require('echarts/theme/macarons') // echarts theme
export default {
  name: 'TodayChart',
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = this.$echarts.init(this.$el, 'macarons')
      this.chart.setOption({
        color: ['#3398DB'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        xAxis: {
          type: 'category',
          data: ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
          show: false
        },
        yAxis: {
          show: false
        },
        series: [
          {
            type: 'bar',
            data: [620, 432, 220, 235, 454, 565, 254, 356, 251, 521],
            barWidth: '60%'
          }
        ],
        grid: {
          top: 0,
          left: 0,
          bottom: 0,
          right: 0
        }
      })
    }
  }
}
</script>
