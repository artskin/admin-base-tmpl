<template>
<div class="chartjs-line">
  <canvas ref="chartLine"></canvas>
</div>
</template>

<script lang="ts">
import { Component, Vue,Prop, Watch } from 'vue-property-decorator';
import Chart from 'chart.js/auto';

@Component({})
export default class ChartLine extends Vue {
  @Prop({default:"14px"}) size!:string

  $refs!:{
    chartLine:HTMLCanvasElement
  }
  created() {

  }
  
  mounted(){
    const ctx:any = this.$refs.chartLine.getContext('2d');
    let gradient = ctx.createLinearGradient(0, 0, 0, 225);
			gradient.addColorStop(0, "rgba(215, 227, 244, 1)");
			gradient.addColorStop(1, "rgba(215, 227, 244, 0)");
      
    let chartline = new Chart(this.$refs.chartLine, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
          label: "Sales",
          fill: true,
          backgroundColor: gradient,
          borderColor: '#3B7DDD',
          data: [
            2115,
            1562,
            1584,
            1892,
            1587,
            1923,
            2566,
            2448,
            2805,
            3438,
            2917,
            3327
          ]
        }]
      },
      options: {
        
        //bezierCurve : true,
        //Number - Tension of the bezier curve between points
        tension : 0.4,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        tooltips: {
          intersect: false
        },
        interaction:{
          intersect:false
        },
        hover: {
          intersect: true
        },
        plugins: {
          filler: {
            propagate: false
          }
        },
        scales: {
          x: {
            //reverse: true,
            grid: {
              display:true,
              color: "rgba(250,250,250,0.0)"
            }
          },
          y: {
            ticks: {
              stepSize: 1000
            },
            display: true,
            borderDash: [3, 3],
            grid: {
              color: "rgba(0,0,0,0.0)"
            }
          }
        }
      }
    });
    console.log(chartline)
    
  }

  handleSetLanguage(lang:string) {
    
  }
}

</script>

<style lang="scss" scoped>
.chartjs-line{
  width: 100%;
  height: 100%;
  height: 300px;
}
</style>
