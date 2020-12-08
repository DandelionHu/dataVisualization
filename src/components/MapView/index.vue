<template>
  <div class="mapView">
    <el-row :gutter="20">
      <el-col :span="18">
        <el-card shadow="hover" :body-style="{ padding: '0px' }">
          <div class="map-wrapper">
            <v-chart :options="options" />
          </div>
        </el-card>
      </el-col>
      <el-col style="margin-bottom:20px" :span="6">
        <el-card shadow="hover" :body-style="{ padding: '15px' }">
          <template v-slot:header>
            <div class="title-wrapper">用户月同比增长</div>
          </template>
          <template>
            <div class="liquidFill">
              <ve-liquidfill :data="chartData" height="100%" :settings="chartSettings" />
            </div>
          </template>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover" :body-style="{ padding: '15px' }">
          <template v-slot:header>
            <div class="title-wrapper">热门搜索{{word}}</div>
          </template>
          <template>
            <div class="wordCloud">
              <ve-wordcloud :data="chartWordData" height="100%" :settings="chartWordSettings"></ve-wordcloud>
            </div>
          </template>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import 'echarts/extension-src/bmap/bmap.js'
export default {
  data() {
    return {
      options: {},
      chartData: {
        columns: ['title', 'percent'],
        rows: [{
          title: '支付转化率',
          percent: 0.38
        }]
      },
      chartSettings: {},
      chartWordData: {
        columns: ['word', 'count'],
        rows: [
          {
            'word': '人员',
            'count': 22199
          },
          {
            'word': '开饭',
            'count': 10288
          },
          {
            'word': '权限',
            'count': 620
          },
          {
            'word': '开单',
            'count': 1243
          }
        ]
      },
      chartWordSettings: {
        color: ['#ff0', '#00f', '#f00', '#0ff'],
        shape: 'diamond',
        sizeMin: 30,
        sizeMax: 60
      }
    }
  },
  mounted() {
    this.initMap()
    this.initLiquidFill()
    this.initWordCloud()
  },
  inject: ['getWordCloud'], // 接收
  computed: {
    word() {
      return this.getWordCloud()
    }
  },
  methods: {
    initMap() {
      const point = [
        {
          name: '海门',
          value: [121.15, 31.89, 80]
        },
        {
          name: '南京',
          value: [118.78, 32.04, 100]
        },
        {
          name: '鄂尔多斯',
          value: [109.781327, 39.608266, 120]
        },
        {
          name: '招远',
          value: [120.38, 37.35, 220]
        },
        {
          name: '舟山',
          value: [122.207216, 29.985295, 140]
        },
        {
          name: '齐齐哈尔',
          value: [123.97, 47.33, 150]
        },
        {
          name: '盐城',
          value: [120.13, 33.38, 170]
        },
        {
          name: '青岛',
          value: [120.33, 36.07, 190]
        }
      ]
      const point1 = [
        {
          name: '广州',
          value: [113.23, 23.16, 250]
        },
        {
          name: '重庆',
          value: [106.54, 29.59, 260]
        }
      ]
      this.options = {
        title: {
          text: '外卖销售数据大盘',
          subtext: '销售趋势统计',
          sublink: 'http://www.pm25.in',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        bmap: {
          center: [104.114129, 37.550339],
          zoom: 5,
          roam: false,
          mapStyle: {
            styleJson: [{
              'featureType': 'water',
              'elementType': 'all',
              'stylers': {
                'color': '#d1d1d1'
              }
            }, {
              'featureType': 'land',
              'elementType': 'all',
              'stylers': {
                'color': '#f3f3f3'
              }
            }, {
              'featureType': 'railway',
              'elementType': 'all',
              'stylers': {
                'visibility': 'off'
              }
            }, {
              'featureType': 'highway',
              'elementType': 'all',
              'stylers': {
                'color': '#fdfdfd'
              }
            }, {
              'featureType': 'highway',
              'elementType': 'labels',
              'stylers': {
                'visibility': 'off'
              }
            }, {
              'featureType': 'arterial',
              'elementType': 'geometry',
              'stylers': {
                'color': '#fefefe'
              }
            }, {
              'featureType': 'arterial',
              'elementType': 'geometry.fill',
              'stylers': {
                'color': '#fefefe'
              }
            }, {
              'featureType': 'poi',
              'elementType': 'all',
              'stylers': {
                'visibility': 'off'
              }
            }, {
              'featureType': 'green',
              'elementType': 'all',
              'stylers': {
                'visibility': 'off'
              }
            }, {
              'featureType': 'subway',
              'elementType': 'all',
              'stylers': {
                'visibility': 'off'
              }
            }, {
              'featureType': 'manmade',
              'elementType': 'all',
              'stylers': {
                'color': '#d1d1d1'
              }
            }, {
              'featureType': 'local',
              'elementType': 'all',
              'stylers': {
                'color': '#d1d1d1'
              }
            }, {
              'featureType': 'arterial',
              'elementType': 'labels',
              'stylers': {
                'visibility': 'off'
              }
            }, {
              'featureType': 'boundary',
              'elementType': 'all',
              'stylers': {
                'color': '#fefefe'
              }
            }, {
              'featureType': 'building',
              'elementType': 'all',
              'stylers': {
                'color': '#d1d1d1'
              }
            }, {
              'featureType': 'label',
              'elementType': 'labels.text.fill',
              'stylers': {
                'color': '#999999'
              }
            }]
          }
        },
        series: [
          {
            name: '销售额',
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: point,
            encode: {
              value: 2
            },
            itemStyle: {
              color: 'purple'
            },
            symbolSize: function(val) {
              return val[2] / 10
            },
            label: {
              show: false,
              position: 'right',
              formatter: function(v) {
                return v.data.name
              }
            },
            emphasis: {
              label: {
                show: true
              }
            }
          },
          {
            name: 'top2',
            type: 'effectScatter',
            coordinateSystem: 'bmap',
            data: point1,
            itemStyle: {
              color: 'purple',
              shadowBlur: 10,
              shadowColor: '#333'
            },
            encode: {
              value: 2
            },
            symbolSize: function(val) {
              return val[2] / 10
            },
            label: {
              show: false,
              position: 'right',
              formatter: function(v) {
                return v.data.name
              }
            },
            emphasis: {
              label: {
                show: true
              }
            },
            hoverAnimation: true,
            rippleEffect: {
              brushType: 'stroke'
            }
          }
        ]
      }
    },
    initLiquidFill() {
      this.chartSettings = {
        seriesMap: {
          '支付转化率': {
            radius: '90%',
            label: {
              formatter: (v) => {
                return `${Math.floor(v.data.value * 100)}%`
              },
              textStyle: {
                fontSize: 36,
                color: '#999',
                fontWeight: 'normal'
              },
              insideColor: '#fff'
            },
            outline: {
              itemStyle: {
                borderColor: '#aaa4a4',
                borderWidth: 1,
                color: 'none',
                shadowBlur: 0,
                shadowColor: '#fff'
              },
              borderDistance: 0
            },
            backgroundStyle: {
              color: '#fff'
            },
            itemStyle: {
              shadowBlur: 0,
              shadowColor: '#fff'
            },
            amplitude: 8,
            color: [this.getColor(this.chartData.rows[0].percent)]
          }
        }
      }
    },
    getColor(v) {
      if (v > 0 && v <= 0.5) {
        return 'rgba(97,216,0,.7)'
      } else if (v > 0.5 && v <= 0.8) {
        return 'rgba(204,178,26,.7)'
      } else if (v > 0.8) {
        return 'rgba(241,47,28,.7)'
      } else {
        return '#c7c7cb'
      }
    },
    initWordCloud() {
    }
  }
}
</script>
<style lang="scss" scoped>
  .mapView {
    width: 100%;
    height: 500px;
    margin-top: 20px;
    .map-wrapper{
      height: 500px;
    }
    .title-wrapper{
      display:flex;
      align-items:center;
      height:60px;
      box-sizing:border-box;
      border-bottom:1px solid #eee;
      font-weight:bold;
      font-size:14px;
      padding-left:20px;
      justify-content: space-between;
      padding-right: 20px;
    }
    .liquidFill{
      height: 150px;
      width: 100%;
    }
    .wordCloud{
      height: 150px;
      width: 100%;
    }
  }

</style>
