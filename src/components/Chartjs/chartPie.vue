<template>
  <div class="chartjs">
    <canvas ref="chartLine"></canvas>
  </div>
</template>

<script lang="ts">
import { Component, Vue,Prop, Watch } from 'vue-property-decorator';
import Chart from 'chart.js/auto';

@Component({})
export default class ChartBar extends Vue {
  @Prop({default:"14px"}) size!:string
  $refs!:{
    chartLine:HTMLCanvasElement
  }
  created() {

  }
  
  mounted(){
    let chartline = new Chart(this.$refs.chartLine, {
      type: "doughnut",
      data: {
        labels: ["Visitor", "Saler", "Viper", "Stranger"],
        datasets: [{
          label: "Sales",
          fill: true,
          backgroundColor:[
            "#4E88F3",
            "#F9B653",
            "#F7777F",
            "#51CBA8"
          ],
          data: [
            40254,
            22986,
            9852,
            21917
          ]
        }]
      },
      options: {
        responsive: false,
        cutout:96,
        interaction:{
          intersect:false
        },
        hover: {
          intersect: true
        },
        plugins: {
          filler: {
            propagate: false
          },
          legend: {
            //display: false
            position:'bottom'
          },
          tooltips: {
            intersect: false
          },
        },
        scales: {
          x: {
            display:false,
            //reverse: true,
            grid: {
              display:false,
              color: "rgba(250,250,250,0.0)"
            }
          },
          y: {
            display:false,
            ticks: {
              stepSize: 1000
            },
            grid: {
              color: "rgba(0,0,0,0.0)"
            }
          }
        }
      }
    });
  }
}

</script>

<style lang="scss" scoped>
.chartjs{
  width: 100%;
  height: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
