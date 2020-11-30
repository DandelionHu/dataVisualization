<template>
  <div class="bottomView">
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">关键词搜索</div>
        </template>
        <template>
          <div class="chart-wrapper">
            <div class="chart">
              <div class="chart-title">搜索用户数</div>
              <div class="chart-data">15455</div>
              <v-chart :options="searchOption"></v-chart>
            </div>
            <div class="chart">
              <div class="chart-title">搜索量</div>
              <div class="chart-data">15455</div>
              <v-chart :options="searchNumOption"></v-chart>
            </div>
          </div>
          <div class="table-wrapper">
            <el-table :data="tableData">
              <el-table-column prop="rank" label="排名" width="180"></el-table-column>
              <el-table-column prop="keyword" label="排名" width="180"></el-table-column>
              <el-table-column prop="count" label="总搜索量"></el-table-column>
              <el-table-column prop="users" label="搜索用户数"></el-table-column>
            </el-table>
            <el-pagination layout="prev,pager,next" :total="100" :page-size="4" background @current-change="onPageChange"></el-pagination>
          </div>
        </template>
      </el-card>
    </div>
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">
            分类销售排行
            <el-radio-group v-model="radioSelect" size="small">
              <el-radio-button label="品类"></el-radio-button>
              <el-radio-button label="商品"></el-radio-button>
            </el-radio-group>
          </div>
        </template>
        <template>
          <v-chart :options="categoryOptions" class="pieChart"></v-chart>
        </template>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchOption: {
        xAxis: {
          type: 'category',
          boundaryGap: false
        },
        yAxis: {
          show: false,
          min: 0,
          max: 510
        },
        series: [{
          type: 'line',
          data: [100, 200, 500, 51, 23, 145, 155],
          areaStyle: {
            color: 'rgba(95,187,255,.5)'
          },
          lineStyle: {
            color: 'rgb(95,187,255)'
          },
          itemStyle: {
            opacity: 0
          },
          smooth: true
        }],
        grid: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }
      },
      searchNumOption: {},
      tableData: [
        {
          id: 1,
          rank: 1,
          keyword: '北京',
          count: 100,
          users: 90,
          range: '90%'
        }
      ],
      radioSelect: '品类',
      categoryOptions: {}
    }
  },
  mounted() {
    this.renderPieChart()
  },
  methods: {
    onPageChange() {

    },
    renderPieChart() {
      const mockData = [
        {
          name: '粉面粥店',
          value: 67,
          percent: '15.40%',
          itemStyle: {
            color: '#e7e702'
          }
        },
        {
          name: '简餐便当',
          value: 97,
          percent: '22.30%',
          itemStyle: {
            color: '#8d7fec'
          }
        },
        {
          name: '汉堡披萨',
          value: 92,
          percent: '21.15%',
          itemStyle: {
            color: '#5085f2'
          }
        }
      ]
      this.categoryOptions = {
        title: [{
          text: '品类分布',
          textStyle: {
            fontSize: 14,
            color: '#666'
          },
          left: 20,
          top: 20
        },
        {
          text: '累计订单量',
          subtext: '320',
          x: '34.5%',
          y: '42.5%',
          textAlign: 'center',
          textStyle: {
            fontSize: 14,
            color: '#999'
          },
          subtextStyle: {
            fontSize: 28,
            color: '#333'
          }
        }],
        series: [{
          name: '品类分布',
          type: 'pie',
          data: mockData,
          label: {
            normal: {
              show: true,
              position: 'outter',
              formatter: function(params) {
                return `${params.data.name} | ${params.data.percent}`
              }
            }
          },
          center: ['35%', '50%'],
          radius: ['45%', '60%'],
          labelLine: {
            normal: {
              length: 5,
              length2: 3,
              smooth: true
            }
          },
          clockWise: true,
          itemStyle: {
            borderWidth: 4,
            borderColor: '#fff'
          }
        }],
        legend: {
          type: 'scroll',
          orient: 'verticel',
          height: 250,
          left: '70%',
          top: 'middle',
          textStyle: {
            color: '#8c8c8c'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: function(params) {
            return params.seriesName + '<br/>' + params.marker + params.data.name + '<br/>' +
                '数量：' + params.data.value + '<br/>' +
                '占比：' + params.data.percent
          }
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .bottomView{
    margin-top:20px;
    display:flex;
    .view{
      flex:1;
      box-sizing: border-box;
      &:first-child{
        padding-right:10px;
      }
      &:last-child{
        padding-left:10px;
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
      .chart-wrapper{
        display:flex;
        padding:0 10px;
        margin-top:20px;
        .chart{
          flex:1;
          padding:0 10px;
          .chart-title{
            color: #999;
            font-size:14px;
          }
          .chart-data{
            font-size:20px;
            color:#333;
            font-weight:bold;
            letter-spacing:2px;
          }
          .echarts{
            height:50px;
          }
        }
      }
      .table-wrapper{
        margin-top:20px;
        padding:0 20px 0px;
        height: 300px;
        .el-pagination{
          margin-top:20px;
          text-align: right;
        }
      }
      .pieChart{
        height:475px !important;
      }
    }
  }
</style>
