<template>
<div class="chartjs-line">
  <canvas ref="chartLine"></canvas>
</div>
</template>

<script lang="ts">
import { Component, Vue,Prop, Watch } from 'vue-property-decorator';
import Chart from 'chart.js/auto';
import { AppModule } from '@/store/modules/app'
@Component({})
export default class ChartLine extends Vue {
  @Prop({default:"14px"}) size!:string

  $refs!:{
    chartLine:HTMLCanvasElement
  }
  chartline:any
  created() {}
  
  get theme(){
    return AppModule.theme
  }
  @Watch('theme')
  themeChanged(nv,ov){
    this.chartData.datasets[0].borderColor = getComputedStyle(document.body).getPropertyValue('--primary')
    this.chartline.update()
  }
  get themeVariables(){
    return getComputedStyle(document.body).getPropertyValue('--primary')
  }
  
  get gradient(){
    const ctx:any = this.$refs.chartLine.getContext('2d');
    let gradientColor = ctx.createLinearGradient(0, 0, 0, 225);
			gradientColor.addColorStop(0, "rgba(215, 227, 244, 1)");
			gradientColor.addColorStop(1, "rgba(215, 227, 244, 0)");
    return gradientColor
  }
  
  chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      label: "Sales",
      fill: true,
      backgroundColor: '',
      borderColor: this.themeVariables,
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
  }
  mounted(){
    this.chartData.datasets[0].backgroundColor = this.gradient;
    this.chartline = new Chart(this.$refs.chartLine, {
      type: "line",
      data: this.chartData,
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
