<template>
  <div class="topView">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card shadow="hover" :body-style="{ padding: '15px' }">
          <common-card title="累计销售额">
            <template v-slot:value>
              <count-to :start-val="0" :end-val="32002565" :duration="2600" prefix="¥ "/>
            </template>
            <template v-slot:chart>
              <div class="compare">
                <span>日同比</span>
                <span class="emphasis">7.33%</span>
                <span class="increase"></span>
              </div>
              <div class="compare">
                <span>月同比</span>
                <span class="emphasis">7.33%</span>
                <span class="decrease"></span>
              </div>
            </template>
            <template v-slot:footer>
              <span>昨日销售额 </span>
              <span class="emphasis"><count-to :start-val="0" :end-val="32002565" :duration="2600" prefix="¥ "/></span>
            </template>
          </common-card>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover" :body-style="{ padding: '15px' }">
          <common-card title="累计订单量">
            <template v-slot:value>
              <count-to :start-val="0" :end-val="32002565" :duration="2600"/>
            </template>
            <template v-slot:chart>
              <order-chart></order-chart>
            </template>
            <template v-slot:footer>
              <span>昨日订单量 </span>
              <span class="emphasis"><count-to :start-val="0" :end-val="32002565" :duration="2600"/></span>
            </template>
          </common-card>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover" :body-style="{ padding: '15px' }">
          <common-card title="今日交易用户数">
            <template v-slot:value>
              <count-to :start-val="0" :end-val="32002565" :duration="2600"/>
            </template>
            <template v-slot:chart>
              <today-chart></today-chart>
            </template>
            <template v-slot:footer>
              <span>退货率 </span>
              <span class="emphasis">5.14%</span>
            </template>
          </common-card>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover" :body-style="{ padding: '15px' }">
          <common-card title="累计用户数">
            <template v-slot:value>
              <count-to :start-val="0" :end-val="32002565" :duration="2600"/>
            </template>
            <template v-slot:chart>
              <total-chart></total-chart>
            </template>
            <template v-slot:footer>
              <div class="compare">
                <span>日同比</span>
                <span class="emphasis">7.33%</span>
                <span class="increase"></span>
              </div>
              <div class="compare">
                <span>月同比</span>
                <span class="emphasis">7.33%</span>
                <span class="decrease"></span>
              </div>
            </template>
          </common-card>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
// 数字滚动
import CountTo from 'vue-count-to'
import CommonCard from '../CommonCard'
import orderChart from './orderChart'
import todayChart from './todayChart'
import totalChart from './totalChart'
export default {
  name: 'TopView',
  components: {
    CommonCard,
    CountTo,
    orderChart,
    todayChart,
    totalChart
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
  .topView{
    .compare{
      margin-top:3px;
      font-size:12px;
      color:#666;
      margin-right: 10px;
      .increase{
        width:0;
        height:0;
        border-width: 3px;
        border-color:transparent transparent red transparent;
        border-style:solid;
        margin:0 0 3px 5px;
        display: inline-block;
      }
      .decrease{
        width:0;
        height:0;
        border-width: 3px;
        border-color:green transparent transparent transparent;
        border-style:solid;
        margin:3px 0 0px 5px;
        display: inline-block;
      }
    }
  }
  .emphasis{
    color:#333;
    margin-left:5px;
    font-weight:bold;
  }
</style>
