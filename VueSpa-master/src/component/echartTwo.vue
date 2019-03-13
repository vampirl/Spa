<template>
  <div class="echartTwo" id="echartTwo"></div>
</template>
<script>
var echarts = require("echarts");
export default {
  mounted() {
    var mychartTwo = echarts.init(document.getElementById("echartTwo"));
    mychartTwo.setOption({
      title: {
        text: "访问量统计",
        subtext: "最近7天用户访问量",
        textStyle:{
          fontSize:12
        },
        itemGap:20
      },
      tooltip: {
        trigger: "axis"
      },
      toolbox: {
        show: true,
        feature: {
          magicType: { show: true, type: ["line", "bar"] },
        }
      },
      calculable: true,
      xAxis: [
        {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          splitLine: {
            show:true,
            lineStyle: {
              color: "#B0E0E6"
            }
          }
        }
      ],
      yAxis: [
        {
          type: "value",
          splitLine: {
            show:true,
            lineStyle: {
              color: "#B0E0E6"
            }
          }
        }
      ],
      series: [
        {
          name: "访问量",
          type: "line",
          smooth: true,
          itemStyle: { normal: { areaStyle: { type: "default" },lineStyle:{color:'#40E0D0'} } },
          data: [1200, 1300, 800, 850, 600, 500, 1600]
        }
      ],
      grid: {
        x: 100,
        y: 150
      },
      color: {
        type: "radial",
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          {
            offset: 1,
            color: "	#AFEEEE"
          }
        ],
        globalCoord: false
      }
    });
    window.addEventListener("resize", function() {
      mychartTwo.resize();
    });
  }
};
</script>

<style>
.echartTwo {
  width: 80%;
  height: 400px;
  margin-left: 20px;
  margin-top: 18px;
}
</style>

   