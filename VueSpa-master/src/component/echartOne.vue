<template>
  <div class="echartOne" id="echartOne"></div>
</template>
<script>
let echarts = require('echarts')
import axios from 'axios'
export default {
  data() {
    return {
      option: {
        title: {
          text: "最近50天项目完成情况",
          textStyle: {
            color: "#fff",
            fontSize: 12,
            height: 50,
            lineHeight: 50,
            rich: {}
          },
          x: "center"
        },
        xAxis: {
          data:[]
        },
        yAxis: {
          splitLine: {
            lineStyle: {
              color: "#008080"
            }
          }
        },
        series: [
          {
            name: "销量",
            type: "bar",
            data: [],
            barWidth: 13,
            itemStyle: {
              emphasis: {
                barBorderRadius: 7
              },
              normal: {
                barBorderRadius: 7,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: "#fff"
                  },
                  {
                    offset: 1,
                    color: "#00caca"
                  }
                ])
              }
            }
          }
        ],
        textStyle: {
          color: "#fff"
        }
      }
    };
  },
  mounted() {
    let node = document.getElementById("echartOne");
    this.$store.commit("setChart", node);
    this.getSeriesData();
    this.$store.commit("resize");
  },
  methods: {
     getSeriesData() {
            axios.get('echart/yAxis/data').then(res =>{
              this.option.series[0].data=res.data.series;
              this.option.xAxis.data=res.data.xAxisData;
              this.$store.state.mychartOne.setOption(this.option);
            }).catch(function(error){
              console.log(error)
            })

        }
  }
};
</script>
<style>
.echartOne {
  width: 70%;
  height: 200px;
  background-color: #404040;
  line-height: 50px;
}
</style>
