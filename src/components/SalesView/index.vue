<template>
  <div class="salesView">
    <el-card shadow="hover" :body-style="{ padding: '0px 0px 20px 0px' }">
      <template v-slot:header>
        <div class="menu-wrapper">
          <el-menu class="menu" mode="horizontal" :default-active="activeIndex" @select="onMenuSelect">
            <el-menu-item index="1">销售额</el-menu-item>
            <el-menu-item index="2">访问量</el-menu-item>
          </el-menu>
          <div class="menu-rigth">
            <el-radio-group v-model="radioSelect" size="small">
              <el-radio-button label="今日"></el-radio-button>
              <el-radio-button label="本周"></el-radio-button>
              <el-radio-button label="本月"></el-radio-button>
              <el-radio-button label="今年"></el-radio-button>
            </el-radio-group>
            <el-date-picker
              class="date-picker"
              size="small"
              type="daterange"
              v-model="date"
              :picker-options="pickerOptions"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"></el-date-picker>
          </div>
        </div>
      </template>
      <template>
        <div class="chart-wrapper">
          <v-chart :options="chartOption"></v-chart>
          <div class="view-list">
            <div class="list-title">排行榜</div>
            <div class="list-item" v-for="item in rankDate" :key="item.number">
              <span :class="['item-number', +item.number<=3?'active':'' ]">{{item.number}}</span>
              <span class="item-name">{{item.name}}</span>
              <span class="item-money">{{item.money}}</span>
            </div>
          </div>
        </div>
      </template>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: '1',
      radioSelect: '今日',
      date: null,
      pickerOptions: {
        shortcuts: [
          {
            text: '最近一周',
            onClick(picker) {
              const start = new Date()
              const end = new Date()
              start.setTime(start.getTime() - 3600 * 24 * 1000 * 7)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近一个月',
            onClick(picker) {
              const start = new Date()
              const end = new Date()
              start.setTime(start.getTime() - 3600 * 24 * 1000 * 30)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近三个月',
            onClick(picker) {
              const start = new Date()
              const end = new Date()
              start.setTime(start.getTime() - 3600 * 24 * 1000 * 90)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      },
      chartOption: {
        title: {
          text: '年度销售额',
          textStyle: {
            fontSize: 12,
            color: '#666'
          },
          top: 25,
          left: 20
        },
        xAxis: {
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          axisTick: {
            alignWithLabel: true,
            lineStyle: {
              color: '#999'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#999'
            }
          },
          axisLabel: {
            color: '#333'
          }
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            lineStyle: {
              type: 'dotted',
              color: '#eee'
            }
          }
        },
        series: [{
          type: 'bar',
          barWidth: '35%',
          data: [200, 250, 300, 452, 360, 250, 200, 250, 300, 452, 360, 250]
        }],
        color: ['#3398DB'],
        grid: {
          top: 70,
          left: 60,
          right: 60,
          bottom: 50
        }
      },
      rankDate: [
        {
          number: 1,
          name: '麦当劳',
          money: '100'
        }
      ]
    }
  },
  methods: {
    onMenuSelect(index) {
      this.activeIndex = index
    }
  }
}
</script>
<style lang="scss" scoped>
.salesView{
  margin-top:20px;
  .menu-wrapper{
    display:flex;
    position:relative;
    .menu-rigth{
      position:absolute;
      top:0px;
      right:20px;
      height:50px;
      display:flex;
      align-items:center;
      justify-content:flex-end;
      .date-picker{
        margin-left:20px;
      }
    }
    .menu{
      width:100%;
      padding-left:20px;
      .el-menu-item{
        height:50px;
        line-height:50px;
        margin:0 20px;
      }
    }
  }
  .chart-wrapper{
    display:flex;
    height:270px;
    .echarts{
      flex:0 0 70%;
      width:70%;
      height:100%;
    }
    .view-list{
      flex: 1;
      width:100%;
      height:100%;
      overflow:hidden;
      .list-title{
        margin-top:20px;
        font-size:12px;
        color:#666;
        font-weight:500;
        margin-bottom:15px;
      }
      .list-item{
        display:flex;
        align-items:center;
        font-size:12px;
        padding:6px 20px 6px 0;
        height:20px;
        .item-number{
          display:flex;
          align-items:center;
          justify-content:center;
          width:20px;
          height:20px;
          color:#333;
          &.active{
            border-radius:50%;
            background:#000;
            color:#fff;
            font-weight:500;
          }
        }
        .item-name{
          margin-left:10px;
          color:#333;
        }
        .item-money{
          flex:1;
          text-align:right;
        }
      }
    }
  }
}

</style>
